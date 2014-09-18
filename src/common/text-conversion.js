
exports.hexToStr = function(hexString) {
	var result = [];
	hexString.match(/.{2}/g).forEach(function(pair) {
		result.push(String.fromCharCode(parseInt(pair, 16)));
	});
	return result.join('');
};

exports.strToHex = function(string) {
	var result = [];
	string.match(/.{1}/g).forEach(function(symbol) {
		result.push(
			symbol.charCodeAt(0).toString(16)
		);
	});
	return result.join('');
};
