define(function() {
	var lightsElement = null;

	var getElementWidth = function(element) {
		var computedStyle = window.getComputedStyle ? getComputedStyle(element, '') : element.currentStyle;
		return element.clientWidth - (
			parseInt(computedStyle.paddingLeft) + 
			parseInt(computedStyle.paddingRight)
		);
	};

	return function(color) {
		var blockWidth = 4;
		if (!lightsElement) {
			lightsElement = document.createElement('div');
			document.body.insertBefore(lightsElement, document.body.firstChild);
		}
		var element = document.createElement('div');
		var attrs = [
			'display: inline-block',
			'height: ' + blockWidth + 'px',
			'width: ' + blockWidth + 'px',
			'background-color: ' + color
		];
		element.setAttribute('style', attrs.join('; '));
		if (document.body.firstChild.children.length === 0) {
			document.body.firstChild.appendChild(element);
			return;
		}
		document.body.firstChild.insertBefore(element, document.body.firstChild.firstChild);
		while (
			(document.body.firstChild.children.length) &&
			(document.body.firstChild.children.length * blockWidth > getElementWidth(lightsElement))
		) {
			document.body.firstChild.lastChild.remove();
		}
	};
});
