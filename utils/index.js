/* @flow */

export {isEmptyValue} from './is-empty-value.js';

import * as classNames from './class-names.js';

export {classNames};

/**
 * @deprecated Use classNames.mergeNames instead
 */
export {mergeNames as mergeClassNames} from './class-names.js';

/**
* @deprecated Use classNames.conditionalAppend instead
*/
export {conditionalAppend as maybeAppendErrorClassNames} from './class-names.js';
