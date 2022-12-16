# CI/CD
Continuous Integration 持续集成
Continuous delivery 持续交付

## Github actions
#### 自动化构建和测试
[文档](https://docs.github.com/cn/actions/quickstart)
``` yml
name: test
on: # 触发条件
    push: # git push
        branches: # 可多个分支
            - master 
        paths: # 文件改动包含以下则会触发
            - '.github/workflows/**'
            - '__test__/**'
            - 'src/**'
jobs: # 任务
    test: # 任务1
        runs-on: ubuntu-latest # 操作系统

        steps: # 步骤
            - uses: actions/checkout@v2 # 步骤1，使用的是第三方的uses，做的是git pull
            - name: Use Node.js # 步骤2， name可省略
              uses: actions/setup-node@v1 # 使用的是第三方的uses
              with:
                  node-version: 14 # 指定版本号
            - name: lint and test # 步骤3,名称
              run: | # '|'多行语法, npm run test:remote
                  npm i
                  npm run lint
```

## docker
传统概念：
- 镜像image：centos.ios文件就是一个镜像
- 容器container：安装出来的系统就是容器

一种虚拟机技术，比传统虚拟机（vmware、virtualbox）更简单、轻量
- 启动快、资源占用小、体积小

基于docker，我们可以把开发、测试环境，一键部署到任何一台机器上。只要该机器安装了docker

运维工程师对docker还有更全的应用：微服务、弹性拓展等
### 常用命令
``` shell
镜像
docker images // 查看所有镜像
docker pull <image-name>:<tag> // 拉取
docker rmi <image-id> // 删除（id输入前几位即可）
docker push <username>/<respository>:<tag> // 上传镜像

容器
docker run -p xxx:xxx -v hostPath:containerPath -d --name <container-name> <image-name> // 启动容器
-p 端口映射 -v 路径，文件映射 -d 后台运行 --name 容器名称

docker ps [-a] // 查看所有容器 -a隐藏容器
docker stop <container-id> // 停止
docker rm <container-id> [-f] // 删除 -f强制删除
docker inspect <container-id> // 查看容器信息，如IP
docker logs <container-id> // 查看容器日志

ps：docker images出现 <none>的情况，可以运行docker image prune删除
```
### dockerfile
必须是Dockerfie这个文件名，而且在项目根目录上

``` dockerfile
# 创建Dockerfile文件  
# 环境
FROM node:14
# 根目录
WORKDIR /app
# 拷贝当前目录下所有文件
COPY . /app

# 构建镜像时，一般做系统配置，安装必备的软件。可有多个RUN
RUN xxx

# 启动容器时，只能有一个CMD；npx pm2 log是用来阻塞控制台的
CMD npm i && npm run prd-dev && npx pm2 log

# 环境变量
ENV k1 = v1
ENV k2 = v2
```
命令
``` shell
# 建立镜像
dosker build -t <image-name> . # 最后的.表示dockerfile在当前目录下
docker images
# 创建容器
docker run -p 8081:3000 -d --name <container-name> <image-name>
docker ps
```
### docker-compose
开发环境需要多个环境（nodejs、mysql、redis），需要启动多个容器。连同多个容器，就需要用到docker-compose。

通过一个配置文件，让你的系统一键启动所有的运行环境：nodejs、mysql、redis、mongodb

配置文件`docker-compose.yml`

``` yml
version: '3'
services:
  editor-server: # service name!
    build:
        context: .
        dockerfile: Dockerfile
    image: editor-server # 依赖于当前 Dockerfile 创建镜像
    container_name: editor-server
    ports:
        - 8081:3000 # 宿主机通过 8081 访问
  editor-redis:
    image: redis # 引用官网 redis 镜像
    container_name: editor-redis
    ports:
        - 6378:6379 # 宿主机可以用 127.0.0.1:6378 即可连接容器中的数据库
    environment:
        - TZ=Asia/Shanghai # 设置时区
```
命令
``` shell
docker-compose build <service-name> # 构建容器
docker-compose up -d # 启动所有服务器，-d后台启动
docker-compose ps # 查看
docker-compose -down # 停止所有服务
```
### 连接mysql
redis无数据库，而mysql需要创建数据库
redis是缓存，无需数据持久化，而mysql需要

``` yml
# docker-compose.yml
version: '3'
services:
  editor-mysql:
      image: mysql # 引用官网 mysql 镜像
      container_name: editor-mysql
      restart: always # 容器报错重启
      privileged: true # 高权限，执行下面的 mysql/init
      command: --default-authentication-plugin=mysql_native_password # 解决无法远程访问的问题
      ports:
          - 3305:3306 # 宿主机可以用 127.0.0.1:3305 即可连接容器中的数据库
      volumes:
          - .docker-volumes/mysql/log:/var/log/mysql # 数据持久化
          - .docker-volumes/mysql/data:/var/lib/mysql
          - ./mysql/init:/docker-entrypoint-initdb.d/ # 初始化 sql
      environment:
          - MYSQL_DATABASE=testdb # 初始化容器时创建数据库
          - MYSQL_ROOT_PASSWORD=Mysql_2019
          # - MYSQL_USER=shuangyue #创建 test 用户
          # - MYSQL_PASSWORD=shuangyue #设置 test 用户的密码
          - TZ=Asia/Shanghai # 设置时区
    editor-mongo:
        image: mongo # 引用官网 mongo 镜像
        container_name: editor-mongo
        restart: always
        volumes:
            - '.docker-volumes/mongo/data:/data/db' # 数据持久化
        environment:
            - MONGO_INITDB_DATABASE=testdb
            # - MONGO_INITDB_ROOT_USERNAME=root
            # - MONGO_INITDB_ROOT_PASSWORD=123456
            - TZ=Asia/Shanghai # 设置时区
        ports:
            - '27016:27017' # 宿主机可以用 127.0.0.1:27016 即可连接容器中的数据库
```


### 自动发布到测试机
- github action监听git提交
- 登录测试机，获取最新dev分支
- 重新构建镜像
- 重启所有容器

