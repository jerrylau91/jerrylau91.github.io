import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/reading-notes/',
  title: "Reading Notes",
  description: "My personal reading notes collection",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/sample' }
    ],

    sidebar: [
      {
        text: 'Notes',
        items: [
          { text: 'Sample Note', link: '/notes/sample' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jerrylau91/jerrylau91.github.io' }
    ]
  }
})
