# 若依

[官网](http://doc.ruoyi.vip/ruoyi-vue/)

0. java 相关：
   @RestController 表示该类是一个控制器，并且返回 json 数据
   @requestMapping("/user") //表示该类中的所有方法都是以/user 为父路径
   @PostMapping("/login") post 请求
   @GetMapping("getInfo") get 请求
   @PostConstruct：加上该注解会在项目启动时执行该方法。比如查询一些表数据存储到 redis
   @Value("${token.expireTime}") 表示从 yml 中获取值
   @bean spring 的注解，用于在配置类中声明一个 bean

1. redis
   key + value + 有效期
   取值快，后续可以直接从 redis 取数据，不用每次查询数据库
2. 在线用户展示
   用户登录后会把用户信息存入到 redis 中，直接从 redis 获取即可
   redis 中有效期 30min，即用户 30min 未操作则会自动掉线。
   后续接口请求中，判断 jwt 里的 token 有效时间是否小于 20min，小于则重置有效期即可
3. 在线用户强退
   在 redis 中删除该用户即可，其实就是删除旧的 token，下次请求接口时会返回 401
4. 防止接口重复请求
   axiosCancel 或 时间戳 实现，应用于非 get 请求。(同样需要加个开关控制是否允许接口重复请求，在 config 中加 isRepeatSubmit)
5. 通用文件下载
   file-saver
6. 通过 IP 获取具体位置信息
   后端通过调用第三方接口获取
7. JWT 生成时机
   服务端校验账号密码成功后，会生成 token 返回给前端，同时该 token 也会存入 redis,redis 的 key 为 token 的 uuid。
   前端拿到 token 后存入 cookie，后续请求头 header 都会带上该 token
   后端也有个过滤器，每次会解析请求头的 token 信息
8. springSecurity 认证
   web 在调用其接口时有个认证、授权的过程，过滤器链形式认证。
   可以重写认证方式，默认是账号密码登录认证
9. rbac 模型
   基于对角色权限的控制，进而控制用户权限
   页面权限：
   按钮权限：
