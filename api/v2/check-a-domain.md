# Check a domain <Badge type="tip" text="GET" vertical="middle" /> 

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

Checks the supplied domain against our database. Returns the classification and status (verified) of the domain, if valid.

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.READ`  

The URL for this endpoint is:
```:no-line-numbers
https://api.phisherman.gg/v2/domains/check/<domain>
```

### Required Parameters
|Name|Type|Description|
|---|---|---|
|`domain`|_string_|The fully qualified domain name you wish to query|

### Example Request  
<CodeGroup>
   <CodeGroupItem title="CURL" active>

```bash
curl -L -X GET "https://api.phisherman.gg/v2/domains/check/suspicious.test.phisherman.gg" \
-H "Authorization: Bearer <API-KEY>"
```

</CodeGroupItem>

  <CodeGroupItem title="JS">

```js
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <API-KEY>");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.phisherman.gg/v2/domains/check/suspicious.test.phisherman.gg", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

  </CodeGroupItem>

  <CodeGroupItem title="Python">

```py
import http.client

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = ''
headers = {
  'Authorization': 'Bearer <API-KEY>'
}
conn.request("GET", "/v2/domains/check/suspicious.test.phisherman.gg", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </CodeGroupItem>

</CodeGroup>

### Example Response
```json
{
    "classification": "suspicious",
    "verifiedPhish": false
}
```

::: tip
Please see the [Domain Classifications](/guide/domain-classifications.md) page for information on each classification.
:::