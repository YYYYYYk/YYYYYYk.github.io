# 工具

## mpm
### 常用命令
``` js
npm config list // 查看配置
npm i xxx -g  // --global的缩写，安装在操作系统中，通常在C盘某系统文件夹下
npm i xxx -S  // --save的缩写，是生成环境打包所需要的，在dependencise对象中（如elementUI，vant）
npm i xxx -D // --save-dev, 是开发环境所需要的，真正上线并不需要这些包, 在devDependencise对象中（如webpack，各种plugins）
npm i xxx // 啥都不加即 -S
npm i xxx --registry=https://registry.npm.taobao.org // 使用淘宝镜像下载依赖
```
## nvm
::: warning
先卸载掉已有的npm然后安装

macs可能遇到的问题 [zsh: command not found: nvm](https://blog.csdn.net/zm_miner/article/details/124850215)
:::
### 常用命令
``` js
nvm current // 当前版本号
nvm list // 已安装的node
nvm list available // 可安装的nvm
nvm install // 版本号
nvm use // 版本号
```


