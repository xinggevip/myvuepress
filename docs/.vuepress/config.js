module.exports = {
    title: '高公子',
    head: [
        ['link', { rel: 'icon', href: 'http://file.qiangssvip.com/img/xinggevip.png' }]
    ],
    themeConfig: {
        logo: 'http://file.qiangssvip.com/img/xinggevip.png',
        nav: [
            {text: '首页', link: '/'},
            {
                text: '学习笔记', 
                items: [
                    {text: 'java', link: '/java/'},
                    {text: 'python', link: '/python/'}
                ]
            },
            {text: '随笔', link: '/resources/'},
            {text: '常用网址', link: '/nav/'},
            {
                text: '友情链接',
                items: [
                    {text: '高公子', link: 'http://qiangssvip.com'}
                ]
            },
            
        ],
        sidebar: 'auto',
        // sidebar: [
        //     {
        //         title: 'Java',
        //         path: '/java/',
        //         collapsable: false,
        //         sidebarDepth: 2,
        //         children: [
        //             '/java/java-1',
        //             '/java/java-2'
        //         ]
        //     },
        //     {
        //         title: 'Python',
        //         path: '/python/',
        //         collapsable: false,
        //         sidebarDepth: 2,
        //         children: [
        //             '/python/python-1',
        //             '/python/python-2'
        //         ]
        //     },
        // ]
    },

};