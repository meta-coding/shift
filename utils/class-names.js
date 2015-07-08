/* @flow */
export function mergeNames(...names: string[]) : string {
	var classNames = {};
	var classes, i, n;
	var j, m;

	// Fast path out
	if (names.length === 1) {
		return names[0];
	}

	for (i = 0, n = names.length; i < n; i++) {
		classes = names[i].split(' ');
		for (j = 0, m = classes.length; j < m; j++) {
			if (classes[j].length === 0) {
				continue;
			}
			classNames[classes[j]] = true;
		}
	}
	return Object.keys(classNames).join(' ');
}

export function conditionalAppend(className: string, errorClassName: string, append: boolean) : string {
	if (!append) {
		return className;
	}

	return mergeNames(className, errorClassName);
}
