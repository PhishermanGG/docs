import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  // site config
  title: "Phisherman",
  description: "A community driven anti-phishing API",

  // theme and its config
  theme: defaultTheme({
    logo: "/images/hero.png",
    navbar: [
      // NavbarItem
      {
        text: "Guide",
        link: "/guide"
      },
      {
        text: "GitHub",
        link: "https://github.com/PhishermanGG"
      },
      {
        text: "Homepage",
        link: "https://phisherman.gg/"
      },
      {
        text: "Service Status",
        link: "https://status.phisherman.gg/"
      }
    ],
    sidebar: [
      // SidebarItem
      {
        text: "Guide",
        children: ["/guide/README.md", "/guide/getting-started.md", "/guide/domain-classifications.md"]
      },
      {
        text: "API v1 Reference",
        collapsible: true,
        children: ["/api/v1/check-a-domain.md", "/api/v1/fetch-domain-info.md", "/api/v1/catching-a-phish.md"]
      },
      {
        text: "API v2 Reference",
        collapsible: true,
        children: ["/api/v2/check-a-domain.md", "/api/v2/fetch-domain-details.md", "/api/v2/catching-a-phish.md", "/api/v2/report-a-phish.md"]
      },
      {
        text: "Integrations",
        collapsible: true,
        children: ["/third-party/public-bot-integration.md", "/third-party/third-party-bots.md", "/third-party/api-wrappers.md"]
      }
    ]
  })
});
