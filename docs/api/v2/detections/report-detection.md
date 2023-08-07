---
description: Used to submit a new phish to Phisherman. Note that all reports are reviewed manually before any new domains are added to Phisherman.
---

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

# Report A Detection <Badge type="warning" text="POST" />

Used to report back to Phisherman when your bot triggeres a detection for a domain or URL in the Phisherman database.

::: tip
Reporting detections is entirely optional and not required for normal usage, though it does helps us with our analytics and allows you to see how many phish you have stopped.
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
https://api.phisherman.gg/v2/detections
```

### Body

```json
{
	"url": "https://internetbadguys.com",
	"guild": "878130674844979210"
}
```

| Name    | Type     | Required                        | Description                                            |
| ------- | -------- | ------------------------------- | ------------------------------------------------------ |
| `url`   | _string_ | ![Yes](/images/green-check.png) | The full url of the phish that triggered the detection |
| `guild` | _string_ | ![No](/images/red-cross.png)    | The ID of the guild where this detection was triggered |

### Examples

::: code-group

```sh [CURL]
curl -L -X POST "https://api.phisherman.gg/v2/detections" \
-H "Authorization: Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh"
-H "Content-Type: application/json" \
--data-raw "{
    \"url\": "https://internetbadguys.com"
	 \"guild\": "878130674844979210"
}"

```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh');

var raw = JSON.stringify({
	url: 'https://internetbadguys.com/',
	guild: '878130674844979210',
});

var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: raw,
	redirect: 'follow',
};

fetch('https://api.phisherman.gg/v2/detections', requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
```

```py [Python]
import http.client

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = json.dumps({
  "url": "https://internetbadguys.com/",
  "guild": "878130674844979210"
})
headers = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh'
}
conn.request("POST", "/v2/detections", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

Report A Detection response

::: code-group

```json [HTTP201]
{
    "data": {
        "id": "cf70a2e3-b913-4801-8499-9b09dd6ece78",
        "domain": "internetbadguys.com",
        "url": "https://internetbadguys.com/",
        "timestamp": "2023-08-07T03:23:29.754Z"
    }
}
```

```json [HTTP400]
{
	"success": false,
	"message": <ERROR-MESSAGE>,
	"data": {}
}
```
