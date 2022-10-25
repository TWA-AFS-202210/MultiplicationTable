import {MultiplicationTable} from '../src/MultiplicationTable'
import {isValid} from '../src/MultiplicationTable'
import {generateLine} from '../src/MultiplicationTable'

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

it('should return true given start and end: 2, 4', () => {
  // given
  const start = 2
  const end = 4

  // when
  const actual: string = generateLine(start, end)

  // then
  const expectResult = '2*4=8  3*4=12  4*4=16'
  expect(actual).toBe(expectResult)
})