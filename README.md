[![Actions Status](https://github.com/Codibre/jest-stub-super-constructor/workflows/build/badge.svg)](https://github.com/Codibre/jest-stub-super-constructor/actions)
[![Actions Status](https://github.com/Codibre/jest-stub-super-constructor/workflows/test/badge.svg)](https://github.com/Codibre/jest-stub-super-constructor/actions)
[![Actions Status](https://github.com/Codibre/jest-stub-super-constructor/workflows/lint/badge.svg)](https://github.com/Codibre/jest-stub-super-constructor/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f8fac3165c1c05b9b6a8/test_coverage)](https://codeclimate.com/github/Codibre/jest-stub-super-constructor/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/f8fac3165c1c05b9b6a8/maintainability)](https://codeclimate.com/github/Codibre/jest-stub-super-constructor/maintainability)
[![Packages](https://david-dm.org/Codibre/jest-stub-super-constructor.svg)](https://david-dm.org/Codibre/jest-stub-super-constructor)
[![npm version](https://badge.fury.io/js/jest-stub-super-constructor.svg)](https://badge.fury.io/js/jest-stub-super-constructor)

Easily stub the super call from a constructor using jest

# Usage

Just use it passing the class you want to stub the super on the constructor, like this:

```ts
  const superStub = stubSuperConstructor(MyClass);
```

And use the **superStub** the way you're used to, as with any other spy.

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
