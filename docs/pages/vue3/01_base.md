# [使用](https://juejin.cn/post/7151909645399883807)

## 生命周期
- Vue3 生命周期钩子都以 on 开头，并且需要在组件中手动导入。
- Vue3 取消了 beforeCreate 和 created 钩子。如果需要在组件创建前注入逻辑，直接在 `<script setup>` 中编写同步代码就可以了。如果这几个钩子同时存在，setup 的执行顺序要优先于 beforeCreate 和 created。
- Vue3 中组件卸载的钩子名称有变化，beforeDestroy 改为 onBeforeUnmount，destroyed 改为 onUnmounted。

## 父子组件传值
#### 父传子
``` vue
<template>
  <!-- 使用 someProp 或 props.someProp -->
  <div>{{ someProp || props.someProp  }}</div>
</template>
<script setup>
  const props = defineProps({
    // 写法一
    // someProp: String
    // 写法二
    someProp: {
      type: String,
      required: true
    }
  })
  console.log(props.someProp); // parent message
</script>
```
注意：defineProps 、defineEmits 、 defineExpose 和 withDefaults 这四个宏函数只能在`<script setup>`中使用。他们不需要导入，会随着`<script setup>`的处理过程中一起被编译。

#### 子传父
``` vue
<!-- 子组件 -->
<script setup>
  const emit = defineEmits(['someEvent'])
  function onClick() {
    emit('someEvent', 'child message')
  }
</script>
<!-- 父组件 -->
<template>
  <ChildView @someEvent="someEvent" />
</template>
<script setup>
function someEvent(value) {
  console.log(value) // child message
}
</script>
```
#### 父组件使用子组件数据
``` vue
<!-- 子组件 -->
<script setup>
import { ref } from 'vue'
const msg = ref('hello vue3!')
function change() {
  msg.value = 'hi vue3!'
}
// 属性或方法必须暴露出去，父组件才能使用
defineExpose({ msg, change });
</script>

<!-- 父组件 -->
<template>
  <ChildView ref="child"></ChildView>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const child = ref(null)
onMounted(() => {
  // child.value.msg // hello vue3!
  child.value.change() // hi vue3!
});
</script>
```

## 双向绑定v-model
`v-model` 等价于 `:model-value="someValue"` 和`@update:model-value="someValue = $event"`

同样也可以自定义
`v-model:foo` 等价于 `:foo="someValue"` 和 `@update:foo="someValue = $event"`
``` vue
<!-- 父组件 -->
<template>
  <B v-model="ss" />
</template>
<script setup>
const ss = ref('vue3');
</script>
<!-- 子组件 -->
<template>
  <div @click='emit('update:modelValue', 'hello')'>
</template>
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue']);
</script>
<!-- 子组件结合input -->
<template>
  <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
</template>
<script setup>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue']);
</script>
<!-- 子组件的input结合computed -->
<template>
  <input v-model="newValue" />
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const newValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
});
</script>
```

## 路由跳转和获取参数
``` vue
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// 获取路由参数
console.log(route.query.msg)
// 跳转
function onClick() {
  router.push({
    path: '/about',
    query: {
      msg: 'hello vue3!'
    }
  })
}
</script>
```

## 获取上下文对象
Vue3 的 setup 中无法使用 this 这个上下文对象。

注意：ctx 只能在开发环境使用，生成环境为 undefined 。 推荐使用 proxy ，在开发环境和生产环境都可以使用
``` vue
<script setup>
import { getCurrentInstance } from 'vue'

// 以下两种方法都可以获取到上下文对象
const { ctx } = getCurrentInstance()
const { proxy }  = getCurrentInstance();
</script>
```

## 插槽的使用
v-slot 在 Vue2 中也可以使用，但必须是 Vue2.6+ 的版本。
``` vue
<!-- 子组件 -->
<template>
  <div>child</div>
  <slot name="content" msg="hello vue3!"></slot>
</template>

<!-- 父组件 -->
<script setup>
import ChildView from './ChildView.vue'
</script>

<template>
  <div>parent</div>
  <ChildView>
    <template v-slot:content="{ msg }">
      <div>{{ msg }}</div>
    </template>
  </ChildView>

  <!-- ChildView 也可以简写为： -->
  <ChildView>
    <template #content="{ msg }">
      <div>{{ msg }}</div>
    </template>
  </ChildView>
</template>
```

## 缓存路由组件
Vue3 和 Vue2 的用法是一样的，都是使用 KeepAlive 包裹 Component。但缓存路由组件，Vue3 需要结合插槽一起使用

2个生命周期狗子，onActivated() 和 onDeactivated()
``` vue
<!-- Vue3 中缓存路由组件 -->
<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <Component :is="Component"></Component>
    </KeepAlive>
  </RouterView>
</template>
<script setup>
import { onActivated, onDeactivated } from 'vue'
onActivated(() => { })
onDeactivated(() => { });
</script>
```

## 逻辑复用
Vue2 中逻辑复用主要是采用 mixin，但 mixin 会使数据来源不明，同时会引起命名冲突。所以 Vue3 更推荐的是全新的 Composition Api。
``` js
// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// 按照惯例，组合式函数名以 use 开头
export function useMouse() {
  // 组合式函数管理的数据
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 组合式函数可以挂靠在所属组件的生命周期上，来启动和卸载副作用
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // 通过返回值暴露所管理的数据
  return { x, y }
}

<!-- 使用 -->
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
``` 

## 全局 API
Vue2 中的全局属性或全局方法，是在构造函数 Vue 的原型对象上进行添加，如：`Vue.prototype.$axios = axios` 。
但在 Vue3 中，**需要在 app 实例上添加**
``` js
// main.js
app.config.globalProperties.$axios = axios
```
在组件中使用：
``` vue
<script setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
proxy.$axios.get('http://...')
</script>
```
Vue3 中其他的全局 API，如 directive 、component 等，跟 Vue2 的用法都差不多，只不过一个是在 Vue 上调用，一个是在 app 实例上调用
``` js
// main.js
// 全局自定义指令
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
// 全局自定义组件
import CustomComp from './components/CustomComp.vue'
app.component('CustomComp', CustomComp)
```
需要注意的是，Vue3 **废弃了** `filter` 这个方法，因为通过函数或 computed 可以实现一样的功能。调用method也能实现，不过性能不好。

