# Best Practices

## Reporting Caught Phish

With Phisherman integration, you can choose to report back when it detects phishing links in servers protected by your bot.

Reporting back caught phish is entirely optional and not required for normal usage but allows the end user to view the number of Phish they have caught in the [dashboard](https://phisherman.gg/home).

### Large & High Traffic Bots

If your bot serves a large number of high-traffic servers, we recommend using the [Bulk Detection Reporting](/api/v2/detections/report-detections-bulk) endpoint to help reduce the number of API calls made.

## User-Agent Header

You should ensure you provide a valid, custom [User Agent Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) when making API calls.

This header should be in the format of:

```
<bot-name> (<comment> / <developer Discord ID>)
```

### Example User-Agent Header

```
User-Agent: Phisherman-Bot (+https://phisherman.gg / 188032859276181504)
```
