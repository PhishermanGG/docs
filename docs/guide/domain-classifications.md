# Domain Classifications

Phisherman operates a "traffic light" system to classifiy domains.

These are returned when using the [check](/api/check-a-domain.md) or [info](/api/fetch-domain-info.md) endpoints. A description of their meanings is listed below.



::: tip Safe
Domain has been verified as belonging to a reputable organisation (Discord, Steam etc.)

ℹ️ Attempting to report a new or caught phish for Safe domain will result in a HTTP/400 error
:::

::: warning Suspicious
Domain has not been verified as phishing or scam site, but is high probability of such (or is a newly registered domain that is likely to be used for phishing)
:::

::: danger Malicious
Domain has been manually verified as being a phishing or scam site
:::