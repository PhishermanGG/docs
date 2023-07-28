---
description: Outlines some common design choices for the v2 API.
---

# API Design

::: warning
v2 API is still in beta, there may be breaking changes at any time. It is recommended you keep updated with the [#v2-api-beta](https://discord.com/channels/878130674844979210/904090622208663632) channel in Discord for updates and announcements.

**Update**: The v2 API is being rewritten from scratch. Any previous v2 API documentation will be obsolete.
:::

One of the aims for the v2 API is to be a simple as possible, yet still powerful. One part of achieving this is with consistent returns.

### HTTP Response Codes

| Code | Description                                                                                                                                                  |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200  | The GET was successful. The requested data will be found inside the `data` prop in the response body.                                                        |
| 201  | The POST was successful. Returned when submitting a domain or detection.                                                                                     |
| 400  | The request body did not match the schema. Will always return an object with a `message` and `error` props. The `error` prop will most likely be a ZodError. |
| 401  | Not authorized. Missing valid `Authorization: Bearer <API-KEY>` header.                                                                                      |
| 403  | Forbidden. The API key does not have access to the requested resource.                                                                                       |
| 404  | The requested resource was not found.                                                                                                                        |
| 500  | Internal server error. Returned when we hit an error on our side. Will always return an object with a `message` prop.                                        |

Currently, these are the only HTTP response codes that are returned.

:::tip
Examples of an endpoints possible responses and status codes can be found the respective endpoint documentation.
:::
