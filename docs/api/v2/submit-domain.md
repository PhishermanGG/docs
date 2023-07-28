---
description: Submits a new domain to the Phisherman database.
---

# Submit domain <Badge type="warning" text="POST" vertical="middle" />

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.

**Update**: The v2 API is being rewritten from scratch. Any previous v2 API documentation will be obsolete.
:::

Submits a new domain to the Phisherman database.

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.CREATE`

The URL for this endpoint is: `https://api.phisherman.gg/v2/domains`

All the data needs to be sent in the request body.

# Request parameters

| Name            | Type     | Optional | Description                                        |
| --------------- | -------- | -------- | -------------------------------------------------- |
| `domain`        | _string_ | No       | The fully qualified domain name you wish to query. |
| `targetedBrand` | _string_ | No       | The brand or company this phish is targetting.     |

### Example JSON payload

```json
{
  "domain": "internetbadguys.com",
  "targetedBrand": "OTHER"
}
```

**TBD**
Accepted options for `targetedBrand` brand are:

- `DISCORD`
- `STEAM`
- `OTHER`

### Example requests

<CodeGroup>
  <CodeGroupItem title="CURL" active>

```bash
curl -i -X POST https://api.phisherman.gg/v2/domains -H 'Authorization: Bearer API-KEY' -H 'Content-Type: application/json' -d '{"domain": "internetbadguys.com", "targetBrand": "OTHER"}'
```

  </CodeGroupItem>

  <CodeGroupItem title="JavaScript">

```js
const response = await fetch("https://api.phisherman.gg/v2/domains/suspicious.test.phisherman.gg", {
  headers: {
    Authorization: "Bearer <API-KEY>"
  },
  body: JSON.stringify({
    domain: "internetbadguys.com",
    targetBrand: "OTHER"
  })
});

const data = response.ok ? await response.json() : "Domain was not submitted.";
```

  </CodeGroupItem>
</CodeGroup>

### Response codes

| HTTP Code | Description                                          |
| --------- | ---------------------------------------------------- |
| `201`     | Domain was added to the database.                    |
| `400`     | Request body does not match the allowed schema.      |
| `403`     | Domain is marked as safe and cannot be submitted.    |
| `500`     | An error occurred adding the domain to the database. |

### Example responses

::: details HTTP 201
Domain was added to the database.

```json
{
  "data": {
    "id": "UUID",
    "domain": "<domain>",
    "targetedBrand": "<targetedBrand>"
  }
}
```

:::

::: details HTTP 400
Request body does not match the allowed schema. The Zod error will be returned.

```json
{
  "message": "Request body did not match schema.",
  "error": {
    "issues": [
      {
        "code": "invalid_type",
        "expected": "string",
        "received": "undefined",
        "path": ["targetedBrand"],
        "message": "Required"
      }
    ],
    "name": "ZodError"
  }
}
```

:::

::: details HTTP 403
Domain is marked as safe and cannot be submitted.

```json
{
  "message": "Protected domain"
}
```

:::

::: details HTTP 500
An error occurred adding the domain to the database.

```json
{
  "message": "An error occurred getting the domain from the database."
}
```

:::
