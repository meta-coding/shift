/**
 * @flow
 */

import isEmptyValue from './is-empty-value.js';
import classNames from './class-names.js';

export default {
	isEmptyValue,
	classNames,
	/**
	 * @deprecated Use classNames.merge instead
	 */
	mergeClassNames: classNames.merge,

	/**
	 * @deprecated Use classNames.conditionalAppend instead
	 */
	maybeAppendErrorClassNames: classNames.conditionalAppend,
};
