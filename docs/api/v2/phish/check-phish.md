---
description: Checks the supplied URL against our database.
---
::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

# Check A Phish <Badge type="tip" text="GET" />

Checks the supplied URL against our database.

::: tip TIP
This is the recommended endpoint for Discord bots to use as it supports passing the full URL without needed to parse the domain name first.
:::

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
https://api.phisherman.gg/v2/phish
```

### Body
```json
{
	"url": "https://internetbadguys.com"
}
```
| Name  | Type     | Required                        | Description                                  |
| ----- | -------- | ------------------------------- | -------------------------------------------- |
| `url` | _string_ | ![Yes](/images/green-check.png) | The full url of the phish you wish to check  |

### Examples

::: code-group

```sh [CURL]
curl -L -X GET "https://api.phisherman.gg/v2/phish/report" \
-H "Authorization: Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh"
-H "Content-Type: application/json" \
--data-raw "{
    \"url\": "https://internetbadguys.com"
}"

```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh');

var raw = JSON.stringify({
  url: "https://internetbadguys.com/"
});

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.phisherman.gg/v2/phish/report", requestOptions)
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
	'Authorization': 'Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh'
}
conn.request("GET", "/v2/phish/report", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

Check A Phish response

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
