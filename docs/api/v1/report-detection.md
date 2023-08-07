# Reporting A Detection <Badge type="info" text="PUT" vertical="middle" />

When integrating the Phisherman checks with your Discord bot, you can optionally report back when it catches a phish in your server(s).

::: warning NOTE
API v1 is now deprecated and will soon be sunset. We recommend migrating to the [v2 API](/api/v2/domains/check-domain-details) version of this endpoint as soon as possible.
:::

::: tip
Reporting back caught phish is entirely optional and not required for normal usage, it purely helps us with our analytics
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
https://api.phisherman.gg/v1/domains/<domain>
```

`<domain>` is to be replaced with the domain you want to check.

### Optional Parameters

| Name    | Type      | Description                                         |
| ------- | --------- | --------------------------------------------------- |
| `guild` | _integer_ | The Discord ID of the Guild this phish was found in |

### Examples

::: code-group

```sh [CURL]
curl -L -X PUT "https://api.phisherman.gg/v1/domains/verified.test.phisherman.gg" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"
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
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.phisherman.gg/v1/domains/verified.test.phisherman.gg", requestOptions)
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
conn.request("PUT", "/v1/domains/verified.test.phisherman.gg", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

What you get back from the API.

### Example responses

::: code-group

```json [HTTP204]
// No content
```

:::