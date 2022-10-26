export class MultiplicationTable {
  public render(start: number, end: number): string {
    return !this.isValidInputs(start, end) ? "" : this.generateMultable(start, end);
  }
  isValidInputs(start: number, end: number): boolean {
    return (!this.isValidRange(start, end) || !this.isInputsInteger(start, end))?false:true;
  }
  isValidRange(start: number, end: number): boolean {
    return this.isWithinRange(start) && this.isWithinRange(end) && (start <= end);
  }
  isWithinRange(input:number){
    return input<=10&&input>=0;
  }
  isInputsInteger(start: number, end: number): boolean {
    return Number.isInteger(start) && Number.isInteger(end);
  }
  generateMultable(start: number, end: number): string {
    const rowIndex = Array.from(Array(end - start + 1).keys()).map(x => x + start);
    const rowStrings = rowIndex.map(i=>this.generateRowString(start,i));
    let res = rowStrings.join('\n');
    return res;
  }
  generateRowString(rowStart: number, rowEnd: number): string {
    const colIndex = Array.from(Array(rowEnd - rowStart + 1).keys()).map(x => x + rowStart);
    const cellStrings = colIndex.map(j=>this.generateCellString(j, rowEnd));
    let rowRes = cellStrings.join('  ');
    return rowRes;
  }
  generateCellString(multiLeft: number, multiRight: number) {
    return `${multiLeft}*${multiRight}=${multiLeft * multiRight}`
  }
}
