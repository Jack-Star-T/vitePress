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
        }],
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: 'Search',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
        },
      ],
    ],
    // 主题配置
    themeConfig: {
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 导航栏配置
        nav:[
            {text: '我的个人网站', link: 'https://www.cooldream.fun/home' },
            {text: '掘金', link: 'https://juejin.cn/user/1855631359481847/posts'},
            {text: 'Github', link: 'https://github.com/Jack-Star-T'}
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
            children: [
                { text: '关于HTML', link: '/HTML/' },
                { text: '块级元素和行内元素', link: '/HTML/blockAndInline' },
            ],
            sidebarDepth:3
        },
        {
            text:'CSS',
            children:[
                { text: '关于CSS', link: '/CSS/' },
                { text: '如何理解Doctype', link: '/CSS/flex-box' },
            ]
        },
        {
          text:'Javascript',
        },
        {
          text:'ECMAScript',
        },
        {
          text:'Vue',
        },
        {
          text:'浏览器',
        },
        {
          text:'网络',
        },
        {
          text:'安全',
        },
        {
          text:'面经',
        },
    ]
}
