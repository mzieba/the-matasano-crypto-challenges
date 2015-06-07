/**
 * Convert hex to base64
 *
 * INPUT:
 * 49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d
 *
 * EXPECTED:
 * SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t
 *
 * @url http://cryptopals.com/sets/1/challenges/1/
 */

var btoa = require('../../node_modules/btoa');

var INPUT = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d',
    EXPECTED = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t',
    result = '';

INPUT.match(/.{2}/g).forEach(function (value) {
    var dec = parseInt(value, 16);
    if (!isNaN(dec)) {
        result += String.fromCharCode(parseInt(value, 16));
    } else {
        throw new Exception('bad char code!');
    }
});

result = btoa(result);

console.log(EXPECTED === result);
