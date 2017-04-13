## Paddings, Margins and Borders in Modern HTML Emails

This is the initial setup to showcase how mentioned properties can be used in Modern HTML Emails. The code here gets modified on each step, based on what is being tested.


The layout HTML should be familiar from previous lessons. It contains a one column structure.
In this step, it contains a regular IMG and P tags. Both elements has 20px margins, 10px paddings, and 2px dashed borders.
While IMG represent the native inline-block behavior, the P tag behaves as a block element.


** It fails to render the paddings on:**
- Lotus Notes 8
- Word-based Outlooks drops borders, paddings and background from the IMG tag

** P lost its margin-left/right 20px**
- Word-based Outlooks 


You can check the Litmus test results following this URL:
![](https://litmus.com/checklist/emails/public/90ef8c4)