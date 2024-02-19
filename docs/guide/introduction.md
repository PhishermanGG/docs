# Introduction

Phisherman is a centralised database of phishing and scam links. It is designed for use with Discord bots, allowing them to utilise the Phisherman API to cross-check URLs against our known phishing links.

While Phisherman is still in early development access to some API endpoints is on a per-person basis while we work to ensure overall stability, performance and gather user feedback. For more information or to request access, please visit our Discord server using the button below.

## Why build Phisherman?

Due to the number of phishing domains being created on a daily basis, having to maintain a manual block list in a config file was becoming more and more inefficient. I needed a centralised tool that could ingest new domains from multiple sources and provide easy access (via API) to the multiple custom bots I ran, and thus Phisherman was born.

## What sources do you use?

Phisherman ingests from multiple sources in order to provide the best possible coverage of phishing domains. Currently, we automatically ingest from the 'FishFish' API (a Discord community-driven initiative), [PhishTank](https://phishtank.org/) as well as manual submissions via the Phisherman discord server and API functions.

## What tech stack do you use?
Phisherman is built with :heart: (and :coffee:) using:

- [Node.js](https://nodejs.org)
- [ExpressJS](https://expressjs.com/)
- [PlanetScale](https://planetscale.com/?from=phisherman)
- [Cloudflare Workers](https://workers.cloudflare.com/?from=phisherman)
- [Cloudflare Workers KV](https://www.cloudflare.com/products/workers-kv/?from=phisherman)
- [Cloudflare Images](https://www.cloudflare.com/developer-platform/cloudflare-images/)

#### Phisherman also makes use of the following websites and API's:

- [PhishTank](https://www.phishtank.com/)
- [URLScan.io](https://urlscan.io/?from=phisherman)
- [FishFish](https://fishfish.gg/?from=phisherman)
