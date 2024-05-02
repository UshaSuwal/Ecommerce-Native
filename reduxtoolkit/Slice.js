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
        const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);
      
        if (existingItemIndex !== -1) {
          const existingItem = state.cartItems[existingItemIndex];
          const newQuantity = (action.payload.quantity || 1) + existingItem.quantity;
          
          if (newQuantity > existingItem.stock) {
            return;
          } else {
            state.cartItems[existingItemIndex].quantity = newQuantity;
          }
        
        }else {
        (action.payload.quantity)? state.cartItems.push({...newItem, quantity: action.payload.quantity}) : state.cartItems.push({...newItem, quantity: 1});
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






