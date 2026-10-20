import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://pegasus-0818.github.io/',
  lang: 'zh-CN',
  languages: ['zh-CN'],
  title: 'Ma Junhao | 马骏豪',
  subtitle: 'Accounting · Shanghai Jiao Tong University',
  description: '',
  author: {
    name: '马骏豪 | Ma Junhao',
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
