---
description: Checks the supplied URL against our database.
---

# Check A Phish <Badge type="warning" text="POST" />

Checks the supplied URL against our database.

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

::: tip TIP
This is the recommended endpoint for Discord bots to use as it supports passing the full URL without needed to parse the domain name first.
:::

## Request

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
https://api.phisherman.gg/v2/phish
```

### Body

```json
{
	"url": "https://internetbadguys.com"
}
```

| Name  | Type     | Required | Description                                 |
| ----- | -------- | -------- | ------------------------------------------- |
| `url` | _string_ | ✅ Yes   | The full url of the phish you wish to check |

### Examples

::: code-group

```sh [CURL]
curl -L -X POST "https://api.phisherman.gg/v2/phish" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"
--data-raw "{
    \"url\": "https://internetbadguys.com"
}"

```

```js [JavaScript]
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer <API-KEY>");

var raw = JSON.stringify({
	url: "https://internetbadguys.com/",
});

var requestOptions = {
	method: "POST",
	headers: myHeaders,
	body: raw,
	redirect: "follow",
};

fetch("https://api.phisherman.gg/v2/phish", requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log("error", error));
```

```py [Python]
import http.client

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = json.dumps({
  "url": "https://internetbadguys.com/"
})
headers = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer <API-KEY>'
}
conn.request("POST", "/v2/phish", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

What you get back from the API.

### Regular Domains

::: code-group

```json [HTTP 200]
{
	"data": {
		"url": "https://internetbadguys.com/",
		"domain": "internetbadguys.com",
		"classification": "suspicious",
		"verifiedPhish": false,
		"wasRedirected": false
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
					"message": "'hppt:/invalid-domain..com' is not a valid url.",
					"path": []
				}
			],
			"name": "ZodError"
		}
	}
}
```

```json [HTTP 404]
{}
```

```json [HTTP 500]
{
	"message": "An error occurred getting the details from the database."
}
```

:::

### Protected Domains

::: code-group

```json [HTTP 200]
{
	"data": {
		"url": <url>,
		"domain": <domain>,
		"classification": "safe",
		"verifiedPhish": false,
		"wasRedirected": false
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
					"message": "'hppt:/invalid-domain..com' is not a valid url.",
					"path": []
				}
			],
			"name": "ZodError"
		}
	}
}
```

```json [HTTP 404]
{}
```

```json [HTTP 500]
{
	"message": "An error occurred getting the domain details from the database."
}
```

:::

::: tip
Please see the [Domain Classifications](/guide/domain-classifications.md) page for information on each classification.
:::
