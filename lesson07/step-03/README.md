## Bulletproof buttons in Modern HTML Emails

In this lesson we are testing 8 concept for bulletproof email buttons:
- VML-based button,
- Padding-based button,
- Border-based button,
- Padding + Border-based button,
- VML + Lineheight-based button, (This is the one as a new recommended method)
- Native button, (native button element inside an "anchor" tag)
- Table-based button. (a table element inside an "anchor" tag).

[Litmus previews for this step](https://litmus.com/checklist/emails/public/6b01a0e)

We add `bgcolor="# HEX-COLOR " attribute to the `td` parent element of the button component.
This fixes Lotus Notes display problems (bare links without style, and missing buttons).