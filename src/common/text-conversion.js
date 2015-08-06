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

exports.strToBin = function (string) {
    var result = [];

    for (var i = 0; i < string.length; ++i) {
        result.push(
            ('00000000' + string.charCodeAt(i).toString(2)).substr(-8, 8)
        );
    }

    return result.join('');
};

exports.binToStr = function (binary) {
    var result = [];

    binary.match(/.{8}/g).forEach(function (byte) {
        result.push(String.fromCharCode(parseInt(byte, 2)));
    });

    return result.join('');
};

exports.base64encode = function (string) {
    return new Buffer(string).toString('base64');
};

exports.base64decode = function (string64) {
    return new Buffer(string64, 'base64').toString('ascii');
};
