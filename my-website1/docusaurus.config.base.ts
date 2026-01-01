import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const baseConfig: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Learn Physical AI & Humanoid Robotics from Foundations to Advanced Control',
  favicon: 'img/robot.jpg',

  future: { v4: true },
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/MuhammadKhateebEjaz/physical-ai-textbook',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/MuhammadKhateebEjaz/physical-ai-textbook',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Logo',
        src: 'img/robot.jpg',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default baseConfig;
