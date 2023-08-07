# Best Practices









## Reporting Caught Phish

With Phisherman integration you can choose report back when it detects phishing links in servers protected by your bot.

Reporting back caught phish is entirely optional and not required for normal usage but allows the end user to view the number of Phish they have caught in the [dashboard](https://phisherman.gg/home).

If your bot serves a large number of high traffic servers, we recommend using the [Bulk Detection](/api/v2/catching-a-phish.html#bulk-reporting) endpoint.

## User Agent Header

You should ensure you provide a valid [User Agent Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) when making API calls.

This header should be in the format of:

```
<bot-name> (<comment> / <developer Discord ID>)
```

### Example User Agent Header

```
User-Agent: Phisherman-Bot (+https://phisherman.gg / 188032859276181504)
```

## Testing your integration

For a list of safe domains you can use for functional testing, please see [Testing your integration](/api/v2/introduction#testing-your-integration).