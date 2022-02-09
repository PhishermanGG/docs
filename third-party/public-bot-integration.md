# Integrating With Your Public Bot

Developers of public bots may integrate Phisherman as a plugin to provide anti-phishing protection to their end users. This guide will provide information on the requirements for public bots.

## Authentication
Each end-user will require their own API key, which they can obtain via a request in the Phisherman [Discord server](https://discord.gg/QwrpmTgvWy). This is to allow efficient abuse prevention, rate limiting, and usage tracking. API keys are issued on a per-user basis, so users only require a single key which can be used for multiple servers.

You will need to provide an option within your users config for them to save their API key. Your bot should then pass this key with each API request.

An example request flow should look like the following:
```:no-line-numbers
User Config -> API Key -> Your Bot -> Phisherman API
```

:::tip
An great example of how to set up Phisherman as a plugin can be found in the [Zeppelin docs](https://zeppelin.gg/docs/plugins/phisherman)
:::

## Validating Domains
Before making any API requests, your bot should validate any domains to ensure that only valid domains are used in requests.

An example regex to validate domains can be found below
```js
/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g
```
The above example was taken from [RegExr](https://regexr.com/3au3g)

## Checking Domains vs Domain Info
To ensure best performance and reliability, you should only use the [Check a domain](/api/v2/check-a-domain.md) to validate if a user-posted link is a phish or not. This endpoint is powered by Cloudflare Workers and will ensure your bot gets the quickest response on a lookup.

The [Domain Info](/api/v2/fetch-domain-info.md) endpoint should only be used to provide additional context or information to users, such as a domain info command.

![Example domain info command](/images/domain_info_embed_example.png) 

## Reporting Caught Phish
With Phisherman integration you can choose report back when it detects phishing links in servers protected by your bot. 

Reporting back caught phish is entirely optional and not required for normal usage but allows the end user to view the number of Phish they have caught in the [dashboard](https://phisherman.gg/home).

For best performance we recommend public bots use the [Bulk Reporting](/api/v2/catching-a-phish.html#bulk-reporting) endpoint.

## User Agent Header

You should ensure you provide a valid [User Agent Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) when making API calls.

This header should be in the format of:

```:no-line-numbers
<bot-name> (<comment> / <developer Discord ID>)
```

### Example User Agent Header
```:no-line-numbers
User-Agent: Phisherman-Bot (+https://phisherman.gg / 188032859276181504)
```

## Testing your integration
For a list of (safe) domains you can use for functional testing, please see [Testing your integration](/guide/getting-started.html#testing-your-integration).