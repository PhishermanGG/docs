---
description: Checks the supplied domain against our database.
---

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

# Check A Domain <Badge type="tip" text="GET" />

Checks the supplied domain against our database.

## Request

::: details Authentication

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

### Examples

::: code-group

```sh [CURL]
curl -L -X GET "https://api.phisherman.gg/v2/domains/suspicious.test.phisherman.gg" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh"

```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh');

var requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
};

fetch('https://api.phisherman.gg/v2/domains/suspicious.test.phisherman.gg', requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
```

```py [Python]
import http.client

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = ''
headers = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh'
}
conn.request("GET", "/v2/domains/internetbadguys.com", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))


```

:::

## Response

Check A Domain response

::: code-group

```json [HTTP200]
{
	"success": true,
	"message": "",
	"data": {
		"domain": "internetbadguys.com",
		"classification": "suspicious",
		"verifiedPhish": false
	}
}
```

```json [HTTP404]
{
	"success": false,
	"message": "not found",
	"data": {}
}
```

:::

::: tip
Please see the [Domain Classifications](/guide/domain-classifications.md) page for information on each classification.
:::
