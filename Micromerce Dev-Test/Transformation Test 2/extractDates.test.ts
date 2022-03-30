import extractDates from './extractDates'

describe('extractDates', () => {
  test('should return array of dates', () => {
    // given
    const customer = []
    // when
    const result = extractDates(customer)
    // then
    expect(result).toBe([])
  })
})
