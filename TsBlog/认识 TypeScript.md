## 认识 TypeScript

#### 1. TypeScript 与 JavaScript

* TypeScript 是 JavaScript 的超集，可以通过编译 由 `.ts` 转化为 `.js`

* TypeScript 完全兼容 JavaScript，一段 TypeScript 代码中可以插入 JavaScript 不受任何影响

* TypeScript  采用静态类型检查，在编译阶段会进行类型检查，提高代码可维护性

  在运行阶段，与普通 JavaScript 一样不会进行类型检查

* TypeScript 坚持与 JavaScript 的 ESCMScript 标准同步

* TypeScript 编译的时候即使报错了，还是会生成编译结果，可以通过配置 `tsconfig.json` 解决这个问题

#### 2. TypeScript 的运行与编译

前提：系统已经安装 Node.js

```bash
// 全局安装tsc命令
npm install -g typescript
```

```bash
// 编译TypeScript文件
tsc hello.ts
// 产生 hello.js 文件
```

```bash
// 运行 js 文件
node hello.js
```

简化步骤

```bash
// 先编译再执行
npm i -g ts-node
```

