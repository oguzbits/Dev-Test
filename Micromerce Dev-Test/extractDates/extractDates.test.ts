import extractDates from './extractDates'

describe('extractDates', () => {
  test('should return empty list', () => {
    // given
    const customer = {}
    // when
    const result = extractDates(customer)
    // then
    expect(result).toBe([])
  })
})
