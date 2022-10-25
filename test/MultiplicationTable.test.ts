import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable();
    const start = 2;
    const end = 4;

    //when
    const rendered = table.render(start, end);

    //then
    expect(rendered).toBe(`2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16`)
  })
  it('should not render multiplication table of (4, 2)', () => {
    // given
    const table = new MultiplicationTable();
    const start = 4;
    const end = 2;

    //when
    const rendered = table.render(start, end);


    //then
    expect(rendered.length).toBe(0);
  })
  
})
