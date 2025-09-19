import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Binean',
  tagline: 'Innovation with resilience',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.binean.com',
  baseUrl: '/',
  projectName: 'benova',
  organizationName: 'binean-zone',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: { label: 'English' },
      vi: { label: 'Tiếng Việt' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/binean-zone/benova/tree/main/apps/srce/Binean/benova/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/binean-zone/benova/tree/main/apps/srce/Binean/benova/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tao',
        path: 'tao',
        routeBasePath: 'tao',
        sidebarPath: require.resolve('./taoSidebar.ts'),
        editUrl: 'https://github.com/binean-zone/benova/tree/main/apps/srce/Binean/tao/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Binean Logo',
        src: 'img/binean-full.svg',
        srcDark: 'img/binean-full-dark.svg',
        style: {
          height: '32px',
          maxWidth: '75px',
          width: 'auto',
          objectFit: 'contain',
          imageRendering: 'auto',
        },
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'benovaSidebar',
          position: 'left',
          label: 'Benova',
        },
        {
          type: 'docSidebar',
          sidebarId: 'taoSidebar',
          position: 'left',
          label: 'Tao',
          docsPluginId: 'tao'
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/binean-zone/benova',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Benova',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/binean-zone/benova',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
