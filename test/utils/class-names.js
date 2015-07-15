/* @flow */
import {classNames} from '../../utils';
import {assert} from 'chai';

describe('Utils', () => {
	describe('class names', () => {
		describe('mergeNames', () => {
			it('Should return the class names itself when fed only one set of names', () => {
				var name = 'first-class';
				assert.equal(classNames.mergeNames(name), name, 'When names is a single class name, should return that one class name');

				var names = 'first-class second-class';
				assert.equal(classNames.mergeNames(names), names, 'When names are multiple classes, should return the same classes');
			});

			it('Should append extra class names when provided', () => {
				var original = 'first-class';
				var more = 'second-class';
				assert.equal(classNames.mergeNames(original, more), original + ' ' + more, 'Should merge class names in order');

				var evenMore = 'third-class';
				assert.equal(classNames.mergeNames(original, more, evenMore), original + ' ' + more + ' ' + evenMore, 'Should merge class names in order');
			});

			it('Should not append duplicate class names', () => {
				var original = 'first-class';
				var more = 'second-class first-class';
				assert.equal(classNames.mergeNames(original, more), original + ' ' + more.replace(' ' + original, ''), 'Should merge class names in order, removing duplicates');
			});

			it('Should de-dupe class names in single argument', () => {
				assert.equal(classNames.mergeNames('asdf asdf'), 'asdf', 'Should remove duplicates in single argument');
			});
		});

		describe('conditionalAppend', () => {
			it('Should append when append is true', () => {
				var original = 'first-class';
				var otherClass = 'second-class';

				assert.equal(classNames.conditionalAppend(original, otherClass, true), original + ' ' + otherClass, 'Should be combined classes when append equals to true');
			});
			it('Should not append when append is false', () => {
				var original = 'first-class';
				var otherClass = 'second-class';

				assert.equal(classNames.conditionalAppend(original, otherClass, false), original, 'Should not combine classes when append is false');
			});
		});
	});
});
