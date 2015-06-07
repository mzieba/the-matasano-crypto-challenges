exports.simple = function (textToScore, table) {
    var score = 0,
        code = 0,
        symbol = '',
        isLower = false;

    for (var i = 0; i < textToScore.length; ++i) {
        code = textToScore.charCodeAt(i);

        // beyond scope
        if (10 != code && 13 != code && (32 > code || 126 < code)) {
            return 0;
        } else {
            symbol = String.fromCharCode(code).toLowerCase();
            isLower = String.fromCharCode(code) === symbol;

            // additional 20% of score if letter is a lower case
            score += ('number' === typeof table[symbol])
                ? table[symbol] + isLower * (table[symbol] / 5)
                : -1;
        }
    }

    return score;
};

exports.hammingDistance = function (a, b) {
    if (a.length != b.length) {
        return false;
    }

    var result = 0,
        aBin = '',
        bBin = '';

    for (var i = 0; i < a.length; ++i) {
        aBin = ('00000000' + a.charCodeAt(i).toString(2)).substr(-8, 8);
        bBin = ('00000000' + b.charCodeAt(i).toString(2)).substr(-8, 8);

        for (var j = 0; j < 16; ++j) {
            if (aBin.charAt(j) != bBin.charAt(j)) {
                ++result;
            }
        }
    }

    return result;
};

