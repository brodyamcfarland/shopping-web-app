import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Items } from "../../types";
interface CounterState {
     items: Items[];
}

const initialState: CounterState = {
     items: [],
};

const maxQuantity = 99;

export const cartSlice = createSlice({
     name: "cartCounter",
     initialState,
     reducers: {
          increment: (state) => {
               if (state.items.length <= maxQuantity) {
                    if (state.items.length === maxQuantity) {
                         return;
                    } else {
                         state.items.length += 1;
                    }
               }
          },
          decrement: (state) => {
               if (state.items.length === 0) {
                    return;
               } else {
                    state.items.length -= 1;
               }
          },
          incrementByAmount: (state, action: PayloadAction<number>) => {
               if (state.items.length + action.payload > maxQuantity) {
                    return;
               } else {
                    state.items.length += action.payload;
               }
          },
          addToBasket: (state, action: PayloadAction<Items>) => {
               if (state.items.length <= maxQuantity) {
                    if (state.items.length === maxQuantity) {
                         console.log(
                              "Cannot Add to Basket -- Max Quanitity Reached"
                         );
                         return;
                    } else {
                         state.items = [...state.items, action.payload];
                    }
               }
          }, //ready to test
          addToBasketByAmount: (state, action: PayloadAction<Items>) => {
               let newArray = [...state.items, action.payload];
               if (newArray.length >= maxQuantity) {
                    console.log(
                         "Cannot Add to Basket -- Max Quanitity Reached"
                    );
                    return;
               } else {
                    state.items = newArray;
               }
          }, // ready to test
          removeFromBasket: (state, action: PayloadAction<any>) => {
               const index = state.items.findIndex(
                    (cartItem) => cartItem.id === action.payload.id
               );

               let newCart = [...state.items];

               if (index >= 0) {
                    newCart.splice(index, 1);
               } else {
                    console.warn(
                         `Cannot Remove Product (id: ${action.payload.id}) as its not in the cart`
                    );
               }

               state.items = newCart;
          }, // I think ready to test
     },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
