# Reporting a caught phish <Badge type="warning" text="PUT" vertical="middle" /> 

When integrating the Phisherman checks with your Discord bot, you can optionally report back when it catches a phish in your server(s).

::: tip
Reporting back caught phish is entirely optional and not required for normal usage, it purely helps us with our analytics
:::

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.UPDATE`  

The URL for this endpoint is:
```:no-line-numbers
https://api.phisherman.gg/v1/domains/<domain>
```

### Required Parameters
|Name|Type|Description|
|---|---|---|
|`domain`|_string_|The fully qualified domain name of the phish you caught|

### Optional Parameters
|Name|Type|Description|
|---|---|---|
|`guild`|_integer_|The Discord ID of the Guild this phish was found in|

### Example Requests

<CodeGroup>
  <CodeGroupItem title="CURL">

```bash
curl -L -X PUT "https://api.phisherman.gg/v1/domains/verified.test.phisherman.gg" \
-H "Authorization: Bearer <API-KEY>" \
-H "Content-Type: application/json" \
--data-raw "{
    \"guild\": 878130674844979210
}"
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
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

  </CodeGroupItem>

  <CodeGroupItem title="Python">

```py
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

  </CodeGroupItem>

</CodeGroup>

### Example Response
```
HTTP2/204
```