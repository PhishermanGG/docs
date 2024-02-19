---
description: Checks the supplied domain against our database.
---

# Check A Domain <Badge type="tip" text="GET" />

Checks the supplied domain against our database.

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
https://api.phisherman.gg/v2/domains/check/<domain>
```

`<domain>` is to be replaced with the domain you want to check.

Example: `https://api.phisherman.gg/v2/domains/check/gimme-ur-money.scam`

### Examples

::: code-group

```sh [CURL]
curl -L -X GET "https://api.phisherman.gg/v2/domains/check/suspicious.test.phisherman.gg" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"

```

```js [JavaScript]
const response = await fetch("https://api.phisherman.gg/v2/domains/check/suspicious.test.phisherman.gg", {
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
conn.request("GET", "/v2/domains/check/suspicious.test.phisherman.gg", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

What you get back from the API.

### Example responses

::: code-group

```json [HTTP 200]
{
    "classification": "suspicious",
    "verifiedPhish": false
}
```

```json [HTTP 200 (Safe Domains)]
{
    "classification": "safe",
    "verifiedPhish": false
}
```

```json [HTTP 400]
{
    "message": "Invalid domain.",
    "error": [
        {
            "code": "custom",
            "message": "'invalid-domain..com' is not a valid domain.",
            "path": []
        }
    ]
}
```

```json [HTTP 404]
{
    "classification": "unknown",
    "verifiedPhish": false
}
```

:::

::: tip
Please see the [Domain Classifications](/guide/domain-classifications.md) page for information on each classification.
:::
