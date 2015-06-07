/**
 * Detect single-character XOR
 * One of the 60-character strings in file has been encrypted by single-character XOR. Find it.
 *
 * INPUT:
 * input04.txt
 *
 * EXPECTED:
 * ???
 *
 * @url http://cryptopals.com/sets/1/challenges/4/
 */

var fs = require('fs'),
    readline = require('readline'),
    textScoring = require('../common/text-scoring.js'),
    xorTools = require('../common/xor-tools.js');

var rd = readline.createInterface({
    input: fs.createReadStream('input04.txt'),
    output: process.stdout,
    terminal: false
});

var englishLettersByPopularity = {
        '\t': 0,
        '\n': 0,
        '\r': 0,
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
    resultsForFile = [];

rd.on('line', function (line) {
    var results = [];

    for (var i = 1; i < 256; ++i) {
        var symbol = String.fromCharCode(i),
            message = xorTools.xorHexTextAgainst(line, i.toString(16)),
            score = textScoring.simple(message, englishLettersByPopularity);

        if (0 < score) {
            results.push({
                symbol: symbol,
                message: message,
                score: score
            });
        }
    }

    if (results.length) {
        results.sort(function (a, b) {
            return b['score'] - a['score'];
        });

        resultsForFile.push({
            line: line,
            symbol: results[0].symbol,
            message: results[0].message,
            score: results[0].score
        });
    }
});

rd.on('close', function () {
    resultsForFile.sort(function (a, b) {
        return b['score'] - a['score'];
    });

    var OUTPUT = resultsForFile[0];

    console.log(OUTPUT);
});






