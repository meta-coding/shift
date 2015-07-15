/* @flow */
/**
 * This is an editor wrapper component for stateful editors.
 * This allows an editor to maintain state about it's value and
 * other properties that would otherwise get passed as props.
 *
 * This can be quite useful when dealing with legacy APIs
 * such as jQuery plugins and the likes.
 * However, the stateless editor should be preferred.
 *
 * This wrapper works by reconsiling the events comming from
 * the underlying editor, out into the open with the form holding the editor.
 * As well as noticing prop changes from the form and propagating that into
 * commands to the editor. In the end, this results in a similiar API
 * usage in the form, but very different implementation details here.
 *
 * @TODO: Do we need to store information about entire selection ranges to support something like
 * `select` in our editors?
 */
var React = require('react');

// ignore unused and undef for the type definition
/*eslint-disable*/
type ReactClass<D, P, S, C: ReactComponent<D, P, S>> = Class<C>;
/*eslint-enable*/

type State = {
	value: any,
	initialValue: any,
	isFocused: bool,
};

type callback = () => void;

var undef;

type DefaultProps = {
	value: any,
	editorProps: any,
};

type Props = {
	editorProps: any,
	Component: ReactClass,
	value: any,
	isFocused: bool,
	onFocusNext: callback,
	onFocusPrev: callback,
	onFocus: callback,
	onBlur: callback,
	onChange: (value: any) => void,
};

class StatefulEditor extends React.Component<DefaultProps, Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = this.getInitialState();
	}
	getInitialState() : State {
		return {
			value: this.props.value,
			initialValue: this.props.value,
			isFocused: this.props.isFocused,
		};
	}
	componentDidMount() : void {
		if (this.props.isFocused) {
			this.refs.editor.focus();
		}
	}
	componentWillReceiveProps(nextProps : {value: any, isFocused: bool}) : void {
		// Fixup the value
		if (this.state.value !== nextProps.value) {
			this.refs.editor.setValue(nextProps.value);
			this.setState({
				value: nextProps.value,
			});
		}

		// Fixup the focused state
		// if (this.state.isFocused !== nextState.isFocused && this.state.isFocused !== nextProps.isFocused) {
		// 	// Store the newly commanded state
		// 	this.setState({
		// 		isFocused: nextProps.isFocused,
		// 	});
		//
		// 	// Editor, do our bidding, please
		// 	if (nextProps.isFocused) {
		// 		this.refs.editor.focus();
		// 	} else {
		// 		this.refs.editor.blur();
		// 	}
		// }
	}
	valueChanged(prevValue : any, nextValue : any) {
		this.setState({
			value: nextValue,
		}, function() {
			this.props.onChange(nextValue);
		});
	}
	onFocus() : any {
		this.setState({
			isFocused: true,
		}, function() {
			this.props.onFocus();
		});
	}
	onBlur() : any {
		this.setState({
			isFocused: false,
		}, function() {
			this.props.onBlur();
		});
	}
	render() : React.Element {
		var props = this.props.editorProps;
		if (props == null) {
			props = {};
		}

		return <this.props.Component
			initialValue={this.state.initialValue}
			ref={(c) => this.refs.editor = c}
			{...props}
			onFocusNext={this.props.onFocusNext}
			onFocusPrev={this.props.onFocusPrev}
			onFocus={this.onFocus}
			onBlur={this.onBlur}
			onChange={this.valueChanged}
		/>;
	}
	select() : void {
		this.refs.editor.select();
	}
}

StatefulEditor.propTypes = {
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
};

StatefulEditor.defaultProps = {
	value: undef,
	editorProps: {},
};
export {StatefulEditor};
