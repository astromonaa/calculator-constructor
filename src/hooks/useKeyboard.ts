import { useState } from 'react';
import { useActions } from './actions';
import { getResult } from '../tools/utils';
import { useAppSelector } from './hooks';
import {lastIsNotComma, numberIsDecimal} from '../tools/utils'

interface INumbers {
  id: number;
  number: string;
}

export function useKeyboard() {
  const {changeDisplayValue, setDisplayValue, setPrevOperation, setEqualPressed} = useActions()
  const {prevOperation, displayValue, isDragable, firstOperand, isNextOperandPrint, equalPressed} = useAppSelector(state => state.calculator)

  const [numbers, setNumbers] = useState<INumbers[]>([
    {id: 1, number: '7'},
    {id: 2, number: '8'},
    {id: 3, number: '9'},
    {id: 4, number: '4'},
    {id: 5, number: '5'},
    {id: 6, number: '6'},
    {id: 7, number: '1'},
    {id: 8, number: '2'},
    {id: 9, number: '3'},
    {id: 10, number: '0'},
    {id: 11, number: ','},
  ])

  function onClick(value:string) {
    if (isDragable) {
      return
    }
    if (value === '=') {
      if (!prevOperation) {
        return
      }
      if (equalPressed) {
        return 
      }
      let result = getResult(prevOperation, firstOperand, displayValue)
      if (result !== 'Ошибка') result = Number(result).toFixed(2)
      setDisplayValue(result)
      setPrevOperation('')
      setEqualPressed(true)
    }else {
      const handleValue = handleKeyValue(value)
      handleValue && changeDisplayValue(handleValue)
    }
  }

  
  function handleKeyValue(value:string) {
    if (value === ',' && (displayValue === '' || displayValue === '0' || isNextOperandPrint)) { // Если  нажата кнопка "," при наальном значении или сразу после оператора
      return '0,'
    }else if (value === ',' && (!lastIsNotComma(displayValue) || numberIsDecimal(displayValue))) { // Двойное нажатие на запятую
      return null
    }else {
      return value
    }
  }
  return {
    numbers,
    onClick
  }
}