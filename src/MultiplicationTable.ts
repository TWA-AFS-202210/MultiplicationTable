export class MultiplicationTable {
  public render(start: number, end: number): string {
    return !this.isValidInputs(start, end) ? "" : this.generateMultable(start, end);
  }
  isValidInputs(start: number, end: number): boolean {
    return (!this.isValidRange(start, end) || !this.isInputsInteger(start, end))?false:true;
  }
  isValidRange(start: number, end: number): boolean {
    const isValidStart = start <= 10 && start >= 0;
    const isValidEnd = end <= 10 && start >= 0;
    return isValidEnd && isValidStart && (start <= end);
  }
  isInputsInteger(start: number, end: number): boolean {
    return Number.isInteger(start) && Number.isInteger(end);
  }
  generateMultable(start: number, end: number): string {
    let res = "";
    const rowIndex = Array.from(Array(end - start + 1).keys()).map(x => x + start);
    rowIndex.forEach(i => { res += i === end ? this.generateRowString(start, i) : this.generateRowString(start, i) + "\n" });
    return res;
  }
  generateRowString(rowStart: number, rowEnd: number): string {
    let rowRes = "";
    const colIndex = Array.from(Array(rowEnd - rowStart + 1).keys()).map(x => x + rowStart);
    colIndex.forEach(j => { rowRes += j === rowEnd ? this.generateCellString(j, rowEnd) : this.generateCellString(j, rowEnd) + "  " })
    return rowRes;
  }
  generateCellString(multiLeft: number, multiRight: number) {
    return `${multiLeft}*${multiRight}=${multiLeft * multiRight}`
  }
}
