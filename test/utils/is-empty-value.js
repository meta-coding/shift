/* @flow */
import {isEmptyValue} from '../../utils/is-empty-value.js';

import {assert} from 'chai';

import Immutable from 'immutable';

describe('Utils', () => {
	describe('isEmptyValue', () => {
		it('Should return true on null', () => {
			assert.isTrue(isEmptyValue(null), 'null should be considered an empty value');
		});

		it('Should return true on undefined', () => {
			assert.isTrue(isEmptyValue(), 'undefined should be considered an empty value');
		});

		it('Should return true on an empty string', () => {
			assert.isTrue(isEmptyValue(''), 'empty string should be considered an empty value');
		});

		it('Should return false on a string with characters', () => {
			assert.isFalse(isEmptyValue('foo'), 'non empty string should not be considered an empty value');
		});

		it('Should return true on an empty array', () => {
			assert.isTrue(isEmptyValue([]), 'empty array should be considered an empty value');
		});

		it('Should return false on a non empty array', () => {
			assert.isFalse(isEmptyValue([0]), 'non empty array should not be considered an empty value');
		});

		it('Should return true on an empty immutable map', () => {
			assert.isTrue(isEmptyValue(Immutable.Map()), 'empty immutable map should be considered empty');
		});

		it('Should return true on an empty immutable list', () => {
			assert.isTrue(isEmptyValue(Immutable.List()), 'empty immutable list should be considered empty');
		});

		it('Should return false on a non-empty immutable map', () => {
			assert.isFalse(isEmptyValue(Immutable.Map({a: false})), 'non empty immutable map should be considered not empty');
		});

		it('Should return false on a non-empty immutable list', () => {
			assert.isFalse(isEmptyValue(Immutable.List([0])), 'non empty immutable list should be considered not empty');
		});

		it('Should return false on zero', () => {
			assert.isFalse(isEmptyValue(0), 'zero should be non empty');
		});

		it('Should return false on one', () => {
			assert.isFalse(isEmptyValue(1), 'one should be non empty');
		});

		it('Should return false on negative one', () => {
			assert.isFalse(isEmptyValue(-1), 'negative one should be non empty');
		});
	});
});
