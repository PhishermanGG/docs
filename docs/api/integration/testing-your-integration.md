# Testing your integration

In order for you to validate your Phisherman integration is working, we provide a selection of URLs you can use for functional testing, these will trigger as a real phish would.

::: warning NOTE
Please use only the URLs listed below for testing and not live/known phishing sites
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
	"success": true,
	"message": "",
	"data": {
		"url": "https://suspicious.test.phisherman.gg",
		"classification": "suspicious",
		"verifiedPhish": false
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
	"success": true,
	"message": "",
	"data": {
		"url": "https://verified.test.phisherman.gg",
		"classification": "malicious",
		"verifiedPhish": true
	}
}
```

:::

::: details unknown.test.phisherman.gg

HTTP Code:

```
404
```

Body:

```json
{
	"success": false,
	"message": "not found",
	"data": {}
}
```

:::
