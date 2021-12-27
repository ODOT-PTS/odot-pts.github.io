// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GTFS-ride',
  tagline: 'An open standard for storing and sharing fixed-route transit ridership data',
  url: 'https://gtfsride.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ODOT-PTS', // Usually your GitHub org/user name.
  projectName: 'odot-pts.github.io', // Usually your repo name.
  deploymentBranch: 'gh_pages',
  trailingSlash: true,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'G-0CFN8LFKCN',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ODOT-PTS/odot-pts.github.io/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'consortium',
        path: 'consortium',
        routeBasePath: 'consortium',
        sidebarPath: require.resolve('./sidebarsConsortium.js'),
        editUrl: 'https://github.com/ODOT-PTS/odot-pts.github.io/blob/master',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'specification',
        path: 'specification',
        routeBasePath: 'specification',
        sidebarPath: require.resolve('./sidebarsSpecification.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GTFS-ride',
        logo: {
          alt: 'GTFS-ride Logo',
          src: 'img/gtfs-ride-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'About',
          },
          {
            type: 'doc',
            docsPluginId: 'specification',
            docId: 'index',
            position: 'left',
            label: 'Specification',
          },
          {
            type: 'doc',
            docsPluginId: 'consortium',
            docId: 'about',
            position: 'left',
            label: 'Consortium',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Quick Start',
                to: '/docs/getting-started/',
              },
              {
                label: 'Specification',
                to: '/specification',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Consortium',
                to: '/consortium/about',
              },
              {
                label: 'Google Group',
                href: 'http://forum.gtfsride.org/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ODOT-PTS/odot-pts.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GTFS-ride.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
