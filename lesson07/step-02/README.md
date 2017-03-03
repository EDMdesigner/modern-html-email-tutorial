## Bulletproof buttons in Modern HTML Emails

In this lesson we are testing 8 concept for bulletproof email buttons:
- VML-based button,
- Padding-based button,
- Border-based button,
- Padding + Border-based button,
- VML + Lineheight-based button, (This is the one as a new recommended method)
- Native button, (native button element inside an "anchor" tag)
- Table-based button. (a table element inside an "anchor" tag).

[Litmus previews for this step](https://litmus.com/checklist/emails/public/d061bd1)

We add wrap the button's text in a `p` tag, and apply the styles, set on
the `a` tag, so the text displays correctly. Adding this `p` element, the display is
fixed on **IE-based Outlooks**.