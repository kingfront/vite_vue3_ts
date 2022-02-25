<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h1 align="center">手机端简易示例《随机热门音乐》</h1>

<p align="center">Vue 3 + Typescript + Vite + Vant + Pinia</p>

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/kingfront/vite_vue3_ts" />
    <img src="https://img.shields.io/github/languages/top/kingfront/vite_vue3_ts?style=flat-square&color=green"  alt="GitHub top language" />
    <img src="https://img.shields.io/badge/dynamic/json?color=green&label=github&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dkingfront&style=flat-square&logo=github" />
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/kingfront/vite_vue3_ts?color=yellow">
</p>

<p align="center">
🔥 <a href="https://vite-vue3-ts.vercel.app/">Demo 访问</a>
&nbsp;
🌈 <a href="https://youzan.github.io/vant">掘金博客</a>
</p>

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
declare module '*.jsx';
```
