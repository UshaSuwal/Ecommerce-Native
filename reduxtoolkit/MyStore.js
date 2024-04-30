import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Slice';
import apiReducer from './ApiSlice';
import ApiSlice from './ApiSlice';
const MyStore=configureStore({
    reducer:{
        cart: cartReducer,
        results: ApiSlice,
    },
});
export default MyStore;