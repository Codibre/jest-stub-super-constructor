let cleanups: Function[] = [];

beforeEach(() => {
	cleanups = [];
});

afterEach(() => {
	for (const cleanup of cleanups) {
		cleanup();
	}
	cleanups = [];
});

export function stubSuperConstructor<T>(cls: T) {
	const prototypeBackup = Object.getPrototypeOf(cls);
	if (!prototypeBackup || prototypeBackup.name === '') {
		throw new Error('Object has no super prototype');
	}

	const stub = jest.fn();
	Object.setPrototypeOf(cls, stub);
	cleanups.push(() => Object.setPrototypeOf(cls, prototypeBackup));

	return stub;
}
