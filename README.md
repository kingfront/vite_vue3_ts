# Vue 3 + Typescript + Vite

手机端简易模板 demo

## 配置支持 jsx

1. 安装依赖

```js
npm install @vitejs/plugin-vue-jsx -D
```

2. 配置插件

```js
vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx({})]
})
```

3. 解决导入 jsx 组件后，提示 隐式具有'any'类型 问题
   在 env.d.ts 文件中，声明没有类型的库导入为 any

```js
declare module '*';
```
