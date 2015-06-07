
exports.keysOfObject = function(targetObject, compareFunction) {
	var keys = [];

	for (var key in targetObject) {
		keys.push(key);
	}

	return keys.sort(compareFunction);
};
