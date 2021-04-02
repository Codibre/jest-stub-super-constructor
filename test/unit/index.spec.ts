import { stubSuperConstructor } from '../../src';

class TestBase {
	a: number;
	constructor() {
		this.a = 1;
	}
}

class Test extends TestBase {
	b: number;
	constructor() {
		super();
		this.b = 2;
	}
}

describe('stub-super-constructor.ts', () => {
	describe('stubSuperConstructor()', () => {
		it('should mock super constructor', () => {
			const stubSuper = stubSuperConstructor(Test);

			const target = new Test();

			expect(stubSuper).toBeCalledTimes(1);
			expect(target.a).toBeUndefined();
		});

		it('should throw error trying to mock non existing super', () => {
			let threwError: Error;
			try {
				stubSuperConstructor(TestBase);
			} catch (err) {
				threwError = err;
			}

			expect(threwError!).toBeInstanceOf(Error);
		});
	});
});
