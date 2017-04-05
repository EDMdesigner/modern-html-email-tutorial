## Typography in Modern HTML Emails

After the reasonable fixes, let's introduce custom fonts linked from secure URLs.

Three test cases included:
- Google Fonts in link tag (Lobster)
- linked custom, self-hosted font-face css, with relative font urls in css (Raleway)
- linked custom, self-hosted font-face css, with absolute font urls in css (Playfair Display)

**Google fonts and absolute linked fonts with self-hosted CSS works in:**
Desktop:
- Apple Mail 9, 10, Outlook 2011, Outlook 2016
- Thunderbird at EmailonAcid (while fails on Thunderbird at Litmus)

Mobile:
- all IOS

**Relative linked font files with self-hosted CSS works in:**
Desktop:
- Windows 10 Mail

**Fails on**
Desktop:
- Lotus Notes
- Outlook 2000, 2002, 2003, 2007, 2010, 2013, 2013 120 dpi

** Fails to display fallback font**
Desktop:
- Outlook 2007, 2010, 2013, 2013 120 dpi

[You can check the Litmus test results following this URL](https://litmus.com/checklist/emails/public/3f8bf39)
