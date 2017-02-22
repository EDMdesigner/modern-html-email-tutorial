## Content images in Modern HTML Emails

We have the following image dimensioning properties defined:
- 600px width applied as an attribute,
- display: block; applied as CSS inline style,
- width: 100%; applied in a media query for mobiles,
which resolved image display for:

**Correct display for:**

Desktop:
- Apple Mail 9, 10
- All of Outlooks
- Thunderbird
- Lotus Notes 8, 8.5
- IBM Notes 9

Mobile clients:
- All of them.

Web clients:
- AOL Mails
- Comcasts
- freenet.de
- G Suite
- Gmail
- Yahoo! Mail
- Web.de
- Outlook clients
etc.

**Problems occur for:**

Desktop:
- Windows 10 Mail - red vertical line
- Lotus Notes 7 - no image display

Web client:
- Terra Mail - no email display (Explorer), additional spacing (Chrome)
. Outlook.com and Outlook 365 - horizontal line at the bottom sometimes appear, not in every test case


https://litmus.com/checklist/emails/public/91e246f