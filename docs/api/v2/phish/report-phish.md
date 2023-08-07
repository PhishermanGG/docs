---
description: Used to submit a new phish to Phisherman. Note that all reports are reviewed manually before any new domains are added to Phisherman.
---

# Report New Phish <Badge type="warning" text="POST" />

Used to submit a new phish to Phisherman.

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

::: info NOTE
All reports are reviewed manually before any new domains are added to Phisherman.
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
https://api.phisherman.gg/v2/phish/report
```

### Body

```json
{
	"url": "https://internetbadguys.com"
}
```

| Name  | Type     | Required | Description                                  |
| ----- | -------- | -------- | -------------------------------------------- |
| `url` | _string_ | ✅ Yes   | The full url of the phish you wish to report |

### Examples

::: code-group

```sh [CURL]
curl -L -X POST "https://api.phisherman.gg/v2/phish/report" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"
--data-raw "{
    \"url\": "https://internetbadguys.com"
}"

```

```js [Javascript]
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
	'Authorization': 'Bearer <API-KEY>'
}
conn.request("POST", "/v2/phish/report", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

Report A Phish response

::: code-group

```json [HTTP201]
{
	"success": true,
	"message": "",
	"data": {}
}
```

```json [HTTP400]
{
	"success": false,
	"message": <ERROR-MESSAGE>,
	"data": {}
}
```
