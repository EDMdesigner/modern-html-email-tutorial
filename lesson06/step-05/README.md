## Content images in Modern HTML Emails

We have the following image dimensioning properties defined:
- *div tag with width="600" height="auto" surrounding the image tag,*
- 600px width applied as an attribute,
- display: block; applied as CSS inline style,
- max-width: 100%; applied as CSS inline style,
which resolved image display for almost all clients.

*Problems occur for:*

Desktop:
- Windows 10 Mail - red vertical line
- Lotus Notes 7 - no image display

Web client:
- Terra Mail - no email display (Explorer), additional spacing (Chrome)

https://litmus.com/checklist/emails/public/a2ad7eb