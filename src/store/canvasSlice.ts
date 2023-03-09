import { createSlice } from '@reduxjs/toolkit';

interface ICanvasState {
  dropElements: string[];
  currentElement: string;
}

const initialState:ICanvasState = {
  dropElements: [],
  currentElement: '',
}

const canvasSlice = createSlice({
  name: 'canvasSlice',
  initialState,
  reducers: {
    setDropElements: (state, action) => {
      state.dropElements = action.payload.sort((a:string, b:string) => +a - +b)
    },
    setCurrent: (state, action) => {
      state.currentElement = action.payload
    }
  }
})

export const canvasReducer = canvasSlice.reducer;
export const canvasActions = canvasSlice.actions;