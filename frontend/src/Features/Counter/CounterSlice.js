import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth:false,
  firstChar:''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    changeAuthTrue: (state,action) => {
        // console.log("payload data is..",action);
      state.auth = action.payload.authe
      state.firstChar = action.payload.firstChar;
      
    }

  },
})

export const { changeAuthTrue } = counterSlice.actions

export default counterSlice.reducer