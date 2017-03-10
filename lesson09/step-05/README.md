## Typography in Modern HTML Emails

After the reasonable fixes let's introduce custom fonts linked from secure urls.

Three test cases included:
- google fonts in Link tag (Lobster)
- linked custom, self-hosted font-face css, with relative font urls in css (Raleway)
- linked custom, self-hosted font-face css, with absolute font urls in css (Playfair Display)

** Google fonts and Absolute linked font files with self-hosted css works on**
Desktop:
- Apple Mail 9, 10, Outlook 2011, Outlook 2016
- Thunderbird at EmailonAcid (while fails on Thunderbird at Litmus)

Mobile:
- all IOS

** Absolute linked font files with self-hosted css works on**
Desktop:
- Windows 10 Mail

**fails on**
Desktop:
- Lotus Notes
- Outlook 2000, 2002, 2003, 2007, 2010, 2013, 2013 120 dpi

** fails to display fallback font**
Desktop:
- outlook 2007, 2010, 2013, 2013 120 dpi

You can check the Litmus test results following this URL:
https://litmus.com/checklist/emails/public/3f8bf39