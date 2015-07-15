/* @flow */

import {addons} from 'react/addons';
import React from 'react';
var {TestUtils} = addons;
import {assert} from 'chai';

import {StatelessEditor} from '../../editor/stateless-editor';

describe('Editor', () => {
	describe('Stateless-editor', () => {
		class MyTestComponent extends React.Component {
		}

		var emptyOnFocusNext = () => {};
		var emptyOnFocusPrev = () => {};
		var emptyOnBlur = () => {};
		var emptyOnFocus = () => {};
		var emptyOnChange = () => {};

		it('Should render using the passed properties', () => {
			var isFocused = false;

			// intentionally left unassigned
			var undef;

			var editor = <StatelessEditor
				Component={MyTestComponent}
				onFocusNext={emptyOnFocusNext}
				onFocusPrev={emptyOnFocusPrev}
				onFocus={emptyOnFocus}
				onBlur={emptyOnBlur}
				onChange={emptyOnChange}
				isFocused={isFocused}
			/>;

			var ShallowRenderer = TestUtils.createRenderer();
			ShallowRenderer.render(editor);
			var output = ShallowRenderer.getRenderOutput();

			assert.equal(output.type, MyTestComponent, 'Should render given component as its top level component');
			assert.deepEqual(output.props, {
				onFocusNext: emptyOnFocusNext,
				onFocusPrev: emptyOnFocusPrev,
				onFocus: emptyOnFocus,
				onBlur: emptyOnBlur,
				onChange: emptyOnChange,
				value: undef,
				isFocused: isFocused,
			}, 'Props should match what is passed in');
		});
	});
});
