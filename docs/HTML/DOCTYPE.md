---
title DOCTYPE
---

## DOCTYPE有什么作用？

DOCTYPE （document type） 声明位于文档的最前面，处于标签之前，它不是 html 标签。

主要作用是告诉浏览器使用哪个版本的 HTML 规范来渲染文档。DOCTYPE 不存在或形式不正确会导致HTML文档以**混杂模式**呈现。

## 标准模式与混杂模式如何区分?

标准模式（Standards mode）以浏览器支持的最高标准运行；

混杂模式（Quirks mode）中页面是一种比较宽松的向后兼容的方式显示。

## HTML5为什么只需要写 `<!DOCTYPE HTML>`

HTML5 不基于 SGML（Standard Generalized Markup Language 标准通用标记语言），因此不需要对 DTD（DTD 文档类型定义）进行引用，但是需要DOCTYPE来规范浏览器行为。

HTML4.01 基于 SGML ，所以需要引用 DTD 。才能告知浏览器文档所使用的文档类型，如下：
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`

```javascript
const name = 'cooldream';   // 仅测试js样式
```
