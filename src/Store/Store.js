import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";
import CartSliceUI from "./Slice/CartSliceUi";


const store = configureStore({
    reducer:{
        Cart: cartSlice.reducer,
        CartUi: CartSliceUI.reducer
    }
})
export default store;
