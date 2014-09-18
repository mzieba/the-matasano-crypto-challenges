/**
 * Single-byte XOR cipher
 * The hex encoded string has been XOR'd against a single character. Find the key, decrypt the message.
 * 
 * INPUT:
 * 1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736
 * 
 * EXPECTED:
 * ???
 *
 * @url http://cryptopals.com/sets/1/challenges/3/
 */


var hexToStr = function(hexString) {
	var result = [];
	hexString.match(/.{2}/g).forEach(function(pair) {
		result.push(String.fromCharCode(parseInt(pair, 16)));
	});
	return result.join('');
};

var strToHex = function(string) {
	var result = [];
	string.match(/.{1}/g).forEach(function(symbol) {
		result.push(
			symbol.charCodeAt(0).toString(16)
		);
	});
	return result.join('');
};


var xorTextAgainst = function(text, xor) {
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

var xorHexTextAgainst = function(text, xor) {
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

var simpleScore = function(textToScore, table) {
	var score = 0,
		code = 0,
		symbol = '';

	for (var i=0; i<textToScore.length; ++i) {
		var code = textToScore.charCodeAt(i);

		// beyond scope
		if (32 > code || 126 < code) {
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


var INPUT = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736',
	englishLettersByPopularity = {
		' ': 1,
		a: 8.167,
		b: 1.492,
		c: 2.782,
		d: 4.253,
		e: 12.702,
		f: 2.228,
		g: 2.015,
		h: 6.094,
		i: 6.966,
		j: 0.153,
		k: 0.772,
		l: 4.025,
		m: 2.406,
		n: 6.749,
		o: 7.507,
		p: 1.929,
		q: 0.095,
		r: 5.987,
		s: 6.327,
		t: 9.056,
		u: 2.758,
		v: 0.978,
		w: 2.360,
		x: 0.150,
		y: 1.974,
		z: 0.074,
	},
	results = {},
	scores = {},
	symbol;

for (var i=32; i<128; ++i) {
	symbol = String.fromCharCode(i);
	scores[symbol] = simpleScore(
		results[symbol] = xorHexTextAgainst(INPUT, i.toString(16)),
		englishLettersByPopularity
	);
}

var keys = [];
for (var key in scores) {
	keys.push(key);
}
keys.sort(function(a, b) {
	return scores[b] - scores[a];
});

console.log(
	keys[0],
	scores[keys[0]],
	results[keys[0]]
);
