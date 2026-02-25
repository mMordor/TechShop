import { createSlice } from "@reduxjs/toolkit";
import type { Icart } from "../../types";

const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") as string) : null
let initailState : Icart[] ;

if(cart){
    initailState = cart
}else{
    initailState = [];
}

export const cartReducer = createSlice({
    name: "cart",
    initialState : initailState,
    reducers:{
        addToCart(state : Icart[] , action){
            const finded = state.find((item=>item.product.id == action.payload.id))
            if(finded){
                finded.quantity += 1;
            }else{
                state.push({product:action.payload , quantity: 1})
            }
            
        },
        decraceQuantity(state : Icart[], action){
            
            const finded = state.find((item=>item.product.id == action.payload.id))
            
            if(finded){
                if(finded.quantity > 1){

                    finded.quantity -=1 ;
                }else{
                    const index = state.findIndex((item=>item.product.id == action.payload.id))
                    state.splice(index,1)
                }
            }
            localStorage.setItem("cart",JSON.stringify(state))
        }
    }
})

export const cartActions = cartReducer.actions

