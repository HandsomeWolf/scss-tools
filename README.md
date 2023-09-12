实验性版，不推荐使用！

若使用的是`vite`请在`vite.confit.ts`中加入以下配置，使所有页面都可以使用全局的sass`变量`、`函数`以及`mixin`
```ts
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/static/styles/index.scss";`,
      },
    },
  },
});
```