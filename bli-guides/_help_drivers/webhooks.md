---
title: WebHooks
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Webhooks driver

The webhook driver listens for HTTP requests on a per-resource endpoint, generating an event that can be used to fire macros. Each event has details about the HTTP method that was used and the payload sent (if any).

This driver can be used to quickly integrate your macro programming with any system that can send an HTTP request to the BeoLiving Intelligence (BLI) IP address. For each resource defined on the webhook driver, the BLI will automatically define an endpoint. The path of this endpoint will be used as the internal resource address, and the URL for triggering the webhook will be http://$BLI_IP/$resourceAddress.

When using this driver, it is important to know that it relies on the IP access to your BLI from the third-party system. You should either define a fixed IP or a valid domain for your BLI, so the URL doesn't change in the future.

As a security measure, it is recommended to use the webhook POST resource, which only allows **POST** requests. This filters out most common XSS attacks.

## Channel settings

Defines whether incoming requests must be authenticated using HTTP auth. If auth is enabled, only authenticated requests will be allowed.

## Changelog

### v1.0 | 07/12/2022

- Initial version

### v1.1 | 19/02/2024
- Released

Please report any issues with this driver to: support+drivers@khimo.com.

