---
description: Used to submit a new phish to Phisherman. Note that all reports are reviewed manually before any new domains are added to Phisherman.
---

# Report A Detection <Badge type="warning" text="POST" />

Used to report back to Phisherman when your bot triggeres a detection for a domain or URL in the Phisherman database.

::: tip
Reporting detections is entirely optional and not required for normal usage, though it does helps us with our analytics and allows you to see how many phish you have stopped.
:::

## Request

What you send to the API.

::: details Authentication

:lock: **API Key:** Required  
:key: **API Permission Required:** `API.UPDATE`

Provide your API key in the Authorization header when making requests.

**Example**

```
"Authorization": "Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh"
```

:::

The URL for this endpoint is:

```
https://api.phisherman.gg/v2/phish/caught/<domain>
```
`<domain>` is to be replaced with the domain you want to check.

Example: `https://api.phisherman.gg/v2/phish/caught/gimme-ur-money.scam`

### Body

```json
{
	"guild": "878130674844979210"
}
```

| Name    | Type     | Required | Description                                            |
| ------- | -------- | -------- | ------------------------------------------------------ |
| `guild` | _string_ | ❌ No    | The ID of the guild where this detection was triggered |

### Examples

::: code-group

```sh [CURL]
curl -L -X POST "https://api.phisherman.gg/v2/phish/caught/suspicious.test.phisherman.gg" \
-H "Authorization: Bearer <API-KEY>" \
-H "Content-Type: application/json" \
--data-raw "{
    \"guild\": 878130674844979210
}"

```

```js [JavaScript]
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <API-KEY>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "guild": 878130674844979200
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.phisherman.gg/v2/phish/caught/suspicious.test.phisherman.gg", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```

```py [Python]
import http.client
import json

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = json.dumps({
  "guild": 878130674844979200
})
headers = {
  'Authorization': 'Bearer <API-KEY>',
  'Content-Type': 'application/json'
}
conn.request("POST", "/v2/phish/caught/suspicious.test.phisherman.gg", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))

```

:::

## Response

Report A Detection response

::: code-group

```json [HTTP 201]
{
    "data": {
        "id": "e94fcbdd-2308-4336-9ee7-1d36b00a1344",
        "domain": "suspicious.test.phisherman.gg"
    }
}
```

```json [HTTP 400]
{
	"message": <ERROR-MESSAGE>,
}
```

```json [HTTP 500]
{
	"message": <ERROR-MESSAGE>,
}
```