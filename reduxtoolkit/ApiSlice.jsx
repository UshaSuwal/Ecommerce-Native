import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ApiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    fetchApiData(state, action) {
      
        
        state.push(action.payload);
      
    },
    
  },
});

export const { fetchApiData} = ApiSlice.actions;
export default ApiSlice.reducer;
