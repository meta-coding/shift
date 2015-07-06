/* @flow */
var Immutable = require('immutable');

export default function(value: any) : bool {
	if (value == null) {
		return true;
	}

	if (value === '') {
		return true;
	}

	if (value instanceof Array && value.length === 0) {
		return true;
	}

	if (value instanceof Immutable.Iterable) {
		return value.size === 0;
	}

	return false;
}
