import { calculate } from '../utils'

describe('calculate', () => {
   test('sum', () => {
      expect(calculate('5+5')).toEqual(10)
   })

   test('division', () => {
      expect(calculate('20/5')).toEqual(4)
   })

   test('multiplication', () => {
      expect(calculate('20*5')).toEqual(100)
   })

   test('subtracted', () => {
      expect(calculate('20-5')).toEqual(15)
   })

   test('complicated', () => {
      expect(calculate('20-5*10+150/50')).toEqual(6)
   })

   test('sqrt', () => {
      expect(calculate('16√')).toEqual(4)
   })
})