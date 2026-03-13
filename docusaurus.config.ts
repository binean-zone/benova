import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Binean Nova',
  tagline: 'Modernize your insurance core — without disrupting your business',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.binean.com',
  baseUrl: '/',
  projectName: 'benova',
  organizationName: 'binean-zone',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  } as any,
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
        blog: false,
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
        id: 'axiom',
        path: 'axiom',
        routeBasePath: 'axiom',
        sidebarPath: require.resolve('./axiomSidebar.ts'),
        editUrl: 'https://github.com/binean-zone/benova/tree/main/apps/srce/Binean/axiom/',
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
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'benovaSidebar',
          position: 'left',
          label: 'Platform',
        },
        {
          type: 'doc',
          docId: 'binean_nexus/intro',
          position: 'left',
          label: 'Solutions',
        },
        {
          type: 'doc',
          docId: 'ing_on_cloud',
          position: 'left',
          label: 'Success Story',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
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
          title: 'Platform',
          items: [
            {
              label: 'Why Nova?',
              to: '/docs/intro',
            },
            {
              label: 'The Platform',
              to: '/docs/nova',
            },
            {
              label: 'Success Story',
              to: '/docs/ing_on_cloud',
            },
          ],
        },
        {
          title: 'Solutions',
          items: [
            {
              label: 'Nexus — DevOps Foundation',
              to: '/docs/binean_nexus/intro',
            },
            {
              label: 'Architecture',
              to: '/docs/binean_nexus/architecture',
            },
            {
              label: 'Security & Compliance',
              to: '/docs/binean_nexus/security',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/binean-zone/benova',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Binean.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
