exports.hexToStr = function (hexString) {
    var result = [];
    hexString.match(/.{2}/g).forEach(function (pair) {
        result.push(String.fromCharCode(parseInt(pair, 16)));
    });
    return result.join('');
};

exports.strToHex = function (string) {
    var result = [];

    for (var i = 0; i < string.length; ++i) {
        result.push(
            ('0' + string.charCodeAt(i).toString(16)).substr(-2, 2)
        );
    }

    return result.join('');
};
