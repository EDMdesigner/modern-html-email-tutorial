## Typography in Modern HTML Emails

In previous round we tested custom fonts included with link tags. Let's check the same font includes with @import approach.

Three test cases included:
- imported google fonts (Lobster)
- imported custom, self-hosted font-face css, with relative font urls in css (Raleway)
- imported custom, self-hosted font-face css, with absolute font urls in css (Playfair Display)


To fix some of the existing spacing problems on legacy client, we inlined a font-size and line-height reset on the BODY tag. Also we introduced the margin/padding reset on all text elements.


** CSS Import based Google fonts and Absolute linked font files with self-hosted css works on**
Desktop:
- Apple Mail 9, 10, Outlook 2011, Outlook 2016
- Thunderbird at EmailonAcid (while fails on Thunderbird at Litmus)

Mobile:
- all IOS

** CSS Import based Absolute linked font files with self-hosted css works on**
Desktop:
- Windows 10 Mail



** fallback fonts are OK**

We had problems previously in step-04 with Terra Mail and some similar legacy like webmails. These clients showed much bigger spacings that what we want.

**This issue fixed with inlined margin/padding resets on text elements.**


You can check the Litmus test results following this URL:
https://litmus.com/checklist/emails/public/3f8bf39