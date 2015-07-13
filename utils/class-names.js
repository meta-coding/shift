/* @flow */
export function mergeNames(...names: string[]) : string {
	var classNames = {};
	names.forEach(name => {
		name.split(' ')
		.filter(className => className.length > 0)
		.forEach(className => classNames[className] = true);
	});
	return Object.keys(classNames).join(' ');
}

export function conditionalAppend(className: string, errorClassName: string, append: boolean) : string {
	if (!append) {
		return className;
	}

	return mergeNames(className, errorClassName);
}
