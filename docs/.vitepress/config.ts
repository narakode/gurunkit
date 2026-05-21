import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';
import { version } from '../../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Gurun Kit',
  description: 'Vue UI Component Library Built with Tailwind CSS',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    logo: {
      src: '/twemoji--desert.svg',
      alt: 'Gurun Kit - Twemoji Icon',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      { text: 'Components', link: '/components' },
      { text: `v${version}`, link: '/changelog' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Components', link: '/components' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Input', link: '/components/input' },
          { text: 'Radio', link: '/components/radio' },
          { text: 'Select', link: '/components/select' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/narakode/gurunkit' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present narakode.id',
    },
  },
  vite: {
    // @ts-expect-error
    plugins: [tailwindcss()],
  },
});
