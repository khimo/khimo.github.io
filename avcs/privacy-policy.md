# Privacy Policy for AV Content Server Player

**Effective date:** 2026-05-11
**App:** AV Content Server Player (`com.khimo.avcsplayer`)
**Publisher:** Silvermist, Montevideo, Uruguay
**Contact:** support@khimo.com

This policy explains what AV Content Server Player ("the app") does and does not do with information on your device and on your local network. The app is a companion client for the Khimo AV Content Server and is intended to run on Android TV devices.

## Summary

- We do not collect, transmit, sell, or share any personal information.
- The app has no user accounts and no login.
- The app has no advertising and no analytics SDKs.
- All data the app stores stays on the device.
- All network activity is on your local network, directed at AV Content Server devices you choose to use.

## What the app does on your network

To find AV Content Servers, the app performs **multicast DNS (mDNS / Bonjour)** discovery on the local network for services of type `_ixpservices._tcp`. This is the standard mechanism Android provides for discovering services on the same Wi-Fi or Ethernet segment.

For each server it discovers or has previously seen, the app sends **HTTP HEAD requests** to check whether the server is currently reachable. These requests go only to the discovered server addresses on your local network.

When you open a server, the app loads that server's web-based player interface inside an embedded **WebView**. Any content shown in the WebView is served by that AV Content Server, not by the app or by us. Network requests made by the WebView are governed by the server you are connecting to.

The app does not contact any servers operated by Silvermist, Khimo, Bang & Olufsen, Google, or any third party as part of its normal operation, beyond the standard platform services provided by the Android operating system itself (for example, Google Play services that the OS uses to deliver app updates).

## What the app stores on your device

The app uses Android's `SharedPreferences` storage to remember the list of AV Content Servers it has seen, so they appear again the next time you open the app. For each remembered server it stores:

- The advertised service name
- The IP address
- The port
- The advertised domain (if any)
- The time the server was last seen
- The last known availability status
- An optional flag indicating which server, if any, you set as the default

This information stays on your device. It is not transmitted anywhere by the app. Uninstalling the app removes this storage.

## Personal data

The app does not request, collect, derive, or store any of the following:

- Names, email addresses, phone numbers, or other contact information
- Account credentials
- Precise or coarse location
- Contacts, calendar, photos, files, or microphone or camera input
- Advertising identifiers
- Device identifiers used for tracking
- Usage analytics or crash reports

## Third parties

The app uses the following open-source libraries provided by the Android ecosystem to function: AndroidX, Material Components, AndroidX Media3, and libVLC. These libraries run inside the app process and do not transmit user data to their authors or to us.

The app does not include any advertising, analytics, attribution, or tracking SDKs.

## Permissions

The app requests only the permissions it needs to perform local discovery and to load the server's web player, such as `INTERNET`, `ACCESS_NETWORK_STATE`, and `CHANGE_WIFI_MULTICAST_STATE`. These are used solely to talk to AV Content Servers on the same local network and to render their player UI.

## Security

Because all data stays on the device and on the local network, the relevant security boundary is your local network and the device itself. We recommend running AV Content Server Player and its associated AV Content Server on a network you trust. Communication between the app and the server uses whatever transport the server exposes (typically plain HTTP on a private LAN); the app does not add an additional encryption layer.

## Children

The app is a utility for use with the Khimo AV Content Server platform. It is not directed at children. It does not knowingly collect any information from anyone, including children, because it does not collect personal information at all.

## Changes to this policy

If this policy changes in a way that affects how the app handles information, an updated version will be published with a new effective date. Material changes will be reflected in the app's store listing.

## Governing law

This policy is governed by the laws of the Oriental Republic of Uruguay.

## Contact

Questions about this policy or about the app:

**support@khimo.com**
