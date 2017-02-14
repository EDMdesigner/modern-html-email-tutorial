## Content images in Modern HTML Emails

We have the following image dimensioning properties defined:
- *width, max-width and height properties for conditional code for outlook targeting,*
- *max-width: removed from image tag,*
- *media query for mobile views instead,*
- div tag with width="600" height="auto" surrounding the image tag,
- 600px width applied as an attribute,
- display: block; applied as CSS inline style,
which resolved image display for almost all clients.

*Problems occur for:*

Desktop:
- Windows 10 Mail - red vertical line
- Lotus Notes 7 - no image display

https://litmus.com/checklist/emails/public/3ddf28e