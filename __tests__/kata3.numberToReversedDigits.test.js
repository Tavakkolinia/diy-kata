import { numberToReversedDigits } from '../src'

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(4639)).toEqual([9, 3, 6, 4])
    expect(numberToReversedDigits(79106)).toEqual([6, 0, 1, 9, 7])
    expect(numberToReversedDigits(804510)).toEqual([0, 1, 5, 4, 0, 8])
    
  })
})
