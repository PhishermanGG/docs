# Phisherman API v2 <Badge type="tip" text="STABLE" />

Interact with the Phisherman's service via the Phisherman API.

Using the Phisherman API requires authentication so that we know who is making requests, what permissions you have and how many requests you are making.

If you do not have access to the dashboard, please see our [Getting Started](/guide/getting-started.md) page

## API Base URL

```
https://api.phisherman.gg/v2/
```

## Requests

Requests must be sent over HTTPS with any payload formatted in JSON.

### Authentication

All API endpoints require authemtication. Provide your bearer token in the [Authorization Bearer Token Header](https://tools.ietf.org/html/rfc6750#section-2.1) when making requests.

**Example**

```
"Authorization": "Bearer 04eff65e-309c-1a2b-cde3-4567f8901gh"
```

### API Permissions

Some API endpoints require additional permissions to be enabled for your account as well as an API token to be sent via headers. You can view your current API permissions on your [settings page](https://phisherman.gg/user/settings)

### Rate Limit

The Phisherman API rate limits requests in order to prevent abuse and overload of our services. All users can make up to **30 requests per 10 seconds** to our API.

::: warning **NOTE**
Exceeding these limits will automatically block subsequent requests for a limited time. Repeated or continual breeches of these limits may result in your API key being revoked.
:::

All applications should make reasonable attempts to avoid making invalid requests. For example:

- **401** responses are avoided by providing a valid token in the authorization header when required and by stopping further requests after a token becomes invalid
- **403** responses are avoided by inspecting required permissions and by not making requests that are restricted by such permissions

If you have a very large application that may exceed this limit on on a regular or sustained basis, please contact us via ModMail.

## HTTP Response Codes

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

::: tip
Each endpoint page will have its own specific response codes listed.
:::
