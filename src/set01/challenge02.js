/**
 * Fixed XOR
 * Write a function that takes two equal-length buffers and produces their XOR combination.
 * 
 * INPUT:
 * 1c0111001f010100061a024b53535009181c
 * 686974207468652062756c6c277320657965
 *
 * EXPECTED:
 * 746865206b696420646f6e277420706c6179
 *
 * @url http://cryptopals.com/sets/1/challenges/2/
 */

var INPUT = '1c0111001f010100061a024b53535009181c',
	XOR = '686974207468652062756c6c277320657965',
	EXPECTED = '746865206b696420646f6e277420706c6179',
	result = '';

var XORpairs = XOR.match(/.{2}/g);

INPUT.match(/.{2}/g).forEach(function(value, i) {
	var inputDec = parseInt(value, 16),
		xorDec = parseInt(XORpairs[i], 16);

	if (!isNaN(inputDec) && !isNaN(xorDec)) {
		result += (inputDec ^ xorDec).toString(16);
	} else {
		throw new Exception('bad char code!');
	}
});

console.log(EXPECTED === result)

