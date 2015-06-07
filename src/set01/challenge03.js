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


var textScoring = require('../common/text-scoring.js'),
    xorTools = require('../common/xor-tools.js');


var INPUT = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736',
    OUTPUT,
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
        z: 0.074
    },
    results = [];

for (var i = 32; i < 128; ++i) {
    var symbol = String.fromCharCode(i),
        message = xorTools.xorHexTextAgainst(INPUT, i.toString(16));

    results.push({
        symbol: symbol,
        message: message,
        score: textScoring.simple(message, englishLettersByPopularity)
    });
}

results.sort(function (a, b) {
    return b['score'] - a['score'];
});

OUTPUT = results[0];

console.log(OUTPUT);
