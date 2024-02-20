import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Phisherman",
	description: "A community-driven anti-phishing API",
	head: [["link", { rel: "icon", href: "/images/phisherman-logo.png" }]],
	lastUpdated: true,
	cleanUrls: true,
	markdown: {
		theme: {
			dark: "material-theme-darker",
			light: "material-theme-lighter",
		},
	},
	themeConfig: {
		logo: "/images/phisherman-logo.png",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Website", link: "https://phisherman.gg/" },
			{ text: "Service Status", link: "https://status.phisherman.gg/" },
		],

		sidebar: [
			{
				text: "Guide",
				collapsed: false,
				items: [
					{ text: "Introduction", link: "/guide/introduction" },
					{ text: "Getting Started", link: "/guide/getting-started" },
					{ text: "Domain Classifications", link: "/guide/domain-classifications" },
				],
			},
			{
				text: "API",
				items: [
					{
						text: "v1",
						collapsed: true,
						items: [
							{ text: "Introduction", link: "/api/v1/introduction" },
							{
								text: "Domains",
								collapsed: true,
								items: [
									{ text: "Check A Domain", link: "/api/v1/domains/check-domain" },
									{ text: "Get Domain Details", link: "/api/v1/domains/check-domain-details" },
								],
							},
							{ text: "Report A Detection", link: "/api/v1/report-detection" },
						],
					},
					{
						text: "v2",
						collapsed: true,
						items: [
							{ text: "Introduction", link: "/api/v2/introduction" },
							{
								text: "Domains",
								collapsed: true,
								items: [
									{ text: "Check A Domain", link: "/api/v2/domains/check-domain" },
									{ text: "Get Domain Details", link: "/api/v2/domains/check-domain-details" },
								],
							},
							{
								text: "Detections",
								collapsed: true,
								items: [
									{ text: "Report A Detection", link: "/api/v2/detections/report-detection" },
									{ text: "Bulk Report Detections", link: "/api/v2/detections/report-detections-bulk" },
								],
							},
						],
					},
					{
						text: "Discord Bot Integration",
						collapsed: true,
						items: [
							{ text: "Introduction", link: "/api/integration/introduction" },
							{ text: "Requirements", link: "/api/integration/requirements" },
							{ text: "Testing Your Integration", link: "/api/integration/testing-your-integration" },
							{ text: "Best Practices", link: "/api/integration/best-practices" },
						],
					},
					{
						text: "Third Party",
						collapsed: true,
						items: [
							{ text: "API Wrappers", link: "/third-party/api-wrappers" },
							{ text: "Integrated Bots", link: "/third-party/integrated-bots" },
						],
					},
				],
			},
			{
				text: "Trawler",
				collapsed: false,
				items: [
					{ text: "Introduction", link: "/trawler/introduction" },
					{ text: "Report New Phish", link: "/trawler/report-new-phish" },
				],
			},
		],

		editLink: {
			pattern: "https://github.com/PhishermanGG/docs/edit/master/docs/:path",
			text: "Edit this page on GitHub",
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/PhishermanGG" },
			{ icon: "discord", link: "https://discord.gg/QwrpmTgvWy" },
		],

		footer: {
			copyright: "Copyright © 2024 phisherman.gg",
		},
	},
});
