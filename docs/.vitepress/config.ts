import { defineConfig } from "vitepress";

export default defineConfig({
  lang: 'en-US',
  title: 'vitepress-starter',
  description: "Testing instructions from the documentation at https://vitepress.vuejs.org/",
  lastUpdated: true,
  base: '/vitepress-starter/',
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },

  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Home', link: '/home' },
          { text: 'Page', link: '/page' },
          { text: 'Doc', link: '/page' },
          { text: 'Team', link: '/team' },
          { text: 'Dynamic', link: '/dynamic' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
