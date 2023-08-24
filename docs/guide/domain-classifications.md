# Domain Classifications

Phisherman operates a "traffic light" system to classify domains.

These are returned when using the [check a domain](/api/v2/domains/check-domain) or [check domain details](/api/v2/domains/check-domain-details) endpoints. A description of their meanings is listed below.

::: tip Genuine
Site has been verified as being the genuine website for an organisation (Discord, Steam etc.)
:::

::: warning Suspicious (Default)
Site has not been observed serving phishing or scam content, but is high probability of such, or is a newly registered domain that is likely to be used for phishing.
:::

::: danger Malicious
Site has been observed serving phishing or scam content
:::

::: info Unknown
Phisherman has no information regarding this domain
:::

## Verified Phish

Phisherman can return either `true` or `false` for the `verifiedPhish` property via the API. A description of what each options means can be found below.

::: warning False (Default)
Site has not been has not been reviewed or observed by Phisherman staff as serving malicious content.
:::

::: danger True
Site has been observed by Phisherman staff as serving  malicious content.
:::