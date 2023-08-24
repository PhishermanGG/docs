---
description: Checks the supplied domain against our database and returns the details we have.
---

# Check Domain Details <Badge type="tip" text="GET" />

Checks the supplied domain against our database and returns the details we have.

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
https://api.phisherman.gg/v2/domains/<domain>/details
```

`<domain>` is to be replaced with the domain you want to check.

Example: `https://api.phisherman.gg/v2/domains/gimme-ur-money.scam/details`

### Examples

::: code-group

```sh [CURL]
curl -L -X GET "https://api.phisherman.gg/v2/domains/internetbadguys.com/details" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"

```

```js [JavaScript]
const response = await fetch("https://api.phisherman.gg/v2/domains/internetbadguys.com/details", {
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
conn.request("GET", "/v2/domains/internetbadguys.com/details", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))


```

:::

## Response

What you get back from the API.

### Response codes

| Code  | Description                                                                                                                    |
| :---- | :----------------------------------------------------------------------------------------------------------------------------- |
| `200` | Domain was found. JSON data is returned in response. (See below for full response)                                             |
| `400` | Invalid domain. Domain sent did not pass validation.                                                                           |
| `404` | Domain was not found.                                                                                                          |
| `500` | An error occurred getting the domain details from the database. This doesn't necessarily mean the domain was or was not found. |

### Example responses

::: code-group

```json [HTTP 200]
{
	"data": {
		"domain": "internetbadguys.com",
		"classification": "malicious",
		"verifiedPhish": true,
		"targetedBrand": "Discord Inc.",
		"screenshot": "https://phisherman.gg/domain/screenshot/public/UUID",
		"created": "2022-01-15T16:34:42.000Z",
		"network": {
			"ip": "45.142.122.189",
			"asn": {
				"id": "210644",
				"name": "AEZA-AS"
			},
			"country": {
				"code": "NL",
				"name": "Netherlands"
			}
		},
		"detections": {
			"total": 1701,
			"first": "2022-01-15T21:26:31.000Z",
			"last": "2022-01-24T07:09:56.000Z"
		},
		"links": {
			"phishtank": "https://phishtank.org/phish_detail.php?phish_id=ID",
			"urlscan": "https://urlscan.io/result/ID"
		}
	}
}
```

```json [HTTP 200 (Safe Domains)]
{
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
}
```

```json [HTTP 500]
{
	"message": "An error occurred getting the domain details from the database.",
}
```

:::

::: tip
Please see the [Domain Classifications](/guide/domain-classifications.md) page for information on each classification.
:::
