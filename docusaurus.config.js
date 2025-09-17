// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // presets: [
  //   [
  //     "classic",
  //     /** @type {import('@docusaurus/preset-classic').Options} */
  //     ({
  //       docs: {
  //         sidebarPath: "./sidebars.js",
  //         path: "docs",
  //         routeBasePath: "api",
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
  //       },

  //       docsV2: {
  //         sidebarPath: "./sidebars.js",
  //         path: "docsV2",
  //         routeBasePath: "api",
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
  //       },

  //       // Add this line:
  //       // This disables TOC on docs pages globally
  //       // (Note: This option might be missing depending on Docusaurus version; if so, use CSS as fallback)
  //       // disableVersionWarning: true,
  //       // This option does NOT disable TOC, so best to hide by CSS

  //       theme: {
  //         customCss: "./src/css/custom.css",
  //       },
  //     }),
  //   ],
  // ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false, // disable default docs from preset
        theme: {
          customCss: ["./src/css/custom.css"],
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "v1",
        path: "docs/v1",
        routeBasePath: "api/v1",
        sidebarPath: require.resolve("./sidebarsV1.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "v2",
        path: "docs/v2",
        routeBasePath: "api/v2",
        sidebarPath: require.resolve("./sidebarsV2.js"),
      },
    ],
    // [
    //   "@easyops-cn/docusaurus-search-local",
    //   {
    //     hashed: true,
    //     indexDocs: true,
    //     indexBlog: false,
    //     indexPages: true,
    //     language: "en",
    //   },
    // ],
  ],

  // presets: [
  //   [
  //     "classic",
  //     {
  //       theme: {
  //         customCss: "./src/css/custom.css",
  //       },
  //       // no docs here
  //     },
  //   ],
  // ],

  // plugins: [
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       id: "v1",
  //       path: "docs/v1",
  //       routeBasePath: "api/v1",
  //       sidebarPath: require.resolve("./sidebarsV1.js"),
  //     },
  //   ],
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       id: "v2",
  //       path: "docs/v2",
  //       routeBasePath: "api/v2",
  //       sidebarPath: require.resolve("./sidebarsV2.js"),
  //     },
  //   ],
  // ],

  // plugins: [
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       id: "v1",
  //       path: "docs/v1",
  //       routeBasePath: "api/v1",
  //       sidebarPath: require.resolve("./sidebarsV1.js"),
  //     },
  //   ],
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       id: "v2",
  //       path: "docs/v2",
  //       routeBasePath: "api/v2",
  //       sidebarPath: require.resolve("./sidebarsV2.js"),
  //     },
  //   ],
  // ],

  // presets: [
  //   [
  //     "classic",
  //     {
  //       blog: {
  //         showReadingTime: true,
  //         feedOptions: {
  //           type: ["rss", "atom"],
  //           xslt: true,
  //         },
  //         editUrl:
  //           "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
  //         onInlineTags: "warn",
  //         onInlineAuthors: "warn",
  //         onUntruncatedBlogPosts: "warn",
  //       },
  //       theme: {
  //         customCss: "./src/css/custom.css",
  //       },
  //     },
  //   ],
  // ],

  // plugins: [
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       id: "v1",
  //       path: "docs/v1",
  //       routeBasePath: "api/v1",
  //       sidebarPath: require.resolve("./sidebars.js"),
  //       exclude: ["v2/**"],
  //     },
  //   ],
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       id: "v2",
  //       path: "docs",
  //       routeBasePath: "api/v2",
  //       sidebarPath: require.resolve("./sidebars.js"),
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/goodwill-logo.png",
      navbar: {
        logo: {
          alt: "Goodwill Logo",
          src: "img/goodwill-logo.png",
          width: 80,
          height: 100,
        },
        items: [
          {
            href: "https://gwcindia.in/",
            label: "Back to Website",
            position: "right",
            target: "_self",
          },

          {
            href: "/",
            label: "Home",
            position: "right",
            target: "_self",
          },

          {
            label: "Api Docs",
            position: "right",
            items: [
              {
                label: "Version 2  🆕",
                to: "/api/v2/introduction",
              },
              {
                label: "Version 1",
                to: "/api/v1/introduction",
              },
            ],
          },

          {
            href: "https://developer.gwcindia.in/signin",
            label: "Sign In",
            position: "right",
          },
          // {
          //   type: "custom-search",
          //   position: "right",
          // },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Api Docs",
      //           to: "/api/v2/introduction",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Dashboard",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         // {
      //         //   label: "Discord",
      //         //   href: "https://discordapp.com/invite/docusaurus",
      //         // },
      //         // {
      //         //   label: "X",
      //         //   href: "https://x.com/docusaurus",
      //         // },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Developed by Finfolab Technologies`,
      // },
      // footer: {
      //   style: "dark",
      //   links: [], // Remove default sections like Docs, Community, More
      //   copyright: `
      //     <div style="text-align: center; line-height: 1.8; color: #a2a2a2";>
      //       <strong>Goodwill Wealth Management Pvt Ltd</strong> | MCX : 11095 | SEBI Regn. No : INZ000177036<br />
      //       MSEI : 11240 | NSE : 90097 | BSE : 6648<br />
      //       Clearing Code | NSE : M52003 | BSE : 6648<br />
      //       CDSL DP | DP ID : 12084200 | SEBI Regn. No : IN - DP - CDSL - 309 - 2017<br />
      //       Research Analyst | SEBI Regn. No : INH200005179<br />
      //       Mutual Funds | ARN : 182218<br />
      //       For any Grievance, please write to us : <a href="mailto:Grievance@gwcindia.in">Grievance@gwcindia.in</a><br />
      //       Administration E-mail ID : <a href="mailto:goodwill@gwcindia.in">goodwill@gwcindia.in</a>
      //     </div>
      //   `,
      // },
      footer: {
        style: "dark",
        links: [],
        copyright: `© ${new Date().getFullYear()} Goodwill Wealth Management Pvt Ltd.`,
      },

      // algolia: {
      //   appId: "H02ZE3U9ON",
      //   apiKey: "b7ed75d9d74f0b37700b20d9f32cbdb8",
      //   indexName: "goodwill_docs",
      //   contextualSearch: true,
      // },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
