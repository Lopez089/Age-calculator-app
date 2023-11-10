import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Carculator } from './carculator'
import '@testing-library/jest-dom'

test.skip('It should show a separator bar', () => {
  const componet = render(<Carculator />)


  expect(componet).toContainHTML(<hr></hr>)
})