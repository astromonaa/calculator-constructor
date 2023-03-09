import { createSlice } from '@reduxjs/toolkit'

interface IState {
  displayValue: string;
  prevOperation: string;
  equalPressed: boolean;
  isDragable: boolean;
  firstOperand: string;
  isNextOperandPrint: boolean;
}

const initialState: IState = {
  displayValue: '0',
  prevOperation: '',
  equalPressed: false,
  isDragable: true,
  firstOperand: '',
  isNextOperandPrint: false
}

const calculatorSlice = createSlice({
  name: 'calculatorSlice',
  initialState,
  reducers: {
    changeDisplayValue: (state, action) => {
      if (state.isNextOperandPrint) {
        state.displayValue = action.payload
        state.isNextOperandPrint = false
      }else if (state.displayValue === '0' || state.displayValue === 'Ошибка' || state.equalPressed) {
        state.displayValue = action.payload
      } else {
        state.displayValue += action.payload
      }
      state.equalPressed = false;
    },
    setDisplayValue: (state, action) => {
      state.displayValue = action.payload
      state.firstOperand = action.payload
    },
    setPrevOperation: (state, action) => {
      state.prevOperation = action.payload
    },
    setEqualPressed: (state, action) => {
      state.equalPressed = action.payload
    },
    setIsDragable: (state, action) => {
      state.isDragable = action.payload
    },
    set1stOperand: (state, action) => {
      state.firstOperand = action.payload
      state.isNextOperandPrint = true;
    },
  }
})

export const calcReducer = calculatorSlice.reducer;
export const calcActions = calculatorSlice.actions;
