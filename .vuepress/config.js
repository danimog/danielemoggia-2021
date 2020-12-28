// const base = process.env.GH ? '/VuePress/' : '/'

module.exports = {
    title: "danieleMoggia.it",
    description: "Un blog personale",
    themeConfig: {
        search: false,
        navbar: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        head: [
            ['link', {rel: 'stylesheet', href: '@styles/index.styl'}],

        ]
    },
}
