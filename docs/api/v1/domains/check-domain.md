---
description: Checks the supplied domain against our database.
---

# Check A Domain <Badge type="tip" text="GET" />

Checks the supplied domain against our database.

## Request

What you send to the API.

::: details Authentication

🔓 **API Key:** Not Required  
🔑 **API Permission Required:** None

Authentication for this endpoint is Optional.
If you have an API key, provide it in the Authorization header when making requests.

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

Example: `https://api.phisherman.gg/v1/domains/gimme-ur-money.scam`

### Examples

::: code-group

```sh [CURL]
curl -L -X GET "https://api.phisherman.gg/v1/domains/internetbadguys.com" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <API-KEY>"

```

```js [JavaScript]
const response = await fetch("https://api.phisherman.gg/v1/domains/internetbadguys.com", {
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
conn.request("GET", "/v1/domains/internetbadguys.com", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

:::

## Response

What you get back from the API.

### Example responses

::: code-group

```json [HTTP 200 (suspicious or malicious)]
{
true
}
```

```json [HTTP 200 (safe or unknown)]
{
false
}
```

:::

::: warning IMPORTANT
Note that a return of `false` can mean that this domain is not listed in our database and not that the domain is safe. There is always a small window were newly registered phishing domains may not yet have been identified. Always exercise caution when dealing with suspected phishing domains. If in doubt, perform additional verifications such as [VirusTotal](https://www.virustotal.com) or [URLScan.io](https://urlscan.io/) scans.
:::