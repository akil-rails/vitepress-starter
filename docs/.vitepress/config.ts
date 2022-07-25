import { defineConfig } from "vitepress";
import MarkdownIt from 'markdown-it';


export default defineConfig({
  lang: 'en-US',
  title: 'vitepress-starter',
  description: "Testing instructions from the documentation at https://vitepress.vuejs.org/",
  lastUpdated: true,
  base: '/vitepress-starter/',
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
    config: (md: MarkdownIt) => {
      md.use(require('markdown-it-codetabs'));
    }
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
          { text: 'Markdown-it Plugins', link: '/markdown-it-plugins' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
