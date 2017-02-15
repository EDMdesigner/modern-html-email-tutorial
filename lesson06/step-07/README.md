## Content images in Modern HTML Emails

With the previously built image component we are testing Base64 encoding support across clients.

*Content shows up even with image blocking on:*

Desktop:
- Apple Mail 9, 10
- Outlook 2003
- Thunderbird

Web client:
- Yahoo! Mail clients

*Content shows up only when image blocking is off*

Web client:
- AOL Mail clients
- freenet.de

*Content shows up only when image blocking is on*
Desktop: 
- Office 2016
- Comcast (Chrome)

*Not testable with visual test for image blocking*
but they support Base64 in general

Desktop:
- IBM Notes 9

Mobile clients:
- Android 4.4.4
- iPad devices (Retina, Air, Mini, iPad 2 with iOS 8 and 9)
- iPhone devices (5S, 6, 6 Plus all with iOS9)

Web clients:
- Mail.ru
- Terra Mail

*Not supported at all:*

Desktop:
- Outlook 2007, 2010 (+ 120 DPI). 20013 (+ 120 DPI)

Mobile:
- Android 5.1.0
- Android Gmail 6
- Gmail App iOS 7

Web clients:
- Gmail
- Office 365
- Outlook.com

https://litmus.com/checklist/emails/public/de3ddf2