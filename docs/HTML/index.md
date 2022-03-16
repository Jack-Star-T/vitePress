---
title 基础
---

## 介绍

HTML 的英文全称叫 `Hyper Text Markup Language` ,也叫做 **超文本标记语言** ，是一种使用结构化 Web 网页及其内容的标记语言。

主要用于定义网页中的结构。

## HTML 语义化

1. 用正确的标签做正确的事情。

2. html 语义化让页面的**内容结构化，结构更清晰**，便于对浏览器、搜索引擎解析；即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;

3. 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，**利于 SEO**;

4. 使阅读源代码的人对网站更容易将网站分块，**便于阅读维护理解**。

## DOCTYPE

### DOCTYPE有什么作用？

DOCTYPE （document type） 声明位于文档的最前面，处于标签之前，它不是 html 标签。

主要作用是告诉浏览器使用哪个版本的 HTML 规范来渲染文档。DOCTYPE 不存在或形式不正确会导致HTML文档以**混杂模式**呈现。

### 标准模式与混杂模式如何区分?

标准模式（Standards mode）以浏览器支持的最高标准运行；

混杂模式（Quirks mode）中页面是一种比较宽松的向后兼容的方式显示。

### HTML5为什么只需要写 `<!DOCTYPE HTML>`

HTML5 不基于 SGML（Standard Generalized Markup Language 标准通用标记语言），因此不需要对 DTD（DTD 文档类型定义）进行引用，但是需要DOCTYPE来规范浏览器行为。

HTML4.01 基于 SGML ，所以需要引用 DTD 。才能告知浏览器文档所使用的文档类型，如下：
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`

## 块级元素和行内元素

### 块级元素和行内元素的区别

#### 块级元素

- 与其他行内元素并排
- 不能设置宽高，默认的宽度就是文字的宽度

#### 行内元素

- 独占一行，不能与其他任何元素并列
- 能接受宽高，如果不设置宽度，那么宽度将默认变为父级的100%

### 块级元素和行内元素都有哪些

#### 块级元素
- 常用元素

    `div` , `p` , `form` , `section` , `table`
- 标题

    `h1` , `h2` , `h3` , `h4` , `h5` , `h6`
- 列表

    `ul` , `ol` , `dd` , `dl` 
    
- h5新特性

    `section` , `header` , `footer` , `video` , `output` , `audio` , `aside`
    
#### 行内元素

- 常用元素

    `a` , `button` , `span` , `img` , `em` , `i` , `label` , `select` , `textarea`
    
## 链接打开方式有几种？分别是什么？

总共有五种：

- #### _blank      

    在新窗口中打开被链接文档。

- #### _self      
 
    默认。在相同的框架中打开被链接文档。

- #### _parent      
 
    在父框架集中打开被链接文档。

- #### _top          

    在整个窗口中打开被链接文档。

- #### framename     

    在指定的框架中打开被链接文档。

## script 标签中 defer 和 async 的区别

defer 和 async 都是作用于 外链JS 的。对于 内部JS 是没有效果的。

defer 和 async 都是异步的，主要的区别在于执行顺序以及执行的时间。

async 标志的脚本文件一旦加载完成就会立即执行，并且不会按照书写顺序，谁下载好了就直接执行。所以适用于那些没有代码依赖顺序，并且没有 DOM操作 的脚本文件。

defer 标志的脚本文件会严格按照书写顺序执行，并且，会在 DOMContentLoaded 事件之前（也就是页面DOM加载完成时）执行。适用于有 DOM操作 ，或者是有代码依赖顺序的脚本文件。
