import isInteresting, { isShouting, hasSpecialWord } from './isInteresting'

const cases = {
  shouting: [
    ['foo', false],
    ['foo bar', false],
    ['Foo', false],
    ['FOo', false],
    ['FOO', true],
    ['FOO bar', true],
    ['FOO!', true],
    ['!Foo', false],
    ['!FOO', true],
    ['Foo!', true],
    ['!', false]
  ],
  special: [
    ['foo', false],
    ['foo bar', false],
    ['oops bar', true],
    ['OOPS', true],
    ['OoPS', true]
  ]
}

describe('isShouting', () => test.each(cases.shouting)(
  '%s',
  (msg, expected) => expect(isShouting(msg)).toEqual(expected)
))

describe('hasSpecialWord', () => test.each(cases.special)(
  '%s',
  (msg, expected) => expect(hasSpecialWord(msg)).toEqual(expected)
))

describe('isInteresting', () => test.each([].concat(...Object.values(cases)))(
  '%s',
  (msg, expected) => expect(isInteresting(msg)).toEqual(expected)
))
