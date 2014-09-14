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

var INPUT = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736',
	XOR = '',
	englishLettersByPopularity = ['s', 'a', 'c', 'm', 'p', 'r', 't', 'b', 'f', 'g', 'd', 'h', 'i', 'n', 'e', 'l', 'o', 'w', 'u', 'v', 'j', 'k', 'q', 'y', 'z', 'x'],
	pairs = INPUT.match(/.{2}/g);

for (var l=0, ln=englishLettersByPopularity.length; l<ln; ++l) {
	var letter = englishLettersByPopularity[l],
		caps = [letter, letter.toUpperCase()],
		result = '',
		string = '',
		letterCode = 0,
		inputDec;

	for (var c=0; c<2; ++c) {
		string = '';
		letterCode = caps[c].charCodeAt(0);
		
		for (var p=0, pn = pairs.length; p<pn; ++p) {
			inputDec = parseInt(pairs[p], 16);
			result = String.fromCharCode(inputDec ^ letterCode);

			if (/[^a-zA-Z0-9\s\']/.test(result)) {
				break;
			}
			string += result;
		}

		if (string.length === INPUT.length/2) {
			console.log({key: letter, decrypted: string});
		}
	}
}




