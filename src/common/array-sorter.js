exports.keysOfObject = function (targetObject, compareFunction) {
    var keys = [];

    for (var key in targetObject) {
        if (targetObject.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    return keys.sort(compareFunction);
};
