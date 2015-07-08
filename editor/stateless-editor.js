/* @flow */
/**
 * This is a simple editor wrapper component that does not do
 * much besides holding a reference to the actual editor.
 *
 * @TODO: `select` implementation feels icky.
 */
var React = require('react');

var StatelessEditor = React.createClass({
	mixins: [React.addons.PureRenderMixin],
	propTypes: {
		field: React.PropTypes.string,
		// What is the prop type for something that can be instanciated via
		// React.createElement?
		Component: React.PropTypes.any.isRequired,
		editorProps: React.PropTypes.any,
		onFocusNext: React.PropTypes.func.isRequired,
		onFocusPrev: React.PropTypes.func.isRequired,
		onFocus: React.PropTypes.func.isRequired,
		onBlur: React.PropTypes.func.isRequired,
		isFocused: React.PropTypes.bool.isRequired,
		value: React.PropTypes.any,
	},
	render() : React.Element {
		var props = this.editorProps;
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
			onChange={this.props.onChange}
		/>;
	},
	select() : void {
		this.refs.editor.select();
	},
});

export {StatelessEditor};
