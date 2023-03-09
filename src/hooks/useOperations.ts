import { useState } from 'react';
import { useActions } from './actions';
import { useAppSelector } from './hooks';
import { getResult } from '../tools/utils';

interface IOperation {
  id: number;
  type: string;
  sign: string;
}

export function useOperations() {
  const { setDisplayValue, setPrevOperation, set1stOperand, setEqualPressed} = useActions()
  let {displayValue, prevOperation, isDragable, firstOperand, equalPressed} = useAppSelector(state => state.calculator)

  const [operations, setOperations] = useState<IOperation[]>([
    {id: 1, type: 'division', sign: '/'},
    {id: 2, type: 'multiplication', sign: 'х'},
    {id: 3, type: 'minus', sign: '-'},
    {id: 4, type: 'plus', sign: '+'},
  ])

  function onClick(operation: string) {
    if(isDragable) {
      return
    }
    displayValue = displayValue === 'Ошибка' ? '0' : displayValue
    if (equalPressed) {
      setPrevOperation(operation)
      set1stOperand(displayValue)
      setDisplayValue(displayValue)
      return
    }
    if (!prevOperation) {
      setPrevOperation(operation)
      set1stOperand(displayValue)
      setEqualPressed(true)
      return
    }
    const result = getResult(prevOperation, firstOperand, displayValue)
    if (result === 'Ошибка') {
      setDisplayValue(result)
      setPrevOperation('')
    }else {
      setDisplayValue(Number(result).toFixed(2))
      setPrevOperation(operation)
      setEqualPressed(true)
    }
  }

  return {
    operations,
    onClick
  }
}
