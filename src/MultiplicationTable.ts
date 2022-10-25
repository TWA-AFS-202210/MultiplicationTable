export class MultiplicationTable {
  public render(start: number, end: number): string{
    if(!this.isValidInputs(start,end)){
      return ""
    }
    else{
      const multiTable = this.generateMultable(start,end);
      return multiTable;
    }
  }
  isValidInputs(start:number,end:number):boolean{
    if(!this.isValidRange(start,end)||!this.isInputsInteger(start,end)){
      return false
    }
    else{
      return true
    }

  }
  isValidRange(start:number,end:number):boolean{
    const isValidStart = start<=10&&start>=0;
    const isValidEnd = end<=10&&start>=0;
    return isValidEnd&&isValidStart&&(start<=end);
  }
  isInputsInteger(start:number,end:number):boolean{
    return Number.isInteger(start)&&Number.isInteger(end);
  }
  generateMultable(start:number,end:number):string{
    let res = "";
    for(let i = start;i<=end;i++){
      res = i===end?res+this.generateRowString(start,i):res+this.generateRowString(start,i)+"\n"
    }
    return res;
  }
  generateRowString(rowStart:number,rowEnd:number):string{
    let rowRes = "";
    for(let j = rowStart;j<=rowEnd;j++){
      rowRes =j===rowEnd? rowRes+this.generateCellString(j,rowEnd):rowRes+this.generateCellString(j,rowEnd)+"  "
    }
    return rowRes;
  }
  generateCellString(multiLeft:number,multiRight:number){
    const cellRes = multiLeft
    return `${multiLeft}*${multiRight}=${multiLeft*multiRight}`
  }
}
