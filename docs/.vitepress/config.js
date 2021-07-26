module.exports = {
    // 网站标题
    title: 'Interview',
    // 网站描述
    description: 'Interview with vitePress',
    // 打包目录
    dest: './dist',
    // 头部head
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    // 使用插件
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }]
    ],
    // 主题配置
    themeConfig: {
        // 显示搜索框
        search: true,
        // 最多搜索建议条数
        searchMaxSuggestions: 10,
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 导航栏配置
        nav:[
            {text: '我的个人网站', link: 'https://baidu.com' },
            {text: '掘金', link: 'https://baidu.com'},
            {text: 'Github', link: 'https://baidu.com'}
        ],
        sidebar:{
            '/':getSidebar()
        }
    }
}

function getSidebar() {
    return [
        {
            text:'HTML',
            link: '/html/',
        },
        {
            text:'CSS',
            link: '/css/',
            children:[
                { text: '如何理解Doctype', link: '/css/flex-box' },
            ]
        },
    ]
}
