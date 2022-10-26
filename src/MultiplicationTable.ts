export class MultiplicationTable {
  public render(start: number, end: number): string{
    if ((this.isStartNoGreaterThanEnd(start, end)) && (this.isRangeCorrect(start,end)))
    {
      return this.multiplicationTableConstructor(start,end);
    }
    return '';
  }

  isStartNoGreaterThanEnd(start: number, end: number): boolean {
    if (start <= end) return true;
    else return false;
  }

  isRangeCorrect(start: number, end: number): boolean{
    if (((start <= 10) && (end <= 10)) && ((start >= 1) && (end >= 1))) return true;
    else return false;
  }

  multiplicationTableConstructor(start: number, end: number): string{
    var multiplicationtable = new Array();
    
    for (var i=start; i<=end; i++)
    {
      var temp = new Array();
      var sttemp = ''
      for (var j=start; j<=i; j++){
        temp.push(String(j) + '*' + String(i) + '=' + String(i*j));
      }
      
      sttemp = temp.join('  ')
      multiplicationtable.push(sttemp);
    }
    return multiplicationtable.join('\n');
  }
}


