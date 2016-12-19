var theme = {
	theme: "default",
	colors: {
		primary: "#abcdef",
		secondary: "#f4f4f4",

		info: {
			background: "#25aaf2"
		},
		success: {
			background: "#54c059"
		},
		warning: {
			background: "#f5a500"
		},
		error: {
			background: "#ee483b"
		},

		white: "#fff",

		lightGray: "#fcfcfc",
		mediumGray: "#c0c1c2",
		darkGray: "#e5e9ec",

		black: "#000",
		transparent: "transparent"
	}
};

var plugins = EDMdesignerPlugins({
	APIkey: "FAKE_API_KEY",
	theme: theme
});

function createPreview(config) {
	var previewConfig = {
		id: config.id,
		parentElement: config.domElement,
		autoSize: true,
		callbacks: {}
	};
	plugins.superpreview.create(previewConfig);
	var instance = plugins.superpreview.getInstance(config.id);
	instance.url(config.url);

	if (config.tab) {
		instance.selectTab(config.tab);
	} else {
		instance.selectTab(2);
		instance.selectTab(0);
	}

	plugins.superpreview.getInstance(config.id).iframe.scrolling = "no";
}

var pluginDivs = document.querySelectorAll("[data-preview]");

for (var i = 0; i < pluginDivs.length; i = i + 1) {
	var act = pluginDivs[i];
	var url = act.getAttribute("data-preview");
	var tab = act.getAttribute("data-tab");
	if (!tab) {
		tab = 2;
	}

	if (typeof tab === "string") {
		tab = parseInt(tab);
	}

	var previewConf = {
		id: "preview" + i,
		domElement: act,
		url: url,
		tab: tab
	};

	createPreview(previewConf);

	var link = document.createElement("a");
	link.href = url;
	link.target = "_blank";
	link.appendChild(document.createTextNode("Open the preview in a new tab."));

	act.appendChild(link);
}
