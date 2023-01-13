# git
## 全局配置
``` js
git config --list // 查看全局配置
git config --global user.name 'xxx' // 修改用户名
git config --global user.email 'xxx@qq.com' // 修改用户邮箱
```
## 项目配置
``` js
 git remote -v // 远程仓库地址
 git remote add origin 'url' // 添加远程仓库地址(初始化时)
 git remote set-url origin 'url' // 设置远程仓库地址(相当于修改远程地址)

 git branch // 查看本地分支
 git checkout master // 切换到本地master分支

 git branch -a // 查看远程分支
 git checkout -b dev origin/dev // 把远程dev分支切换到本地

 git checkout --orphan new_branch // 创建新分支(不包含git提交记录)
 
 git add . // 将所有改变的文件添加到暂存区
 git commit 'fix: 123'// 将暂存区的内容上传到本地仓库
 git push // 将本地仓库内容上传到服务器
 git push -f // 强制推送，即使有未拉取的代码
 git push origin main -f // 强制将本地main分支推送到远程(orign表示远程仓库)
 git push --set-upstream origin master -f
```
## ssh
SSH 为 Secure Shell 的缩写，由 IETF 的网络小组（Network Working Group）所制定；SSH 为建立在应用层基础上的安全协议。SSH 是较可靠，专为**远程登录会话和其他网络服务**提供安全性的**协议**。

### ssh会话连接过程
1. 本地向远程服务端发起连接
2. 服务端随机生成一个字符串发送给发起登录的本地端
3. 本地对该字符串使用私钥（~/.ssh/id_rsa）加密发送给服务端
4. 服务端使用公钥（~/.ssh/id_rsa.pub）对私钥加密后的字符串进行解密
5. 服务端对比解密后的字符串和第一次发送给客户端未加密的字符串，若一致则判断为登录成功

### github ssh keys
``` js
// 检查否存在 id_rsa 和 id_rsa.pub文件，如果存在，说明已经有SSH Key
cd ~/.ssh
ls 
// 生成ssh key. 其中id_rsa 就是私钥，需要保存在开发者电脑中;id_rsa.pub 是公钥，放在 github 服务器中
ssh-keygen -t rsa -C "youer_email@example.com" 
// 复制 id_rsa.pub 中的内容到github中
// 连接测试
ssh -T git@github.com
```
::: warning
mac上deploy时可能还会出现：Permission denied (publickey)
执行 `ssh-add ~/.ssh/id_rsa`
:::