[![Actions Status](https://github.com/Codibre/jest-super-stub-contructor/workflows/build/badge.svg)](https://github.com/Codibre/jest-super-stub-contructor/actions)
[![Actions Status](https://github.com/Codibre/jest-super-stub-contructor/workflows/test/badge.svg)](https://github.com/Codibre/jest-super-stub-contructor/actions)
[![Actions Status](https://github.com/Codibre/jest-super-stub-contructor/workflows/lint/badge.svg)](https://github.com/Codibre/jest-super-stub-contructor/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/jest-super-stub-contructor/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/jest-super-stub-contructor/maintainability)
[![Packages](https://david-dm.org/Codibre/jest-super-stub-contructor.svg)](https://david-dm.org/Codibre/jest-super-stub-contructor)
[![npm version](https://badge.fury.io/js/%40codibre%2Fjest-super-stub-contructor.svg)](https://badge.fury.io/js/%40codibre%2Fjest-super-stub-contructor)

Easily stub the super call from a constructor using jest

# Usage

Just use it passing the class you want to stub the super on the constructor, like this:

```ts
  const superStub = stubSuperConstructor(MyClass);
```

And use the **superStub** the way you're used to, with any other spy.

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
