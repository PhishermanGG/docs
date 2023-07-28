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

## Requests

Requests must be sent over HTTPS with any payload formatted in JSON. Depending on if a request required authentication you will also need to include your API token in the appropriate header.

### API Key

API keys provide a way to authenticate with the Phisherman API. They allow for scoped and permissioned access to resources and use the [Authorization Bearer Token Header](https://tools.ietf.org/html/rfc6750#section-2.1).

### API Permissions

Some API endpoints require additional permissions to be enabled for your account as well as an API token to be sent via headers. You can view your current API permissions on your [settings page](https://phisherman.gg/user/settings)

### Rate Limit

The Phisherman API rate limits requests in order to prevent abuse and overload of our services. All users can make up to **50 requests per 10 seconds** to our API.

All applications should make reasonable attempts to avoid making invalid requests. For example:

- **401** responses are avoided by providing a valid token in the authorization header when required and by stopping further requests after a token becomes invalid
- **403** responses are avoided by inspecting required permissions and by not making requests that are restricted by such permissions

If you have a very large application that may exceed this limit on on a regular or sustained basis, please contact us via ModMail.

### HTTP response codes

The status of a response can be determined from the HTTP status code.

| Code | Status                | Description                                               |
| ---- | --------------------- | --------------------------------------------------------- |
| 200  | OK                    | Request successful                                        |
| 201  | Created               | Request successful, resource was created                  |
| 202  | Accepted              | Request successful, resource was created or updated       |
| 204  | No Content            | Request successful, no additional information to return   |
| 400  | Bad Request           | Request was invalid of malformed                          |
| 401  | Unauthorized          | You did not supply valid authentication credentials       |
| 403  | Forbidden             | You are not allowed to perform that action                |
| 429  | Too many requests     | Your request exceeded the API rate limit                  |
| 500  | Internal Server Error | Unable to perform the request due to server-side problems |

## Testing your integration

In order for you to verify your Phisherman integration is fully functional, we provide a selection of domains that will trigger Phisherman as a real phish would.

The following domains can be used for testing:

| Domain                          | Status                                   |
| ------------------------------- | ---------------------------------------- |
| `suspicious.test.phisherman.gg` | Triggers as a suspicious domain          |
| `verified.test.phisherman.gg`   | Triggers as a verified, malicious domain |
| `unknown.test.phisherman.gg`    | Triggers as an unknown domain            |

### Expected Responses

#### Checking a domain (v2 API)

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
