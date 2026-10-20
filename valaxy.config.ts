import type { ThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

export default defineValaxyConfig<ThemeConfig>({
  theme: 'yun',
  vite: {
    base: '/',
    ssgOptions: {
      dirStyle: 'nested',
    },
  },
  build: {
    ssgForPagination: true,
  },
  themeConfig: {
    colors: {
      primary: '#A67C52',
    },
    banner: {
      enable: true,
      title: ['Ma Junhao', '马骏豪'],
      cloud: {
        enable: false,
      },
      duration: 350,
    },
    bg_image: {
      enable: false,
    },
    fireworks: {
      enable: false,
    },
    say: {
      enable: false,
      api: '',
      hitokoto: {
        enable: false,
        api: '',
      },
    },
    notice: {
      enable: false,
      content: '',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about/' },
      { text: '项目', link: '/projects/' },
      { text: '文章', link: '/posts/' },
      { text: '简历', link: '/cv/' },
    ],
    pages: [],
    footer: {
      powered: true,
      cloud: {
        enable: false,
      },
    },
  },
})
