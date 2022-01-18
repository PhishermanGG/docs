module.exports = {
   // site config
   lang: 'en-US',
   title: 'Phisherman',
   description: 'A community driven anti-phishing API',
   docsDir: 'docs',

   // theme and its config
   theme: '@vuepress/theme-default',
   themeConfig: {
      contributors: false,
      logo: '/images/hero.png',
      navbar: [
         // NavbarItem
         {
            text: 'Guide',
            link: '/guide/',
         },
         {
            text: 'GitHub',
            link: 'https://github.com/PhishermanGG',
         },
         {
            text: 'Homepage',
            link: 'https://phisherman.gg/',
         },
         {
            text: 'Service Status',
            link: 'https://status.phisherman.gg/',
         }
      ],
      sidebar: [
         // SidebarItem
         {
            text: 'Guide',
            children: ['/guide/README.md', '/guide/getting-started.md', '/guide/domain-classifications.md'],
         },
         {
            text: 'API v1 Reference',
            collapsible: true,
            children: ['/api/v1/check-a-domain.md', '/api/v1/fetch-domain-info.md', '/api/v1/catching-a-phish.md'],
         },
         {
            text: 'API v2 Reference',
            collapsible: true,
            children: ['/api/v2/check-a-domain.md', '/api/v2/fetch-domain-info.md', '/api/v2/catching-a-phish.md', '/api/v2/report-a-phish.md'],
         },
         {
            text: 'Integrations',
            collapsible: true,
            children: ['/third-party/README.md', '/third-party/third-party-bots.md', '/third-party/api-wrappers.md'],
         },
      ],
   },

   thirdPartyComponents: {
      fontAwesomeIcons: {
         regular: ['address-card', 'file-audio'], // Regular font awesome icon keys here
         solid: ['battery-quarter'] // Solid font awesome icon keys here
      }
   }
}