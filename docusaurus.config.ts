import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Binean Nova',
  tagline: 'Ingenium modernization platform for insurance core transformation',
  favicon: 'img/favicon.ico',

  url: 'https://www.binean.com',
  baseUrl: '/',
  projectName: 'benova',
  organizationName: 'binean-zone',
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  } as any,
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
          include: [
            'intro.md',
            'operating_model.md',
            'investment_case.md',
            'poc_plan.md',
            'executive_faq.md',
            'next_steps.md',
            'commercial_guide.md',
            'risk_governance.md',
          ],
          editUrl:
            'https://github.com/binean-zone/benova/tree/main/apps/srce/Binean/benova/',
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {
        name: 'keywords',
        content:
          'Ingenium modernization, insurance core modernization, COBOL modernization, AIX to Linux migration, insurance platform transformation, policy administration modernization',
      },
      {
        name: 'description',
        content:
          'Nova helps insurers modernize Ingenium core systems through phased delivery: AIX-to-Linux migration, faster deployment, and API-led integration.',
      },
    ],
    navbar: {
      logo: {
        alt: 'Binean Logo',
        src: 'img/binean-full.svg',
        srcDark: 'img/binean-full-dark.svg',
      },
      items: [
        {
          to: '/',
          label: 'Overview',
          position: 'left',
        },
        {
          to: '/ingenium-modernization',
          label: 'Ingenium Modernization',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'operating_model',
          position: 'left',
          label: 'Operating Model',
        },
        {
          type: 'doc',
          docId: 'investment_case',
          position: 'left',
          label: 'Investment Case',
        },
        {
          type: 'doc',
          docId: 'poc_plan',
          position: 'left',
          label: 'POC Plan',
        },
        {
          type: 'doc',
          docId: 'executive_faq',
          position: 'left',
          label: 'Executive FAQ',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'For Executives',
          items: [
            {
              label: 'Overview',
              to: '/',
            },
            {
              label: 'Investment Case',
              to: '/docs/investment_case',
            },
            {
              label: 'Operating Model',
              to: '/docs/operating_model',
            },
            {
              label: 'POC Plan',
              to: '/docs/poc_plan',
            },
          ],
        },
        {
          title: 'Platform Narrative',
          items: [
            {
              label: 'Transformation Story',
              to: '/docs/intro',
            },
            {
              label: 'Executive FAQ',
              to: '/docs/executive_faq',
            },
            {
              label: 'Next Steps',
              to: '/docs/next_steps',
            },
            {
              label: 'Commercial Guide',
              to: '/docs/commercial_guide',
            },
            {
              label: 'Risk and Governance',
              to: '/docs/risk_governance',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: '📧 ingenium.modernization@gmail.com',
              href: 'mailto:ingenium.modernization@gmail.com?subject=Nova%20Inquiry',
            },
            {
              label: 'Schedule Discovery Call',
              href: 'mailto:ingenium.modernization@gmail.com?subject=Nova%20Discovery%20Call%20Request&body=Name:%0ACompany:%0ARole:%0APreferred%20date/time:',
            },
            {
              label: 'Start a 6-week Windows POC',
              to: '/docs/poc_plan',
            },
          ],
        },
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
