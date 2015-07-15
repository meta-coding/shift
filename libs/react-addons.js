declare class ReactTestUtils {
	createRenderer(): ReactShallowRenderer;
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
