import { booleanToWord } from '../src'

describe('booleanToWord', () => {
  it('returns yes when true', () => {
    expect(booleanToWord(true)).toBe('Yes')
  })

  it('returns no when false', () => {
    expect(booleanToWord(false)).toBe('No')
  })
})

  
