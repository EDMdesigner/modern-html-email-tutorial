## Paddings, Margins and Borders in Modern HTML Emails

This is the 1st step to showcase how mentioned properties can be used in Modern HTML Emails. The code here gets modified on each step, based on what is being tested.


In this step, the IMG tag gets a DIV wrapper, while P was replaced to a DIV tag. This new DIV element has 20px margins, 10px paddings, and 2px dashed borders.


** It fails to render the correct paddings on IMG:**
- Lotus Notes 8
- Legacy outlooks, Word-based outlooks and clients without display:inline-block support will fail...

** the DIV imitating P lost its margins, and inherits other spacings**
- Word-based Outlooks


You can check the Litmus test results following this URL:
![](https://litmus.com/checklist/emails/public/8b846b8)