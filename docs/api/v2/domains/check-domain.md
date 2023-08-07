---
description: Checks the supplied domain against our database.
---

# Check A Domain <Badge type="tip" text="GET" />

Checks the supplied domain against our database.

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.

**Update**: The v2 API is being rewritten from scratch. Any previous v2 API documentation will be obsolete.
:::

## Request

What you send to the API.

::: details Authentication

:lock: **API Key:** Required  
:key: **API Permission Required:** `API.READ`

Provide your API key in the Authorization header when making requests.

**Example**

```
"Authorization": "Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh"
```

:::

The URL for this endpoint is:

```
https://api.phisherman.gg/v2/domains/<domain>
```

`<domain>` is to be replaced with the domain you want to check.

Example: `https://api.phisherman.gg/v2/domains/gimme-ur-money.scam`

### Examples

::: code-group

```sh [CURL]
curl -L -X GET "https://api.phisherman.gg/v2/domains/suspicious.test.phisherman.gg" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"

```

```js [JavaScript]
const response = await fetch("https://api.phisherman.gg/v2/domains/suspicious.test.phisherman.gg", {
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer <API-KEY>",
	},
});

const data = response.ok ? await response.json() : "Domain was not found or an error occurred.";
```

```py [Python]
import http.client

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = ''
headers = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer <API-KEY>'
}
conn.request("GET", "/v2/domains/suspicious.test.phisherman.gg", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

What you get back from the API.

### Response codes

| Code  | Description                                                                                                            |
| :---- | :--------------------------------------------------------------------------------------------------------------------- |
| `200` | Domain was found. JSON data is returned in response. (See below for full response)                                     |
| `400` | Invalid domain. Domain sent did not pass validation.                                                                   |
| `404` | Domain was not found.                                                                                                  |
| `500` | An error occurred getting the domain from the database. This doesn't necessarily mean the domain was or was not found. |

### Example responses

::: code-group

```json [HTTP 200]
{
	"message": "",
	"data": {
		"domain": "suspicious.test.phisherman.gg",
		"classification": "suspicious",
		"verifiedPhish": false
	}
}
```

```json [HTTP 200 (Safe Domains)]
{
	"message": "",
	"data": {
		"domain": "<domain>",
		"classification": "safe",
		"verifiedPhish": false
	}
}
```

```json [HTTP 400]
{
	"message": {
		"error": {
			"issues": [
				{
					"code": "custom",
					"message": "'invalid-domain..com' is not a valid domain.",
					"path": []
				}
			],
			"name": "ZodError"
		}
	}
}
```

```json [HTTP 404]
{
	"message": "Not found",
	"data": {}
}
```

```json [HTTP 500]
{
	"message": "An error occurred getting the domain details from the database.",
	"data": {}
}
```

:::

::: tip
Please see the [Domain Classifications](/guide/domain-classifications.md) page for information on each classification.
:::
