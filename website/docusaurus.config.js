// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache® Druid Training',
  tagline: 'Brought to you by contributors and committers to the Apache Druid® project. Welcome to Imply\'s public catalog of practical courses on all things Druid!',
  favicon: 'img/favicon.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
   future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true  // Faster builds
  },

  // Set the production url of your site here
  url: 'https://learn.imply.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imply', // Usually your GitHub org/user name.
  projectName: 'learn-druid', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  plugins: [require.resolve('docusaurus-lunr-search')],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './courses-sidebars.js',
          routeBasePath: "courses",
          path: "./courses",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Imply logo',
          src: 'img/logo-imply.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Courses',
          },
          {
            href: 'https://github.com/implydata/learn-druid',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode:{
      disableSwitch: true,
      defaultMode: 'light'
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()}. All rights reserved. Imply, the Imply logo, Imply Lumi, and Polaris are either trademarks or registered trademarks of Imply Data, Inc. in the U.S. and/or other countries. Apache Kafka, Apache Druid, Druid and the Druid logo are either registered trademarks or trademarks of the Apache Software Foundation in the U.S. and/or other countries. All other marks and logos are the property of their respective owners.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
