type ReactClass<D, P, S, C: ReactComponent<D, P, S>> = Class<C>;

type componentPredicate = (component: ReactComponent) => bool;

declare class ReactTestUtils {
	createRenderer(): ReactShallowRenderer;
	Simulate: ReactTestUtilsSimulate;
	isElement(element : any): bool;
	isElementOfType<D, P, S, C>(element: any, componentClass: ReactClass<D, P, S, C>): bool;
	isDOMComponent(instance: ReactComponent): bool;
	isCompositeComponent(instance: ReactComponent): bool;
	isCompositeComponentWithType<D, P, S, C>(instance: ReactComponent, componentClass: ReactClass<D, P, S, C>): bool;

	findAllinRenderedTree(tree: ReactComponent, test: componentPredicate): Array<ReactComponent>;
	scryRenderedDOMComponentsWithClass(tree: ReactComponent, className: string): Array<ReactComponent>;
	findRenderedDOMComponentWithClass(tree: ReactComponent, className: string): ReactComponent;
	findRenderedDOMComponentWithTag(tree: ReactComponent, tagName: string): ReactComponent;
	scryRenderedComponentsWithType<D, P, S, C>(tree: ReactComponent, componentClass: ReactClass<D, P, S, C>): Array<ReactComponent>;
	findRenderedComponentWithType<D, P, S, C>(tree: ReactComponent, componentClass: ReactClass<D, P, S, C>): ReactComponent;
}

declare class ReactTestUtilsSimulate {
	onClick(element: Element, eventData: ?any): void;
	// Add more event handlers here as needed...
}

declare class ReactShallowRenderer {
	render(element: ReactElement): void;
	getRenderOutput(): ReactElement;
}

type Addons = {
	TestUtils: ReactTestUtils
}

declare module 'react/addons' {
	declare var addons : Addons;
}
