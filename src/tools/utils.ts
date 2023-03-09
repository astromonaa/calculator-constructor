export function getResult(prevOperation:string, firstOperand:string,  secondOperand:string) {
  

  let result;
  const {first, second} = getClearParts(firstOperand, secondOperand)
  
  if (prevOperation === '/') {
    result = second === '0'
    ? "Ошибка"
    : (+first / +second).toString()
  }else if (prevOperation === 'х') {
    result = (+first * +second).toString()
  }else if (prevOperation === '-') {
    result = (+first - +second).toString()
  }else {
    result = (+first + +second).toString()
  }
  return result
}

export function lastIsNotComma(displayValue:string) {
  return displayValue[displayValue.length - 1] !== ','
}

export function numberIsDecimal(displayValue:string) {
  console.log(displayValue.match(/\.|\,/g));
  
  return displayValue.match(/\.|\,/g)
}


function getClearParts(firstOperand:string, secondOperand:string) {
  const first = firstOperand.replace(/\,/g, '.')
  const second = secondOperand.replace(/\,/g, '.')

  return {
    first, second
  }
}