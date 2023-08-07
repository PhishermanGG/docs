# Requirements

If you are requesting access to Phisherman in order to integrate it with your bot, it should meet one of the following criteria:

A) Be a [Verified Bot](https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting)

**OR**

B) Be a Self-Hosted version of a popular or verified bot (Eg. [Zeppelin](https://zeppelin.gg/))

::: danger **⛔ The following will not be eligible for access to Phisherman:**

- iOS, Google Play Store or Kindle apps
- College or University projects/assignments
- Private bots for testing or development purposes only
  :::

## Authentication

Each end-user will require their own API key, which they can obtain via a request in the Phisherman [Discord server](https://discord.gg/QwrpmTgvWy). This is to allow efficient abuse prevention, rate limiting, and usage tracking.

You will need to provide an option within your users config for them to save their API key. Your bot should then pass this key with each API request.

An example request flow should look like the following:

```:no-line-numbers
User Config -> API Key -> Your Bot -> Phisherman API -> Your Bot
```

:::tip
An great example of how to set up Phisherman as a plugin can be found in the **[Zeppelin docs](https://zeppelin.gg/docs/plugins/phisherman)**
:::
