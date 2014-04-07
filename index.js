define(function() {
	var lightsElement = null;
	return function(color) {
		var blockWidth = 4;
		var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
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
		if (document.body.firstChild.children.length * blockWidth > windowWidth) {
			document.body.firstChild.lastChild.remove();
		}
	};
});
