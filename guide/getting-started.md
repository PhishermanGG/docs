# Getting Started

## Requesting API access
While Phisherman is still development access is granted on a per-person basis while we work to ensure overall stability, performance and gather user feedback.

To request access, please join our [Discord server](https://discord.gg/QwrpmTgvWy) and send a direct message to ModMail to request access.

![ModMail](/images/modmail.png) 

::: warning NOTE
Phisherman is still development and there may be breaking bugs or unplanned outages. Please keep this in mind if you are planning to integrate this into a live bot.
:::

🚫 The following will not be eligible for access to Phisherman:

- iOS, Google Play Store or Kindle apps
- College or University projects/assignments
- Private bots for testing or development purposes only

## Endpoints
The API is accessed by making HTTPS requests to a specific version endpoint URL, in which GET, POST and PUT methods dictate how your interact with the endpoint.

The stable base URL for all Version 1 endpoints is:

```:no-line-numbers
https://api.phisherman.gg/v1/
```

### Requests
Requests must be sent over HTTPS with any payload formatted in JSON. Depending on if a request required authentication you will also need to include your API token in the appropriate header.

### API Key
API keys provide a way to authenticate with the Phisherman API. They allow for scoped and permissioned access to resources and use the [Authorization Bearer Token Header](https://tools.ietf.org/html/rfc6750#section-2.1).

### API Permissions
Some API endpoints require additional permissions to be enabled for your account as well as an API token to be sent via headers. You can view your current API permissions on your [settings page](https://phisherman.gg/user/settings)

### HTTP response codes
The status of a response can be determined from the HTTP status code.

|Code|Status|Description|
|---|---|---|
|200|OK|Request successful|
|201|OK|Request successful|
|204|OK|Request successful|
|304|Not Modified|
|400|Bad Request|Request was invalid|
|401|Unauthorized|Request not authenticated|
|403|Forbidden|User does not have permission|
|429|Too many requests|Client is rate limited|
|500|Internal Server Error|An error occured, please try again later|

## Testing your integration

In order for you to verify your Phisherman integration is fully functional, we provide a selection of domains that will trigger Phisherman as a real phish would.

The following domains can be used for testing:

|Domain|Status|
|---|---|
|`suspicious.test.phisherman.gg`|Triggers as a suspicious domain|
|`verified.test.phisherman.gg`|Triggers as a verified domain|
|`unknown.test.phisherman.gg`|Triggers as an unknown domain|


### Expected Responses

#### Checking a domain
<CodeGroup>
   <CodeGroupItem title="suspicious.test.phisherman.gg" active>

```json
{
    "classification": "suspicious",
    "verifiedPhish": false
}
```

</CodeGroupItem>

  <CodeGroupItem title="verified.test.phisherman.gg">

```json
{
    "classification": "malicious",
    "verifiedPhish": true
}
```

  </CodeGroupItem>

  <CodeGroupItem title="unknown.test.phisherman.gg">

```json
{
    "classification": "unknown",
    "verifiedPhish": false
}
```

  </CodeGroupItem>

</CodeGroup>