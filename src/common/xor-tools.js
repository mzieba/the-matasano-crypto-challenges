
exports.xorTextAgainst = function(text, xor) {
	// same sizes
	while (xor.length < text.length) {
		xor += xor;
	}
	xor = xor.substr(0, text.length);

	var result = [];

	for (var i=0; i<text.length; ++i) {
		result.push(
			String.fromCharCode(
				text.charCodeAt(i) ^ xor.charCodeAt(i)
			)
		);
	}

	return result.join('');
};

exports.xorHexTextAgainst = function(text, xor) {
	// same sizes
	while (xor.length < text.length) {
		xor += xor;
	}
	xor = xor.substr(0, text.length);

	var result = [],
		xorPairs = xor.match(/.{2}/g);

	text.match(/.{2}/g).forEach(function(pair, i) {
		result.push(
			String.fromCharCode(
				parseInt(pair, 16) ^ parseInt(xorPairs[i], 16)
			)
		);
	});

	return result.join('');
};
