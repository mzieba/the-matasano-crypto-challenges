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

