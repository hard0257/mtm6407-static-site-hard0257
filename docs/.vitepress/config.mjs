
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/mtm6407-static-site-hard0257/',
  title: 'Hardik Portfolio',
  description: 'Personal Web Design and Development Portfolio',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Skills', link: '/skills' },
      { text: 'Contact', link: '/contact' }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hard0257'
      }
    ],

    footer: {
      message: 'Designed and developed using VitePress.',
      copyright: 'Copyright © 2026 Hardik'
    }
  }
})
