---
description: Used to submit a new phish to Phisherman. Note that all reports are reviewed manually before any new domains are added to Phisherman.
---

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

# Report Bulk Detections <Badge type="warning" text="POST" />

For public bots that serve a large number of guilds, Phisherman offers a bulk reporting endpoint to help reduce the number of API calls made.

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
https://api.phisherman.gg/v2/detections/bulk
```

### Body

The JSON payload for this endpoint uses the end-users API key as the object key, followed by the full url of the phish, then an array of timestamps.

This allows the end user to view the number of Phish they have caught in the [dashboard](https://phisherman.gg/home)

```json
{
	"<USER#1-API-KEY>": {
		"https://internetbadguys.com/random-page-url": [1635591332, 1635592459],
		"https://malicious.test.phisherman.gg": [1635591332]
	},
	"<USER#2-API-KEY>": {
		"https://internetbadguys.com/random-page-url": [1635591332, 1635592459],
		"https://malicious.test.phisherman.gg": [1635591332]
	}
}
```

### Examples

::: code-group

```sh [CURL]
curl -L -X POST "https://api.phisherman.gg/v2/detections/bulk" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh" \
--data-raw "{
    \"<USER#1-API-KEY>\": {
        \"https://internetbadguys.com/random-page-url\": [
            1635591332,
            1635592459
        ],
        \"https://malicious.test.phisherman.gg\": [
            1635591332
        ]
    },
    \"<USER#2-API-KEY>\": {
        \"https://internetbadguys.com/random-page-url\": [
            1635591332,
            1635592459
        ],
        \"https://malicious.test.phisherman.gg\": [
            1635591332
        ]
    }
}"

```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh');

var raw = JSON.stringify({
	'<USER#1-API-KEY>': {
		'https://internetbadguys.com/random-page-url': [1635591332, 1635592459],
		'https://malicious.test.phisherman.gg': [1635591332],
	},
	'<USER#2-API-KEY>': {
		'https://internetbadguys.com/random-page-url': [1635591332, 1635592459],
		'https://malicious.test.phisherman.gg': [1635591332],
	},
});

var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: raw,
	redirect: 'follow',
};

fetch('https://api.phisherman.gg/v2/detections/bulk', requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
```

```py [Python]
import http.client
import json

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = json.dumps({
  "<USER#1-API-KEY>": {
    "https://internetbadguys.com/random-page-url": [
      1635591332,
      1635592459
    ],
    "https://malicious.test.phisherman.gg": [
      1635591332
    ]
  },
  "<USER#2-API-KEY>": {
    "https://internetbadguys.com/random-page-url": [
      1635591332,
      1635592459
    ],
    "https://malicious.test.phisherman.gg": [
      1635591332
    ]
  }
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh'
}
conn.request("POST", "/v2/detections/bulk", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

Report A Detection response

::: code-group

```json [HTTP204]
// No Content
```

```json [HTTP400]
{
	"success": false,
	"message": <ERROR-MESSAGE>,
	"data": {}
}
```
