module.exports = {
    // 网站标题
    title: '前端圣经',
    // 网站描述
    description: 'Interview with vitePress',
    // 头部head
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    // 指定额外的需要被监听的文件
    extraWatchFiles: [
        '.vitepress/config.js', // 使用相对路径
    ],
    themeConfig: {
        // 显示搜索框
        search: true,
        // 最多搜索建议条数
        searchMaxSuggestions: 10,
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        smoothScroll: true
    }
}
