import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Items } from "../../types";
interface CartState {
     items: Items[];
     totalQuantity: number;
     totalPrice: number;
}

const initialState: CartState = {
     items: [],
     totalQuantity: 0,
     totalPrice: 0,
};

const maxQuantity = 99;

export const cartSlice = createSlice({
     name: "cartCounter",
     initialState,
     reducers: {
          incrementQuantity: (state, action: PayloadAction<number>) => {
               const itemId = action.payload;
               const existingItem = state.items.find(
                    (item) => item.id === itemId
               );
               if (existingItem) {
                    existingItem.quantity++;
                    state.totalQuantity++;
                    state.totalPrice += existingItem.price;
               }
          },
          addToCartByAmount: (state, action: PayloadAction<Items>) => {
               let itemToAdd = action.payload;
               let existingItem = state.items.find(
                    (item) => item.id === itemToAdd.id
               );
               if (existingItem) {
                    // If the item already exists, check if it hits our maxQuantity constraint and then update its quantity by adding the new quantity amount
                    if (
                         existingItem.quantity + itemToAdd.quantity >
                         maxQuantity
                    ) {
                         console.log("Maximum Quantity Reached for this item.");
                         return;
                    } else {
                         existingItem.quantity += itemToAdd.quantity;
                         state.totalQuantity += itemToAdd.quantity;
                         state.totalPrice +=
                              itemToAdd.price * itemToAdd.quantity;
                    }
               } else {
                    // If the item doesn't exist, add it to the cart with a quantity of whatever was set
                    let newArray = [...state.items, action.payload];
                    state.items = newArray;
                    state.totalQuantity += itemToAdd.quantity;
                    state.totalPrice += itemToAdd.price * itemToAdd.quantity;
               }
          }, // ready to test
          removeFromCart: (state, action: PayloadAction<number>) => {
               const id = action.payload;
               const existingItem = state.items.find((item) => item.id === id);
               if (existingItem) {
                    // If the item exists, reduce its quantity by 1
                    existingItem.quantity--;
                    state.totalQuantity--;
                    state.totalPrice -= existingItem.price;

                    // If the item's quantity is now 0, remove it from the cart
                    if (existingItem.quantity === 0) {
                         state.items = state.items.filter(
                              (item) => item.id !== id
                         );
                    }
               }
          },
     },
});

// Action creators are generated for each case reducer function
export const { addToCartByAmount, removeFromCart, incrementQuantity } =
     cartSlice.actions;

export default cartSlice.reducer;
