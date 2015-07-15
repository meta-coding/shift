
declare module 'chai' {
	declare class Assert {
		equal<T>(actual: T, expected: T, message: ?string) : void;
		deepEqual<T>(actual: T, expected: T, message: ?string) : void;
		isTrue(value: bool, message: ?string) : void;
		isFalse(value: bool, message: ?string) : void;
	}
	declare var assert: Assert;
}
