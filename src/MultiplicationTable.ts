export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
  }
}

export function isValid(start: number, end: number): boolean {
  return isInRange(start, end) && isStartEqualOrLessThanEnd(start, end)
}

export function isInRange(start: number, end: number): boolean {
  return (start <= 10) && (start >= 1) && (end <= 10) && (end >= 1)
}

export function isStartEqualOrLessThanEnd(start: number, end: number): boolean {
  return start <= end
}

export function generateLine(start: number, end: number): string {
  var line = ''
  for (let index = start; index <= end; index++) {
    line += index + '*' + end + '='  + index * end + '  '
  }
  return line.trim()
}