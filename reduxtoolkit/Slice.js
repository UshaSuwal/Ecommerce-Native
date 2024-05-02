import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  favoriteItems: [],
  results: [],
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    fetchApiData(state, action) {
      state.results.push(action.payload);
    },

    
    addCartItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({...newItem, quantity: 1});
      }
    },
    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.description !== action.payload.description,
      );
    },

    addToFavorites(state, action) {
      const newItem = action.payload;
      const existingItem = state.favoriteItems.find(
        item => item.id === newItem.id,
      );

      if (!existingItem) {
        state.favoriteItems.push(newItem);
      }
    },
    removeFromFavorites(state, action) {
      state.favoriteItems = state.favoriteItems.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  addToFavorites,
  removeFromFavorites,
  fetchApiData,
} = slice.actions;
export default slice.reducer;
