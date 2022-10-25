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

describe('Multiplication Table', () => {
  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    const expectResult = '2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16'
    expect(rendered).toBe(expectResult)
  })
})

describe('Multiplication Table', () => {
  it('should render multiplication table of (2, 11)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 11

    //when
    const rendered = table.render(start, end)

    //then
    const expectResult = ''
    expect(rendered).toBe(expectResult)
  })
})

describe('Multiplication Table', () => {
  it('should render multiplication table of (6, 5)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 6
    const end = 5

    //when
    const rendered = table.render(start, end)

    //then
    const expectResult = ''
    expect(rendered).toBe(expectResult)
  })
})