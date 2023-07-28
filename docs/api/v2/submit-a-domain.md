# Submit a domain <Badge type="warning" text="PUT" vertical="middle" />

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.
:::

Used for submitting a new domain to the Phisherman database

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.CREATE`

The URL for this endpoint is:

```
https://api.phisherman.gg/v1/domains
```

### Example JSON payload

```json
{
  "hostname": "internetbadguys.com",
  "targetBrand": "OTHER",
  "details": {
    "urlScanId": "22fe9974-c8dc-45db-a739-b8e186c6f3ed",
    "ip_address": "146.112.255.155",
    "cidr_block": "146.112.255.0/24",
    "announcing_network": "ASN36692",
    "registry": "arin",
    "country": "US"
  }
}
```

### Required parameters

| Name            | Type     | Description                                       |
| --------------- | -------- | ------------------------------------------------- |
| `domain`        | _string_ | The fully qualified domain name you wish to query |
| `targetedBrand` | _string_ | What brand or company this phish is aimed at      |

Accepted options for `targetBrand` brand are:

- `DISCORD`
- `STEAM`
- `OTHER`

<span style="color:#e74a3b">:fas fa-exclamation-circle fa-lg fa-fw:</span> API will return `HTTP2/400` if any of the above parameters are missing or invalid

### Optional parameters

| Name                 | Type     | Description                                                               |
| -------------------- | -------- | ------------------------------------------------------------------------- |
| `urlScanId`          | _string_ | The [URLScan.io](https://urlscan.io/) UUID for this domain, if applicable |
| `ip_address`         | _string_ | The IP address of this website                                            |
| `cidr_block`         | _string_ | The CIDR Block for this website                                           |
| `announcing_network` | _string_ | The ASN (Autonomous System Numbers) for this domain                       |
| `registry`           | _string_ | The regional internet registry for this domain                            |
| `country`            | _string_ | The country this domain is hosted in                                      |

### Example request

```
curl -i -X POST https://api.phisherman.gg/v1/domains -H 'Authorization: Bearer API-KEY' -H 'Content-Type: application/json' -d '{"hostname": "internetbadguys.com", "targetBrand": "OTHER"}'
```

### Example response

```json
{}
HTTP/2 201
```
