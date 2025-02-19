import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'


const sharIdSlice=createSlice(
    {
        name: 'Id',
        initialState:{
            id:null
        },
        reducers:{
            getTourId:(state,action)=>{
                state.id=action.payload
            }
        }
    }
)

export const {getTourId}=sharIdSlice.actions;
export default sharIdSlice.reducer
