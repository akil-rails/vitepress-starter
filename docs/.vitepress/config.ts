import { defineConfig } from "vitepress";

export default defineConfig({
  lang: 'en-US',
  title: 'vitepress-starter',
  description: "Testing instructions from the documentation at https://vitepress.vuejs.org/",
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },

  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})