!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.browserLights=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = (function() {
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
}());

},{}]},{},[1])
(1)
});