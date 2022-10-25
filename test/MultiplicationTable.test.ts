import {createRow,createTable,multiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const start = 1
    const end = 1

    //when
    const rendered = multiplicationTable(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })
})
describe('Create a line', () => {
  it('With 2 to 4 equal 2*4=8  3*4=12  4*4=16', () => {
    const line:string = createRow(2,4)
    expect(line).toBe('2*4=8  3*4=12  4*4=16')
  })
})

describe('Create a Table', () => {
  it('With 2 to 4 equal the given table', () => {
    const table:string = createTable(2,4)
    expect(table).toBe(`2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16`)
  }),
  it('With 2 to 2 equal the 2*2=4', () => {
    const table:string = createTable(2,2)
    expect(table).toBe('2*2=4')
  })
})

