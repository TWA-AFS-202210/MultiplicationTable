import {MultiplicationTable} from '../src/MultiplicationTable'
import {isValid} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })
})

it('should return true given start and end: 3, 5', () => {
  // given
  const start = 3
  const end = 5

  // when
  const actual: boolean = isValid(start, end)

  // then
  expect(actual).toBeTruthy()
})
