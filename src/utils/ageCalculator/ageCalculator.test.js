import { test, expect } from 'vitest'
import { ageCalculator } from './ageCalculator'

const dateTest = new Date(2023, 10, 4)

test('Deveria retornar los dias los meses y años que pasa desde una fecha dada por el usuaio', () => {
  const dateUser = [2000, 5, 15]
  const result = ageCalculator(dateUser, dateTest)
  expect(result).toEqual([23, 5, 20])
})

test('Deveria de retornar estos datos [13, 9, 25 ] desde la fecha [2023, 10, 5]', () => {
  const dateUser = [2010, 1, 10]
  const result = ageCalculator(dateUser, dateTest)
  expect(result).toEqual([13, 9, 25])
})

test('Deveria de retornar estos datos [8, 5, 30 ] desde la fecha [2023, 10, 5]', () => {
  const dateUser = [2015, 5, 5]
  const result = ageCalculator(dateUser, dateTest)
  expect(result).toEqual([8, 5, 30])
})

test('Deveria de retornar estos datos [17,10, 15] desde la fecha [2023, 10, 5]', () => {
  const dateUser = [2005, 12, 20]
  const result = ageCalculator(dateUser, dateTest)
  expect(result).toEqual([17, 10, 15])
})

test('Deveria de retornar estos datos [1, 2, 1] desde la fecha [2023, 10, 5]', () => {
  const dateUser = [2022, 9, 3]
  const result = ageCalculator(dateUser, dateTest)
  expect(result).toEqual([1, 2, 1])
})

test('Deveria de retornar estos datos [5, 0, 3] desde la fecha [2023, 10, 5]', () => {
  const dateUser = [2018, 11, 1]
  const result = ageCalculator(dateUser, dateTest)
  expect(result).toEqual([5, 0, 3])
})