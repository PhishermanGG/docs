---
description: Checks the supplied domain against our database.
---

# Check domain <Badge type="tip" text="GET" vertical="middle" />

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.

**Update**: The v2 API is being rewritten from scratch. Any previous v2 API documentation will be obsolete.
:::

Checks the supplied domain against our database.

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.READ`

The URL for this endpoint is: `https://api.phisherman.gg/v2/domains/<domain>`

`<domain>` is to be replaced with the domain you want to check.

Example: `https://api.phisherman.gg/v2/domains/gimme-ur-money.scam`

### Example request

<CodeGroup>
  <CodeGroupItem title="CURL" active>

```bash
curl -L -X GET "https://api.phisherman.gg/v2/domains/suspicious.test.phisherman.gg" \
-H "Authorization: Bearer <API-KEY>"
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
const response = await fetch("https://api.phisherman.gg/v2/domains/suspicious.test.phisherman.gg", {
  headers: {
    Authorization: "Bearer <API-KEY>"
  }
});

const data = response.ok ? await response.json() : "Domain was not found or an error occurred.";
```

Other variant:

```js
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <API-KEY>");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.phisherman.gg/v2/domains/suspicious.test.phisherman.gg", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));
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
conn.request("GET", "/v2/domains/suspicious.test.phisherman.gg", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </CodeGroupItem>

</CodeGroup>

### Response codes

| Code  | Description                                                                                                            |
| :---- | :--------------------------------------------------------------------------------------------------------------------- |
| `200` | Domain was found. JSON data is returned in response. See below for full response.                                      |
| `404` | Domain was not found. `null` is returned.                                                                              |
| `500` | An error occurred getting the domain from the database. This doesn't necessarily mean the domain was or was not found. |

### Example responses

::: details HTTP 200

```json
{
  "data": {
    "domain": "suspicious.test.phisherman.gg",
    "classification": "suspicious",
    "verifiedPhish": false
  }
}
```

::: tip The following is always returned if the domain is found to be safe:

```json
{
  "data": {
    "domain": "<domain>",
    "classification": "safe",
    "verifiedPhish": false
  }
}
```

:::

::: details HTTP 404

```json
{
  "data": null
}
```

:::

::: details HTTP 500

```json
{
  "message": "An error occurred getting the domain from the database."
}
```

:::

::: tip
Please see the [Domain Classifications](/guide/domain-classifications.md) page for information on each classification.
:::
