import { calculate } from '../utils'

describe('calculate', () => {
  test('sum', () => {
     expect(calculate('5+5')).toEqual(10)
  })
})