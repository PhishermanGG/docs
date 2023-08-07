import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Phisherman",
	description: "A community-driven anti-phishing API",
	head: [["link", { rel: "icon", href: "/images/phisherman-logo.png" }]],
	lastUpdated: true,
	cleanUrls: true,
	themeConfig: {
		logo: "/images/phisherman-logo.png",
		// https://vitepress.dev/reference/default-theme-config
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
					{ text: "Domain Classifications", link: "/guide/domain-classifications" }
				],
			},
			{
				text: "API",
				items: [
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
									{ text: "Submit A Domain", link: "/api/v2/domains/submit-domain" },
								],
							},
							{
								text: "Phish",
								collapsed: true,
								items: [
									{ text: "Check Phish", link: "/api/v2/phish/check-phish" },
									{ text: "Report New Phish", link: "/api/v2/phish/report-phish" },
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
							{
								text: "Brands",
								collapsed: true,
								items: [
									{ text: "Get All Brands", link: "/api/v2/brands/get-brands" }
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

		socialLinks: [{ icon: "github", link: "https://github.com/PhishermanGG" },
		{ icon: "discord", link: "https://discord.gg/QwrpmTgvWy" }],

		footer: {
			copyright: "Copyright © 2023 phisherman.gg",
		},
	},
});