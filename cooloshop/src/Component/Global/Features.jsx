import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    Allproducts: [],
    cart: [],
    Allcategories: [],
    
};


const Features = createSlice({
    name: "product",
    initialState,
    reducers: {
        GetAllProduct: (state, {payload})=>{
            state.Allproducts = payload
            console.log(payload);
        },

        AddToCart: (state, {payload})=> {
            const items = {...payload}
            state.cart.push(items)
            console.log(payload)
        },

        Remove: (state, {payload})=> {
            const remove = state.cart.filter((e)=> e.id !== payload.id)
            state.cart = remove
        },

        GetAllcategories: (state, {payload}) => {
            state.Allcategories = payload
            console.log(payload);
        },

    },
})

export const {GetAllProduct, AddToCart, Remove, GetAllcategories} = Features.actions;
export default Features.reducer;