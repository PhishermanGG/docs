---
description: Checks the supplied domain against our database. Returns more data than the regular endpoint.
---

# Check domain details <Badge type="tip" text="GET" vertical="middle" />

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.

**Update**: The v2 API is being rewritten from scratch. Any previous v2 API documentation will be obsolete.
:::

Checks the supplied domain against our database. Returns more data than the regular endpoint.

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.READ`

The URL for this endpoint is: `https://api.phisherman.gg/v2/domains/<domain>/details`

`<domain>` is to be replaced with the domain you want to check.

Example: `https://api.phisherman.gg/v2/domains/gimme-ur-money.scam/details`

### Example request

<CodeGroup>
  <CodeGroupItem title="CURL" active>

```bash
curl -L -X GET "https://api.phisherman.gg/v2/domains/internetbadguys.com/details" \
-H "Authorization: Bearer <API-KEY>"
```

</CodeGroupItem>

  <CodeGroupItem title="JS">

```js
const response = await fetch("https://api.phisherman.gg/v2/domains/internetbadguys.com/details", {
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

fetch("https://api.phisherman.gg/v2/domains/internetbadguys.com/details", requestOptions)
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
conn.request("GET", "/v2/domains/internetbadguys.com/details", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </CodeGroupItem>

</CodeGroup>

### Response codes

| HTTP Code | Description                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `200`     | Domain was found. JSON data is returned in response. See below for full response.                                              |
| `404`     | Domain was not found. `null` is returned.                                                                                      |
| `500`     | An error occurred getting the domain details from the database. This doesn't necessarily mean the domain was or was not found. |

### Example response

::: details HTTP 200

```json
{
  "data": {
    "id": "UUID",
    "domain": "internetbadguys.com",
    "classification": "malicious",
    "verifiedPhish": true,
    "targetedBrand": "Discord Inc.",
    "screenshot": "https://phisherman.gg/domain/screenshot/public/UUID",
    "network": {
      "ip": "45.142.122.189",
      "asn": {
        "id": "210644",
        "name": "AEZA-AS"
      },
      "country": {
        "code": "NL",
        "name": "Netherlands"
      }
    },
    "detections": {
      "total": 1701,
      "first": "2022-01-15T21:26:31.000Z",
      "last": "2022-01-24T07:09:56.000Z"
    },
    "createdAt": "2022-01-15T16:34:42.000Z",
    "links": {
      "phishtank": null,
      "urlscan": "https://urlscan.io/result/281ea6fe-9a2c-49dc-b323-40977ab36a22"
    }
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
  "message": "An error occurred getting the domain details from the database."
}
```

:::

### Response Details

This needs to be updated. Or even moved to a separate reference page.

| Name                | Type        | Description                                                                                                                          |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `status`            | _string_    | The status of this website. (mostly for future use)                                                                                  |
| `lastChecked`       | _timestamp_ | The timestamp (in UTC) when this domain was last checked as being online                                                             |
| `verifiedPhish`     | _boolean_   | Wether this domain is verified as a phishing website                                                                                 |
| `classification`    | _string_    | The [classification](/guide/domain-classifications.md) for this domain                                                               |
| `created`           | _timestamp_ | The timestamp (in UTC) when this was added to our database                                                                           |
| `firstSeen`         | _timestamp_ | The timestamp (in UTC) when this domain was first reported as seen                                                                   |
| `lastSeen`          | _timestamp_ | The timestamp (in UTC) when this domain was last reported as seen                                                                    |
| `targetedBrand`     | _string_    | What brand or company this phish is aimed at                                                                                         |
| `phishCaught`       | _integer_   | The number of times this phish has been reported back to Phisherman as being caught                                                  |
| `phishTankId`       | _integer_   | The [PhishTank](https://www.phishtank.com/) ID for this domain, if applicable                                                        |
| `urlScanId`         | _string_    | The [URLScan.io](https://urlscan.io/) UUID for this domain, if applicable                                                            |
| `websiteScreenshot` | _string_    | URL to a screenshot of this website, provided by either [PhishTank](https://www.phishtank.com/) or [URLScan.io](https://urlscan.io/) |
| `ip_address`        | _string_    | The IP address of this website                                                                                                       |
| `asn: asn`          | _string_    | The ASN (Autonomous System Numbers) for this domain                                                                                  |
| `asn: name`         | _string_    | The human readable name for this ASN (Autonomous System Number)                                                                      |
| `asn: route`        | _string_    | The CIDR block for this domain                                                                                                       |
| `route`             | _string_    | The CIDR Block for this website                                                                                                      |
| `registry`          | _string_    | The regional internet registry for this domain                                                                                       |
| `country: code`     | _string_    | The ISO code for the country this domain is hosted in                                                                                |
| `country: name`     | _string_    | The country this domain is hosted in                                                                                                 |
