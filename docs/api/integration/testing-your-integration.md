# Testing your integration

In order for you to validate your Phisherman integration is working, we provide a selection of URLs you can use for functional testing, these will trigger as a real phish would.

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

Below are the expected responses when using the [Check Phish](/api/v2/phish/check-phish) v2 endpoint.

::: details suspicious.test.phisherman.gg

HTTP Code:

```
200
```

Body:

```json
{
    "suspicious.test.phisherman.gg": {
        "status": "OFFLINE",
        "created": "2021-12-29T21:42:29.000Z",
        "updated": "2023-11-20T22:44:26.000Z",
        "lastChecked": "2021-12-29T21:42:36.000Z",
        "verifiedPhish": false,
        "classification": "SUSPICIOUS",
        "targetedBrand": "Other",
        "phishCaught": 0,
        "details": {
            "ip_address": null,
            "asn": {},
            "country": {}
        }
    }
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
    "verified.test.phisherman.gg": {
        "status": "OFFLINE",
        "created": "2021-12-29T21:39:29.000Z",
        "updated": "2023-11-20T22:44:52.000Z",
        "lastChecked": "2021-12-29T21:39:37.000Z",
        "verifiedPhish": true,
        "classification": "MALICIOUS",
        "targetedBrand": "Other",
        "phishCaught": 0,
        "details": {
            "ip_address": null,
            "asn": {},
            "country": {}
        }
    }
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
    "unknown.test.phisherman.gg": {
        "classification": "unknown",
        "verifiedPhish": false
    }
}
```

:::
