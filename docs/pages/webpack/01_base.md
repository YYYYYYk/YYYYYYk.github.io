# 基础

## 发布到 npm

[Vue 封装组件并发布到 npm 仓库](https://zhuanlan.zhihu.com/p/459284053)

### 本地测试 npm link

`npm link`操作会在当前项目的`node_modules`目录下创建一个指定项目路径的超链接，类似创建快捷方式.
[作用与使用](https://blog.csdn.net/weixin_42274805/article/details/123474053)

```cmd
// 注意区分项目是否在同一目录下
npm link
npm unlink
```

### 版本升级

```cmd
// 版本格式 x.x.x    major.minor.patch
npm version patch
npm version minor
npm version major
```

### 常用

```js
npm outdated //查看当前项目中所有依赖包的最新版本
```
