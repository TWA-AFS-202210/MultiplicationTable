export class MultiplicationTable {

  public render(start: number, end: number): string{
    let isValid = this.isLegalRange(start, end)
    if(!isValid){
      return 'the input data is not valid!'
    }
    var multiplicationTable:Array<string> = []
    for(let i = start; i <= end; i++) {
      let resultString = this.multiplicationLineGenerator(start, i)
      multiplicationTable.push(resultString)
    }
    return multiplicationTable.toString()
  }
  
  public isLegalRange(start: number, end: number): boolean{
    if(start > end || start < 1 || end > 10) {
      return false
    }
    else {
      return true
    }
  }

  public multiplicationLineGenerator(start: number, end: number): string {
    var stringLine:Array<string> = []
    for(let i = start; i <= end; i++) {
      let result = i * end
      let stringResult = this.resultDecorator(i, end, result)
      stringLine.push(stringResult)
    }
    stringLine.push('\n')
    
    return stringLine.toString()
  }

  public resultDecorator(start: number, end: number, result: number): string{
    return start + '*' + end + '=' + result
  }
}
