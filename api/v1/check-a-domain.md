# Check a domain <Badge type="tip" text="GET" vertical="middle" /> 

Checks the supplied domain against our database.

Returns `true` if the domain is in our database (identifying it as a phishing site) or `false`.

:lock: **Auth Token:** Not Required  
:key: **API Permission Required:** None 

The URL for this endpoint is:
```:no-line-numbers
https://api.phisherman.gg/v1/domains/<domain>
```

### Required Parameters
|Name|Type|Description|
|---|---|---|
|`domain`|_string_|The fully qualified domain name you wish to query|

### Example Request  
<CodeGroup>
   <CodeGroupItem title="CURL" active>

```bash
curl -L -X GET "https://api.phisherman.gg/v1/domains/internetbadguys.com"
```

</CodeGroupItem>

  <CodeGroupItem title="JS">

```js
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.phisherman.gg/v1/domains/internetbadguys.com", requestOptions)
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
headers = {}
conn.request("GET", "/v1/domains/internetbadguys.com", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </CodeGroupItem>

</CodeGroup>

### Example Response
```json
true
```


::: tip
Note that a return of `false` means that this domain is not listed in our database and not that the domain is safe. There is always a small window were newly registered phishing domains may not yet have been identified. Always exercise caution when dealing with suspected phishing domains. If in doubt, perform additional verifications such as [VirusTotal](https://www.virustotal.com) or [URLScan.io](https://urlscan.io/) scans.
:::