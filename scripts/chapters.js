(function() {
	function getParameterByName(name, url) {
		if (!url) {
			url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		var results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var posts = [
		{
			title: "The Basics of HTML and CSS - Part One",
			url: "http://blog.edmdesigner.com/the-basics-of-html-and-css-part-one/"
		},
		{
			title: "The Basics of HTML and CSS - Part Two",
			url: "http://blog.edmdesigner.com/the-basics-of-html-and-css-part-two/"
		},
		{
			title: "The Basics of Modern HTML Emails",
			url: "http://blog.edmdesigner.com/the-basics-of-modern-html-emails/"
		},
		{
			title: "The Drop Calc Method to Create Responsive HTML Emails",
			url: "http://blog.edmdesigner.com/the-drop-calc-method-to-create-responsive-html-emails/"
		},
		{
			title: "HTML Email Width - Overcoming the 600px Barrier",
			url: "http://blog.edmdesigner.com/html-email-width-overcoming-the-600px-limitation/"
		},
		{
			title: "Content Images In Modern HTML Emails",
			url: "http://blog.edmdesigner.com/content-images-in-modern-html-emails/"
		},
		{
			title: "Bulletproof HTML Email Buttons - A New Line-height Based Approach",
			url: "http://blog.edmdesigner.com/bulletproof-html-email-buttons-a-new-line-height-based-approach/"
		},
		{
			title: "Typography In Modern HTML Emails"
		},
		{
			title: "Paddings, Margins and Borders in Modern HTML Emails"
		},
		{
			title: "Tabular Data in Modern HTML Emails"
		},
		{
			title: "Interactive Emails"
		},
		{
			title: "Quality Testing of HTML Emails"
		}
	];

	var actStr = "[You are reading it now]";
	var scripts = document.getElementsByTagName("script");
	var actPostIdx = getParameterByName("p", scripts[scripts.length - 1].src);
	actPostIdx = parseInt(actPostIdx);

	document.write('<div id="posts-toc">');
	document.write('<p>This article is part of the <a href="http://blog.edmdesigner.com/posts/modern-html-email-tutorial">Modern HTML Email Tutorial</a> which discusses the following topics:</p>');

	document.write("<ul>");
	for (var idx = 0; idx < posts.length; idx += 1) {
		var act = posts[idx];

		document.write("<li>");

		if (act.url && idx !== actPostIdx) {
			document.write('<a href="' + act.url + '" target="_blank">');
		}

		document.write(act.title);

		if (idx === actPostIdx) {
			document.write(" [You are reading it right now.]");
		}

		if (act.url && idx !== actPostIdx) {
			document.write("</a>");
		}

		document.write("</li>");
	}
	document.write("</ul>");
	document.write("</div>");
	document.write("<style>#posts-toc{border: 1px solid #e6e6e6;background: #fafafa;padding: 20px;margin: 20px;}</style>");
}());
