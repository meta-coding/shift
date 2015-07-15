/* @flow */
/**
 * This is a simple editor wrapper component that does not do
 * much besides holding a reference to the actual editor.
 *
 * @TODO: `select` implementation feels icky.
 */
import React from 'react';

type fn = () => void;
type changeFn<T> = (value: ?T) => void;

// ignore unused and undef for the type definition
/*eslint-disable*/
type ReactClass<D, P, S, C: ReactComponent<D, P, S>> = Class<C>;
/*eslint-enable*/

type Props<T> = {
	Component: ReactClass,
	editorProps: any,
	onFocusNext: fn,
	onFocusPrev: fn,
	onFocus: fn,
	onBlur: fn,
	onChange: changeFn<T>,
	isFocused: bool,
	value: ?T,
};

type DefaultProps<T> = {
	editorProps: any,
	value: ?T
};

type State = {};

type Selectable = {
	select: fn,
};

type Refs = {
	editor: ?Selectable,
};

class StatelessEditor<T> extends React.Component<DefaultProps<T>, Props<T>, State> {
	props: Props<T>;
	refs: Refs;
	constructor(props : Props<T>, context: any) {
		super(props, context);
		this.refs = {
			editor: null,
		};
	}

	render() : React.Element {
		var props = this.props.editorProps;
		if (props == null) {
			props = {};
		}

		return <this.props.Component
			{...props}
			value={this.props.value}
			ref={(c) => this.refs.editor = c}
			onFocus={this.props.onFocus}
			onBlur={this.props.onBlur}
			onFocusNext={this.props.onFocusNext}
			onFocusPrev={this.props.onFocusPrev}
			isFocused={this.props.isFocused}
			onChange={this.props.onChange}
		/>;
	}

	select() : void {
		if (this.refs.editor != null) {
			this.refs.editor.select();
		} else {
			throw new Error('editor ref not assigned');
		}
	}
}

StatelessEditor.propTypes = {
	// What is the prop type for something that can be instanciated via
	// React.createElement?
	Component: React.PropTypes.any.isRequired,
	editorProps: React.PropTypes.any,
	onFocusNext: React.PropTypes.func.isRequired,
	onFocusPrev: React.PropTypes.func.isRequired,
	onFocus: React.PropTypes.func.isRequired,
	onBlur: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	isFocused: React.PropTypes.bool.isRequired,
	value: React.PropTypes.any,
};

var undef;

StatelessEditor.defaultProps = {
	value: undef,
	editorProps: {},
};

export {StatelessEditor};
