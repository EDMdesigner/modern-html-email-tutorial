## Content images in Modern HTML Emails

Base64 encoding is tested as an alternative method for including images in email.
The test suite features Email on Acid tests, with additional Litmus test notes in some cases.


**Visible for enabled and disabled image blocking**
- Apple Mail 8, 9, 10
- Outlook 2003 (no support with Litmus)
- AOL Mails (only works image blocking of with Litmus)
- Yahoo! Mails (with Litmus aswell)
(Thunderbird belongs here with Litmus)
- Mobile clients (they don't have display off) except Android 5.1, 6.0  


**Visible only image blocking off**
- Outlook 2016 (Mac)
- Thunderbird (Toggle image blocking was not available, supported in tests with Litmus)
- BOL (Toggle image blocking was not available)
- Comcast (Toggle image blocking was not available)
- Mail.ru (Toggle image blocking was not available)


**Base64 is not supported**
- Lotus Notes 6.5, 7, 8, 8.5 (Toggle image-blocking was not available)
- Outlook 2007, 2010, 2011, 2013, 2016
- Gmail
- Office 365
- Outlook.com (Toggle image blocking was not available)
- GMX (Toggle image-blocking was not available)
- freenet.de (Toggle image blocking was not available, some support on Litmus)
- Orange.fr (Toggle image blocking was not available)
- T-online.de (Toggle image blocking was not available)
(Android 5.1, 6.0 versions with Litmus)

https://litmus.com/checklist/emails/public/de3ddf2