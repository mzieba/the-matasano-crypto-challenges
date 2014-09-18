
exports.simple = function(textToScore, table) {
	var score = 0,
		code = 0,
		symbol = '';

	for (var i=0; i<textToScore.length; ++i) {
		var code = textToScore.charCodeAt(i);

		// beyond scope
		if (10 != code && 13 != code && (32 > code || 126 < code)) {
			return 0;
		} else {
			symbol = String.fromCharCode(code).toLowerCase();
			score += ('number' === typeof table[symbol])
				? table[symbol]
				: -1;
		}
	}

	return score;
};

