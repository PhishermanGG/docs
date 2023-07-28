import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  // site config
  title: "Phisherman",
  description: "A community-driven anti-phishing API",
  head: [["link", { rel: "icon", href: "/images/hero.png" }]],

  // theme and its config
  theme: defaultTheme({
    logo: "/images/hero.png",
    repo: "https://github.com/PhishermanGG",
    contributors: false,
    notFound: [
      "Looks like you've taken the wrong bait.",
      "Oh no, it seems the phish escaped!",
      "Oops, there's nothing phishy here.",
      "Sorry, the phishing net came up empty.",
      "Looks like you've ventured off the hook.",
      "Something smells phishy...",
      "Hook, line, but no page.",
      "Phishy business ahead!",
      "Looks like you've caught an empty net.",
      "Page's gone to swim with the phishes."
    ],
    navbar: [
      // NavbarItem
      {
        text: "Guide",
        link: "/guide"
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
        children: ["/api/v2/api-design.md", "/api/v2/check-domain.md", "/api/v2/check-domain-details.md", "/api/v2/submit-domain.md"]
      },
      {
        text: "Integrations",
        collapsible: true,
        children: ["/third-party/public-bot-integration.md", "/third-party/third-party-bots.md", "/third-party/api-wrappers.md"]
      }
    ]
  })
});
