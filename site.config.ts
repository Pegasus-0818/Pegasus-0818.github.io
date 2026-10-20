import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://pegasus-0818.github.io/',
  lang: 'zh-CN',
  languages: ['zh-CN'],
  title: '天马要行空',
  subtitle: 'Accounting · Shanghai Jiao Tong University',
  description: '',
  author: {
    name: '天马要行空',
    email: '1526717032@qq.com',
    avatar: '',
  },
  social: [
    {
      name: 'Email',
      link: 'mailto:1526717032@qq.com',
      icon: 'i-ri-mail-line',
      color: '#A67C52',
    },
  ],
  timezone: 'Asia/Shanghai',
  frontmatter: {
    time_warning: false,
  },
  search: {
    enable: true,
  },
  mediumZoom: {
    enable: true,
  },
})
