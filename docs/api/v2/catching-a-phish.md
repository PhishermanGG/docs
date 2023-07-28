# Reporting a caught phish <Badge type="warning" text="POST" vertical="middle" />

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

When integrating the Phisherman checks with your Discord bot, you can optionally report back when it catches a phish in your server(s).

::: tip
Reporting back caught phish is entirely optional and not required for normal usage, it purely helps us with our analytics
:::

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.UPDATE`

The URL for this endpoint is:

```:no-line-numbers
https://api.phisherman.gg/v2/phish/caught/<domain>
```

### Required Parameters

| Name     | Type     | Description                                       |
| -------- | -------- | ------------------------------------------------- |
| `domain` | _string_ | The fully qualified domain name you wish to query |

### Optional Parameters

| Name    | Type      | Description                                         |
| ------- | --------- | --------------------------------------------------- |
| `guild` | _integer_ | The Discord ID of the Guild this phish was found in |

### Example Requests

<CodeGroup>
  <CodeGroupItem title="CURL">

```bash
curl -L -X POST "https://api.phisherman.gg/v2/phish/caught/suspicious.test.phisherman.gg" \
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
  guild: 878130674844979200
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.phisherman.gg/v2/phish/caught/suspicious.test.phisherman.gg", requestOptions)
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

  </CodeGroupItem>

</CodeGroup>

### Example Response

```
HTTP2/204
```

## Bulk Reporting

For public bots that serve a large number of guilds, Phisherman offers a bulk reporting endpoint to help reduce the number of API calls made.

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.UPDATE_BULK`

The URL for this endpoint is:

```
https://api.phisherman.gg/v2/phish/caught/bulk
```

### Example JSON payload

The JSON payload for this endpoint uses the end-users API key as the object key, followed by the fully-qualified domain, then an array of timestamps. This allows the end user to view the number of Phish they have caught in the [dashboard](https://phisherman.gg/home)

```json
{
  "<USER#1-API-KEY>": {
    "suspicious.test.phisherman.gg": [1635591332, 1635592459],
    "malicious.test.phisherman.gg": [1635591332]
  },
  "<USER#2-API-KEY-2>": {
    "suspicious.test.phisherman.gg": [1635591332, 1635592459],
    "malicious.test.phisherman.gg": [1635591332]
  }
}
```

::: tip
We recommend caching caught phish data locally, and sending a periodic request to bulk report them every 10 minutes.
:::

### Example Requests

<CodeGroup>
  <CodeGroupItem title="CURL" active>

```bash
curl -L -X POST "https://api.phisherman.gg/v2/phish/caught/bulk" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>" \
--data-raw "{
    \"<USER#1-API-KEY>\": {
        \"suspicious.test.phisherman.gg\": [
            1635591332,
            1635592459
        ],
        \"malicious.test.phisherman.gg\": [
            1635591332
        ]
    },
    \"<USER#2-API-KEY-2>\": {
        \"suspicious.test.phisherman.gg\": [
            1635591332,
            1635592459
        ],
        \"malicious.test.phisherman.gg\": [
            1635591332
        ]
    }
}"
```

</CodeGroupItem>

  <CodeGroupItem title="JS">

```js
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer <API-KEY>");

var raw = JSON.stringify({
  "<USER#1-API-KEY>": {
    "suspicious.test.phisherman.gg": [1635591332, 1635592459],
    "malicious.test.phisherman.gg": [1635591332]
  },
  "<USER#2-API-KEY-2>": {
    "suspicious.test.phisherman.gg": [1635591332, 1635592459],
    "malicious.test.phisherman.gg": [1635591332]
  }
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.phisherman.gg/v2/phish/caught/bulk", requestOptions)
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
  "<USER#1-API-KEY>": {
    "suspicious.test.phisherman.gg": [
      1635591332,
      1635592459
    ],
    "malicious.test.phisherman.gg": [
      1635591332
    ]
  },
  "<USER#2-API-KEY-2>": {
    "suspicious.test.phisherman.gg": [
      1635591332,
      1635592459
    ],
    "malicious.test.phisherman.gg": [
      1635591332
    ]
  }
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <API-KEY>'
}
conn.request("POST", "/v2/phish/caught/bulk", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </CodeGroupItem>

</CodeGroup>

### Example response

```
HTTP2/204
```
