## Typography in Modern HTML Emails

In previous round we tested custom fonts included with `link` tags. Let's check the same font includes with @import approach.

Three test cases included:
- imported Google fonts (Lobster)
- imported custom, self-hosted font-face css, with relative font urls in css (Raleway)
- imported custom, self-hosted font-face css, with absolute font urls in css (Playfair Display)


To fix some of the existing spacing problems on legacy clients, we inlined a font-size and line-height reset on the `body` tag.


**Google fonts and absolute path imported fonts with self-hosted CSS works in:**
Desktop:
- Apple Mail 9, 10, Outlook 2011, Outlook 2016
- Thunderbird at EmailonAcid (while fails on Thunderbird at Litmus)

Mobile:
- all IOS

**Relative imported font files with self-hosted CSS works in:**
Desktop:
- Windows 10 Mail


**Fails on**
Desktop:
- Lotus Notes
- Outlook 2000, 2002, 2003, 2007, 2010, 2013, 2013 120 dpi

** Fails to display fallback font**
Desktop:
- Outlook 2007, 2010, 2013, 2013 120 dpi


[You can check the Litmus test results following this URL.](https://litmus.com/checklist/emails/public/d96248c)