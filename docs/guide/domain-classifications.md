# Domain Classifications

Phisherman operates a "traffic light" system to classify domains.

These are returned when using the [check a domain](/api/v2/domains/check-domain) or [check domain details](/api/v2/domains/check-domain-details) endpoints. A description of their meanings is listed below.

::: tip Safe
Site has been verified as being a genuine website for an organisation (Discord, Steam etc.)
:::

::: warning Suspicious (Default)
Site has not been observed serving phishing or scam content, but there is a high probability of such, or is a newly registered domain that is likely to be used for phishing.
:::

::: danger Malicious
Site has been observed serving malicious content or a scam/phishing site.
:::

## Verified Phish

Phisherman can return either `true` or `false` for the `verifiedPhish` property via the API. A description of what each option means can be found below.

::: warning False (Default)
Site has not been has not been reviewed or observed by Phisherman volunteers as serving malicious content.
:::

::: danger True
Site has been validated by Phisherman volunteers or other sources as serving malicious content or a scam/phishing site.
:::
