import { configureStore } from '@reduxjs/toolkit'
import sharIdSlice from './shareId'

export const store = configureStore({
    reducer: {
        Id: sharIdSlice
    },
  })
  