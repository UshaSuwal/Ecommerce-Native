import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [],
};

const ApiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    fetchApiData(state, action) {
      
        
        state.results.push(action.payload);
      
    },
    
  },
});

export const { fetchApiData} = ApiSlice.actions;
export default ApiSlice.reducer;
