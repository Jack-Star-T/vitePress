
## Webpack 有哪些常见的 loader？他们分别解决了什么问题？

1. style-loader 将css添加到DOM的内联样式标签style里

2. css-loader 允许将css文件通过require的方式引入，并返回css代码

3. less-loader 处理less

4. sass-loader 处理sass

postcss-loader 用postcss来处理CSS

autoprefixer-loader 处理CSS3属性前缀，已被弃用，建议直接使用postcss

file-loader 分发文件到output目录并返回相对路径

url-loader 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url

html-minify-loader 压缩HTML

babel-loader 用babel来转换ES6文件到ES5
