---
description: Submits a new domain to the Phisherman database.
---

# Submit domain <Badge type="warning" text="POST" />

Submits a new domain to the Phisherman database.

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.

**Update**: The v2 API is being rewritten from scratch. Any previous v2 API documentation will be obsolete.
:::

## Request

What you send to the API.

::: details Authentication

:lock: **Auth Token:** Required  
:key: **API Permission Required:** `API.DOMAINS.CREATE`

Provide your API key in the Authorization header when making requests.

**Example**

```
"Authorization": "Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh"
```

:::

The URL for this endpoint is:

```
https://api.phisherman.gg/v2/domains
```

All the data needs to be sent in the request body.

### Request parameters

| Name            | Type     | Required | Description                                              |
| :-------------- | :------- | :------- | :------------------------------------------------------- |
| `domain`        | _string_ | ✅ Yes   | The fully qualified domain name you wish to submit.      |
| `targetedBrand` | _string_ | ✅ Yes   | The ID of the brand or company this phish is targetting. |

### Example JSON payload

```json
{
	"domain": "internetbadguys.com",
	"targetedBrand": "OTHER"
}
```

### Accepted brands

A list of accepted brand IDs for `targetedBrand` can be found on the [Brands](/api/v2/brands/get-brands) page.

### Example requests

::: code-group

```sh [CURL]
curl -i -X POST https://api.phisherman.gg/v2/domains -H 'Authorization: Bearer API-KEY' -H 'Content-Type: application/json' -d '{"domain": "internetbadguys.com", "targetBrand": "OTHER"}'
```

```js [JavaScript]
const response = await fetch("https://api.phisherman.gg/v2/domains", {
	headers: {
		Authorization: "Bearer <API-KEY>",
	},
	body: JSON.stringify({
		domain: "internetbadguys.com",
		targetBrand: "OTHER",
	}),
});

const data = response.ok ? await response.json() : "Domain was not submitted.";
```

:::

## Response

What you get back from the API.

### Response codes

| Code  | Description                                          |
| :---- | :--------------------------------------------------- |
| `201` | Domain was added to the database.                    |
| `400` | Request body does not match the allowed schema.      |
| `403` | Domain is marked as safe and cannot be submitted.    |
| `500` | An error occurred adding the domain to the database. |

### Example responses

::: code-group

```json [HTTP 201]
{
	"data": {
		"id": "UUID",
		"domain": "<domain>",
		"targetedBrand": "<targetedBrand>"
	}
}
```

```json [HTTP 400]
{
	"message": "Request body did not match schema.",
	"error": {
		"issues": [
			{
				"code": "custom",
				"message": "'invalid-domain..com' is not a valid domain.",
				"path": ["domain"]
			},
			{
				"code": "invalid_type",
				"expected": "string",
				"received": "boolean",
				"path": ["targetedBrand"],
				"message": "Expected string, received boolean"
			}
		],
		"name": "ZodError"
	}
}
```

```json [HTTP 403]
{
	"message": "Protected domain"
}
```

```json [HTTP 500]
{
	"message": "An error occurred getting the domain from the database."
}
```
