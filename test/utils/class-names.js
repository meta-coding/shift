/* @flow */
import {classNames} from '../../utils';
import {assert} from 'chai';

describe('Utils', () => {
	describe('class names', () => {
		describe('mergeNames', () => {
			it('Should return the class names itself when fed only one set of names', () => {
				var name = 'first-class';
				assert.equal(name, classNames.mergeNames(name), 'When names is a single class name, should return that one class name');

				var names = 'first-class second-class';
				assert.equal(names, classNames.mergeNames(names), 'When names are multiple classes, should return the same classes');
			});

			it('Should append extra class names when provided', () => {
				var original = 'first-class';
				var more = 'second-class';
				assert.equal(original + ' ' + more, classNames.mergeNames(original, more), 'Should merge class names in order');

				var evenMore = 'third-class';
				assert.equal(original + ' ' + more + ' ' + evenMore, classNames.mergeNames(original, more, evenMore), 'Should merge class names in order');
			});

			it('Should not append duplicate class names', () => {
				var original = 'first-class';
				var more = 'second-class first-class';
				assert.equal(original + ' ' + more.replace(' ' + original, ''), classNames.mergeNames(original, more), 'Should merge class names in order, removing duplicates');
			});

			it('Should de-dupe class names in single argument', () => {
				assert.equal('asdf', classNames.mergeNames('asdf asdf'), 'Should remove duplicates in single argument');
			});
		});

		describe('conditionalAppend', () => {
			it('Should append when append is true', () => {
				var original = 'first-class';
				var otherClass = 'second-class';

				assert.equal(original + ' ' + otherClass, classNames.conditionalAppend(original, otherClass, true));
			});
			it('Should not append when append is false', () => {
				var original = 'first-class';
				var otherClass = 'second-class';

				assert.equal(original, classNames.conditionalAppend(original, otherClass, false));
			});
		});
	});
});
