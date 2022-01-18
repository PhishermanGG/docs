# Getting Started

### Requesting API access

While Phisherman is still in early development access to some endpoints is on a per-person basis while we work to ensure overall stability, performance and gather user feedback.

To request access, please join our [Discord server](https://discord.gg/QwrpmTgvWy) and make a request.

::: warning
This app is still in early development and there may be breaking bugs or unplanned outages. Please keep this in mind if you are planning to integrate this into a live bot.
:::

### Endpoints

The API is accessed by making HTTPS requests to a specific version endpoint URL, in which GET, POST and PUT methods dictate how your interact with the endpoint.

The base URL for all endpoints is:

```
https://api.phisherman.gg/v2/
```

### Requests

Requests must be sent over HTTPS with any payload formatted in JSON. Depending on if a request required authentication you will also need to include your API token in the appropriate header.

### API Tokens

API Tokens provide a way to authenticate with the Phisherman API. They allow for scoped and permissioned access to resources and use the [Authorization Bearer Token Header](https://tools.ietf.org/html/rfc6750#section-2.1).

### API Permissions
Some API endpoints require additional permissions to be enabled for your account as well as an API token to be sent via headers. You can view your current API permissions on your [settings page](https://phisherman.gg/user/settings)


### HTTP response codes

The status of a response can be determined from the HTTP status code.


|Code|Status|Description|
|---|---|---|
|200|OK|Request successful|
|201|OK|Request successful|
|304|Not Modified|
|400|Bad Request|Request was invalid|
|401|Unauthorized|User does not have permission|
|403|Forbidden|Request not authenticated|
|429|Too many requests|Client is rate limited|
|500|Internal Server Error|An error occured, please try again later|