//js获取非内部样式表定义的属性值的兼容浏览器的方法
(function() {
	var div = document.getElementById("div");
	// alert(div.offsetWidth);
	// alert(div.style.width);
	function getStyle(obj, prop) {
		if (obj.currentStyle) { 	//判断浏览器是否支持currentStyle
			return (obj.currentStyle[prop]);
		} else if (window.getComputedStyle) {	//判断浏览器是否支持getComputedStyle
			return (window.getComputedStyle(obj, null)[prop]);
		} else {
			return null;
		}
	}
	var divWidth = getStyle(div, "width");
	alert(divWidth);	//'100px'
})()
