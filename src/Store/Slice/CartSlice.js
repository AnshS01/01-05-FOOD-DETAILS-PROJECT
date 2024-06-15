import { createSlice } from "@reduxjs/toolkit"

    const item = localStorage.getItem('cartItem') !== null ? JSON.parse(localStorage.getItem('cartItem')) : []
    const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0
    const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0

    const setItem = ( item, totalQuantity , totalAmount ) => {
        localStorage.setItem('cartItem',JSON.stringify(item))
        localStorage.setItem('totalQuantity',JSON.stringify(totalQuantity))
        localStorage.setItem('totalAmount',JSON.stringify(totalAmount))
    }

const initialState = {
    cartItem: item,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem(state, action) {

            const newItems = action.payload;

            const existingItem = state.cartItem.find(item => item.id === newItems.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.cartItem.push({
                    id: newItems.id,
                    title: newItems.title,
                    image01: newItems.image01,
                    price: newItems.price,
                    totalPrice : newItems.price,
                    quantity : 1,
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItems.price);
            }

            state.totalAmount = state.cartItem.reduce((total,item) =>total+  Number(item.price) * Number(item.quantity),0);

            setItem(
                state.cartItem.map((item) => item),
                state.totalQuantity,
                state.totalAmount
            )
        },
        removeItem(state, action) {

            const id = action.payload;

            const existingItem = state.cartItem.find(item => item.id === id);
            state.totalQuantity--;
            
            if (existingItem.quantity === 1) {
                state.cartItem = state.cartItem.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItem.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)

            setItem(
                state.cartItem.map((item) => item),
                state.totalQuantity,
                state.totalAmount
            )
        },
        deleteItem(state, action) {

            const id = action.payload;

            const existingItem = state.cartItem.find(item => item.id === id)


            if(existingItem){
                state.cartItem = state.cartItem.filter(item => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalAmount = state.cartItem.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)

            setItem(
                state.cartItem.map((item) => item),
                state.totalQuantity,
                state.totalAmount
            )
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice;
