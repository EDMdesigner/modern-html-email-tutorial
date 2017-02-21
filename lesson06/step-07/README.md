## Content images in Modern HTML Emails

We have a container component. Inside that there are two section components. One contains the `h2` tag, the other contains a `multicol` component with two images.
The images are sized equally as the `multicol`s size, so it is visible if they apply the
the following properties unexpectedly:

- "width: 100%;" and "max-width: 100%;" both as CSS inline style.


All clients renders correctly, except small issues:

* Android apps have a glaring sub-pixel border
* in Windows 10 Mail vertical line at right border,
* Lotus Notes 7 
* Outlook 2013 (120 DPI) resizes the image.


https://litmus.com/checklist/emails/public/de3ddf2