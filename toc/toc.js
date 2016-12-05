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
			url: "http://edmdesigner.com"
		},
		{
			title: "The Basics of HTML and CSS - Part Two"
		},
		{
			title: "The Basics of Modern HTML Emails"
		},
		{
			title: "Responsive Techniques in Modern HTML Emails"
		},
		{
			title: "Images and Videos in Modern HTML Emails"
		},
		{
			title: "Paddings, Margins and Borders in Modern HTML Emails"
		},
		{
			title: "Bulletproof Buttons in Modern HTML Emails"
		},
		{
			title: "Typography in Modern HTML Emails"
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
}());