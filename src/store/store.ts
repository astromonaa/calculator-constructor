import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { calcReducer } from './calculatorSlice';
import { canvasReducer } from './canvasSlice';

export const store = configureStore({
  reducer: {
    calculator: calcReducer,
    canvas: canvasReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>