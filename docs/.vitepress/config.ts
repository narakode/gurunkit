import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Bang UI',
  description: 'Vue UI Component Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      { text: 'Components', link: '/components' },
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
          { text: 'Input', link: '/components/input' },
          { text: 'Checkbox', link: '/components/checkbox' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  vite: {
    // @ts-expect-error: VitePress PluginOption type mismatch with @tailwindcss/vite return type
    plugins: [tailwindcss()],
  },
});
