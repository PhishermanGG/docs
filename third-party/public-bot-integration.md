# Integrating With Your Public Bot

Developers of public bots may integrate Phisherman as a plugin to provide anti-phishing protection to their end users. This guide will provide information on the requirements for public bots.

## Authentication
Each end-user will require their own API key, which they can obtain via a request in the Phisherman [Discord server](https://discord.gg/QwrpmTgvWy).

You will need to provide an option within your users config file for them to save their API key. Your bot should then pass this key with each API request.

The flow for this should look like the following:
```:no-line-numbers
User Config -> API Key -> Your Bot -> Phisherman API
```

:::tip
An great example of how to set up Phisherman as a plugin can be found in the [Zeppelin docs](https://zeppelin.gg/docs/plugins/phisherman)
:::