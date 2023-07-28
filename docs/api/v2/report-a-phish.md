# Reporting a new phish <Badge type="warning" text="PUT" vertical="middle" />

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

Used to submit a new phish to Phisherman. Note that all reports are reviewed manually before any new domains are added to Phisherman.

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.READ`

The URL for this endpoint is:

```:no-line-numbers
https://api.phisherman.gg/v2/phish/report
```

### Required Parameters

| Name  | Type     | Description                                  |
| ----- | -------- | -------------------------------------------- |
| `url` | _string_ | The full url of the phish you wish to report |

### Example Requests

<CodeGroup>
  <CodeGroupItem title="CURL">

```bash
curl -L -X PUT "https://api.phisherman.gg/v2/phish/report" \
-H "Authorization: Bearer <API-KEY>" \
-H "Content-Type: application/json" \
--data-raw "{
    \"url\":\"https://internetbadguys.com/some-scam\"
}"
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <API-KEY>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  url: "https://internetbadguys.com/some-scam"
});

var requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.phisherman.gg/v2/phish/report", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));
```

  </CodeGroupItem>

  <CodeGroupItem title="Python">

```py
import http.client
import json

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = json.dumps({
  "url": "https://internetbadguys.com/some-scam"
})
headers = {
  'Authorization': 'Bearer <API-KEY>',
  'Content-Type': 'application/json'
}
conn.request("PUT", "/v2/phish/report", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </CodeGroupItem>

</CodeGroup>

### Example Response

```
HTTP2/201
{
	"success": true,
	"message": ""
}
```
