# Fetch info for a domain <Badge type="tip" text="GET" vertical="middle" /> 

Returns information we have about a phishing domain. Responses are in `JSON` format.

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.READ`  

The URL for this endpoint is:
```:no-line-numbers
https://api.phisherman.gg/v1/domains/info/<domain>
```

### Required Parameters
|Name|Type|Description|
|---|---|---|
|`domain`|_string_|The fully qualified domain name you wish to query|

### Example Request
<CodeGroup>
  <CodeGroupItem title="CURL" active>

```bash
curl -L -X GET "https://api.phisherman.gg/v1/domains/info/internetbadguys.com" \
-H "Authorization: Bearer <API-KEY>"
```

</CodeGroupItem>

  <CodeGroupItem title="JS">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.phisherman.gg/v1/domains/info/internetbadguys.com',
  'headers': {
    'Authorization': 'Bearer <API-KEY>'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
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
conn.request("GET", "/v1/domains/info/internetbadguys.com", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </CodeGroupItem>

</CodeGroup>

### Example Response
```json
{
    "internetbadguys.com": {
        "status": "ONLINE",
        "created": "2021-10-31T14:39:24.000Z",
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
### Response Details

|Name|Type|Description|
|---|---|---|
|`status`|_string_|The status of this website. (mostly for future use)|
|`lastChecked`|_timestamp_|The timestamp (in UTC) when this domain was last checked as being online|
|`verifiedPhish`|_boolean_|Wether this domain is verified as a phishing website|
|`classification`|_string_|The [classification](/guide/domain-classifications.md) for this domain|
|`created`|_timestamp_|The timestamp (in UTC) when this was added to our database|
|`firstSeen`|_timestamp_|The timestamp (in UTC) when this domain was first reported as seen|
|`lastSeen`|_timestamp_|The timestamp (in UTC) when this domain was last reported as seen|
|`targetedBrand`|_string_|What brand or company this phish is aimed at|
|`phishCaught`|_integer_|The number of times this phish has been reported back to Phisherman as being caught|
|`phishTankId`|_integer_|The [PhishTank](https://www.phishtank.com/) ID for this domain, if applicable|
|`urlScanId`|_string_|The [URLScan.io](https://urlscan.io/) UUID for this domain, if applicable|
|`websiteScreenshot`|_string_|URL to a screenshot of this website, provided by either [PhishTank](https://www.phishtank.com/) or [URLScan.io](https://urlscan.io/)|
|`ip_address`|_string_|The IP address of this website|
|`asn: asn`|_string_|The ASN (Autonomous System Numbers) for this domain|
|`asn: name`|_string_|The human readable name for this ASN (Autonomous System Number)|
|`asn: route`|_string_|The CIDR block for this domain|
|`route`|_string_|The CIDR Block for this website|
|`registry`|_string_|The regional internet registry for this domain|
|`country: code`|_string_|The ISO code for the country this domain is hosted in|
|`country: name`|_string_|The country this domain is hosted in|