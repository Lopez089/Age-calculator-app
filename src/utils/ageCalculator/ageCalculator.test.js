import { test, expect } from 'vitest'
import { ageCalculator } from './ageCalculator'

test('Deveria retornar los dias los meses y años que pasa desde una fecha dada por el usuaio', () => {
  const DateUser = new Date(2000, 10, 5)
  console.log("🚀 ~ file: ageCalculator.test.js:6 ~ test ~ DateUser:", DateUser)
})