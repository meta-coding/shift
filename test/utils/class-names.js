/*global describe it */

import classNames from '../../utils/class-names';
import {assert} from 'chai';

describe('Utils', () => {
	describe('class names', () => {
		describe('merge', () => {
			it('Should return the class names itself when fed only one set of names', () => {
				var name = 'first-class';
				assert.equal(name, classNames.merge(name), 'When names is a single class name, should return that one class name');

				var names = 'first-class second-class';
				assert.equal(names, classNames.merge(names), 'When names are multiple classes, should return the same classes');
			});

			it('Should append extra class names when provided', () => {
				var original = 'first-class';
				var more = 'second-class';
				assert.equal(original + ' ' + more, classNames.merge(original, more), 'Should merge class names in order');

				var evenMore = 'third-class';
				assert.equal(original + ' ' + more + ' ' + evenMore, classNames.merge(original, more, evenMore), 'Should merge class names in order');
			});

			it('Should not append duplicate class names', () => {
				var original = 'first-class';
				var more = 'second-class first-class';
				assert.equal(original + ' ' + more.replace(' ' + original, ''), classNames.merge(original, more), 'Should merge class names in order, removing duplicates');
			});
		});
	});
});
