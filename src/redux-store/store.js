import { configureStore } from '@reduxjs/toolkit'
import viewTypeMainReduscer from "./redusers/view-type-for-main"
import dataReducer from './redusers/data'

export const store = configureStore({
  reducer: {
    viewTypeMain: viewTypeMainReduscer,
     dataReducer: dataReducer
  },
})