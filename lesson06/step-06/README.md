## Content images in Modern HTML Emails

We have two separated container component. Inside them two section components each.
One contains the `h2` tag, the other contains a `multicol` component with two images.
The images are sized equally as the `multicol`s size, so it is visible if they apply the
the following properties unexpectedly:

- "width: 100%;" as CSS inline style, in the first `multicol`
- "max-width: 100%;" as CSS inline style in the second `multicol`.


**Both max-width and width applied:**

- Apple Mail 9, 10
- Outlook 2007, 2010, 2011, 2013, 2013 120 DPI, 2016
- Windows 10 Mail
- Thunderbird

- Android 4.4
- all iPhones
- iPad (Retina, Mini)

- all Web clients

**Only width applied:**
- Gmail App IMAP (Android)
- Android 5.1, 6.0



**Only max-width applied:**

- Lotus Notes 8, 8.5
- IBM Notes 9
- Outlook 2000, 2002, 2003


Lotus Notes 7 - no image display

https://litmus.com/checklist/emails/public/3ddf28e