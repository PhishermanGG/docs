---
description: Checks the supplied domain against our database and returns the details we have.
---

# Check Domain Details <Badge type="tip" text="GET" />

Checks the supplied domain against our database and returns the details we have.

::: warning NOTE
API v1 is now deprecated and will soon be sunset. We recommend migrating to the [v2 API](/api/v2/domains/check-domain-details) version of this endpoint as soon as possible.
:::

## Request

What you send to the API.

::: details Authentication

:lock: **API Key:** Required  
:key: **API Permission Required:** `API.READ`

Provide your API key in the Authorization header when making requests.

**Example**

```
"Authorization": "Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh"
```

:::

The URL for this endpoint is:

```
https://api.phisherman.gg/v1/domains/info/<domain>
```

`<domain>` is to be replaced with the domain you want to check.

Example: `https://api.phisherman.gg/v1/domains/info/gimme-ur-money.scam`

### Examples

::: code-group

```sh [CURL]
curl -L -X GET "https://api.phisherman.gg/v1/domains/info/gimme-ur-money.scam" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"

```

```js [JavaScript]
const response = await fetch("https://api.phisherman.gg/v1/domains/info/gimme-ur-money.scam", {
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer <API-KEY>",
	},
});

const data = response.ok ? await response.json() : "Domain was not found or an error occurred.";
```

```py [Python]
import http.client

conn = http.client.HTTPSConnection("api.phisherman.gg")
payload = ''
headers = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer <API-KEY>'
}
conn.request("GET", "/v1/domains/info/gimme-ur-money.scam", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))


```

:::

## Response

What you get back from the API.

### Response codes

| Code  | Description                                                                                                                    |
| :---- | :----------------------------------------------------------------------------------------------------------------------------- |
| `200` | Domain was found. JSON data is returned in response. (See below for full response)                                             |
| `400` | Invalid domain. Domain sent did not pass validation.                                                                           |
| `404` | Domain was not found.                                                                                                          |
| `500` | An error occurred getting the domain details from the database. This doesn't necessarily mean the domain was or was not found. |

### Example responses

::: code-group

```json [HTTP 200]
{
	"internetbadguys.com": {
		"status": "ONLINE",
		"created": "2021-10-31T14:39:24.000Z",
		"updated": "2021-12-31T00:00:00.000Z",
		"lastChecked": "2021-10-31T14:39:29.000Z",
		"verifiedPhish": false,
		"classification": "suspicious",
		"firstSeen": "2021-11-26T01:14:42.000Z",
		"lastSeen": "2021-12-27T16:40:15.000Z",
		"targetedBrand": "Other",
		"phishCaught": 6,
		"details": {
			"phishTankId": "",
			"urlScanId": "50c3429b-ee4d-452c-bad9-b4d5faaaffac",
			"websiteScreenshot": "https://urlscan.io/screenshots/50c3429b-ee4d-452c-bad9-b4d5faaaffac.png",
			"ip_address": "146.112.255.155",
			"asn": {
				"asn": "AS36692",
				"asn_name": "OPENDNS",
				"route": "146.112.255.0/24"
			},
			"registry": "arin",
			"country": {
				"code": "US",
				"name": "United States"
			}
		}
	}
}
```

```json [HTTP 200 (Safe Domains)]
{
	"<domain>": {
		"classification": "safe",
		"verifiedPhish": false
	}
}
```

```json [HTTP 400]
{
	"success": false,
	"message": "invalid request"
}
```

```json [HTTP 404]
{
	"<domain>": {
		"classification": "unknown",
		"verifiedPhish": false
	}
}
```

### Response Details

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

:::

::: tip
Please see the [Domain Classifications](/guide/domain-classifications.md) page for information on each classification.
:::
