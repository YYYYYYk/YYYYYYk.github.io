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
