---
description: Returns a list of brands and their IDs from our database.
---

# List All Brands <Badge type="tip" text="GET" />

Returns a list of brands and their IDs from our database.

Brand IDs are required when [submitting a domain](/api/v2/domains/submit-domain).

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
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
https://api.phisherman.gg/v2/brands
```

### Examples

::: code-group

```sh [CURL]
curl -L -X GET "https://api.phisherman.gg/v2/brands" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"

```

```js [JavaScript]
const response = await fetch("https://api.phisherman.gg/v2/brands", {
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer <API-KEY>",
	},
});

const data = response.ok ? await response.json() : "Brand list not found or an error occurred.";
```

```py [Python]
import http.client

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = ''
headers = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer <API-KEY>'
}
conn.request("GET", "/v2/brands", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))


```

:::

## Response

What you get back from the API.

::: code-group

```json [HTTP 200]
{
	"success": true,
	"message": "",
	"data": [
		{
			"id": "AMAZON",
			"name": "Amazon Inc."
		},
		{
			"id": "APPLE",
			"name": "Apple Inc."
		},
		{
			"id": "ARENANET",
			"name": "ArenaNet"
		},
		{
			"id": "BLIZZARD",
			"name": "Blizzard Entertainment"
		}
		// ...
	]
}
```

```json [HTTP 404]
{
	"success": false,
	"message": "Not found",
	"data": {}
}
```

```json [HTTP 500]
{
	"success": false,
	"message": "An error occurred getting brands from the database.",
	"data": {}
}
```

:::
