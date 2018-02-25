import { humanCatDogYears } from '../src'

describe('humanCatDogYear', () => {
  it('returns array of human, cat and dog years when passed human', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    expect(humanCatDogYears(25)).toEqual([25, 116, 139])
    expect(humanCatDogYears(13)).toEqual([13, 68, 79])
  })
})  
