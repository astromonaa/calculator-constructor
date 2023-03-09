import { calcActions } from "../store/calculatorSlice";
import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import { canvasActions } from '../store/canvasSlice';

const actions = {
  ...calcActions,
  ...canvasActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}