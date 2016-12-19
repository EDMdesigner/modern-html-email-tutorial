(function() {
	function getScrollTop(){
		if(typeof pageYOffset!= 'undefined'){
			//most browsers except IE before #9
			return pageYOffset;
		} else {
			var B= document.body; //IE 'quirks'
			var D= document.documentElement; //IE with doctype
			D= (D.clientHeight)? D: B;
			return D.scrollTop;
		}
	}

	function getCoords(elem) { // crossbrowser version
		var box = elem.getBoundingClientRect();

		var body = document.body;
		var docEl = document.documentElement;

		var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

		var clientTop = docEl.clientTop || body.clientTop || 0;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;

		var top  = box.top +  scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;

		return { top: Math.round(top), left: Math.round(left) };
	}

	var menu = document.getElementById("menu");
	var content = document.getElementById("content");

	var contentTop = getCoords(content).top;

	addEventListener("scroll", function() {
		var scrollTop = getScrollTop();

		if (scrollTop > contentTop) {
			menu.style.position = "fixed";
			menu.classList.add("bg-white");
		} else {
			menu.style.position = "absolute";
			menu.classList.remove("bg-white");
		}
	});
}());
