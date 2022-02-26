---
title 关于CSS
---

## 说一下盒模型？

![盒模型](/public/box-sizing.png)

## 说一下 box-sizing？

`box-sizing` 主要分为 `border-box` 和 `content-box`

拿 width 举例：

`content-box： width = content + padding + border`

`border-box： width = content`

为了方便样式计算，一般采用 `border-box`

## 如何理解外边距塌陷？

外边距塌陷也被称为外边距合并。

是指两个在正常流中相邻的**上下块级元素**的边距塌陷，垂直距离取两个值中的较大者。

## 子元素有高度，父元素高度为0，有哪些情况？

首先，这种情况被称为**高度坍塌**。

1. 父元素 `position: absolute` 绝对定位，脱离文档流

2. 父元素 `float` 设置了浮动，脱离文档流

## 如何清除浮动？

1. 父元素设置 `overflow: hidden;`

2. 在父元素中添加一个空元素，设置 `clear:both`

3. 给父元素的伪元素添加 `clear:both`

## 伪元素和伪类的区别？

首先，先不要纠结于伪，先搞懂，什么是类，什么是元素。

- 伪类

类不就是 `class='title'` ，所以，它就是添加所谓的效果的。

常用的伪类有： `:active` , `:focus` , `:hover` , `:link` , `:visited` , `:visited` 等。

- 伪元素

元素不就是类似于 `<div></div>` 这种，在文档中有实际的占用空间的，能用来创建一些原有 DOM 结构不存在的元素。

常用的伪元素有： `::before` , `::after` , `::first-letter` , `::first-line` 等。

一般伪元素用 `::` 双冒号，伪类用 `:` 单冒号

## link和@import的区别？

## display:none与visibility:hidden的区别

## z-index属性在什么情况下会失效
