import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Slice';
const MyStore=configureStore({
    reducer:{
        cart: cartReducer,
    },
});
export default MyStore;