# Testing your integration

For you to validate that your Phisherman integration is working, we provide a selection of URLs you can use for functional testing, these will trigger as a real phish would.

::: warning NOTE
Please use only the URLs listed below for testing, never live/known phishing sites
:::

The following URLs can be used for testing:

| URL                                     | Status                                 |
| --------------------------------------- | -------------------------------------- |
| `https://suspicious.test.phisherman.gg` | Triggers as a suspicious site          |
| `https://verified.test.phisherman.gg`   | Triggers as a verified, malicious site |
| `https://unknown.test.phisherman.gg`    | Triggers as an unknown site            |

## Expected Responses

Below are the expected responses when using the [v2 Check Domain](/api/v2/domains/check-domain) v2 endpoint.

::: details suspicious.test.phisherman.gg

HTTP Code:

```
200
```

Body:

```json
{
    "classification": "suspicious",
    "verifiedPhish": false
}
```

:::

::: details verified.test.phisherman.gg

HTTP Code:

```
200
```

Body:

```json
{
    "classification": "malicious",
    "verifiedPhish": true
}
```

:::

::: details unknown.test.phisherman.gg

HTTP Code:

```
200
```

Body:

```json
{
    "classification": "unknown",
    "verifiedPhish": false
}
```

:::
