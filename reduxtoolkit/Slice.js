import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);
        
      if (existingItem) {
        
        existingItem.quantity += 1;
      } else {
        
        state.push({ ...newItem, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      return state.filter((item, index) => item.description !== action.payload.description);
    },
  },
});

export const { addCartItem, removeCartItem } = Slice.actions;
export default Slice.reducer;
