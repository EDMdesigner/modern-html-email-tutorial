## Paddings, Margins and Borders in Modern HTML Emails

This is the 3rd step to showcase how mentioned properties can be used in Modern HTML Emails. The code here gets modified on each step, based on what is being tested.


In this step,we'll see how to make the right workaround for big margins/paddings which needs to disappear on mobile. Instead of adding margins/paddings, we wrap our content with a Table, which has an empty cell on the left, before the content cell. Set the needed left-margin/left-padding as a width on this empty cell. Also we add the same empty cell to the right side, and class them as .fakeMargin. This '.fakeMargin' class will help us to hide these cells on mobile.


** All clients are OK**


You can check the Litmus test results following this URL:
![](https://litmus.com/checklist/emails/public/315f843)