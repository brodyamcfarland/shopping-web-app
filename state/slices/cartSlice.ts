import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Items } from "../../types";
interface CartState {
     items: Items[];
     totalQuantity: number;
     totalPrice: number;
     saleAmount: number;
}

const initialState: CartState = {
     items: [],
     totalQuantity: 0,
     totalPrice: 0,
     saleAmount: 0,
};

const maxQuantity = 99;

export const cartSlice = createSlice({
     name: "cartCounter",
     initialState,
     reducers: {
          incrementQuantity: (state, action: PayloadAction<number>) => {
               if (state.totalQuantity + 1 > maxQuantity) {
                    console.log("Maximum Quantity Reached for this item.");
                    return;
               }
               const itemId = action.payload;
               const existingItem = state.items.find(
                    (item) => item.id === itemId
               );
               if (existingItem) {
                    existingItem.quantity++;
                    state.totalQuantity++;
                    if (existingItem.category === "electronics") {
                         state.totalPrice += existingItem.price * 0.8; // Adds the price after 20% discount to totalPrice
                         state.saleAmount += existingItem.price * 0.2; // Adds the discount to the saleAmount
                    } else {
                         state.totalPrice += existingItem.price;
                    }
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
                         state.totalQuantity + itemToAdd.quantity >
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
                    if (state.totalQuantity + itemToAdd.quantity > 99) {
                         console.log("Maximum Quantity Reached for this item.");
                         return;
                    }
                    // If the item doesn't exist, add it to the cart with a quantity of whatever was set
                    let newArray = [...state.items, action.payload];
                    state.items = newArray;
                    state.totalQuantity += itemToAdd.quantity;
                    if (itemToAdd.category === "electronics") {
                         state.totalPrice +=
                              itemToAdd.price * 0.8 * itemToAdd.quantity;
                         state.saleAmount +=
                              itemToAdd.price * 0.2 * itemToAdd.quantity;
                    } else {
                         state.totalPrice +=
                              itemToAdd.price * itemToAdd.quantity;
                    }
               }
          }, // ready to test
          removeFromCart: (state, action: PayloadAction<number>) => {
               const id = action.payload;
               const existingItem = state.items.find((item) => item.id === id);
               if (existingItem) {
                    // If the item exists, reduce its quantity by 1
                    existingItem.quantity--;
                    state.totalQuantity--;
                    if (existingItem.category === "electronics") {
                         state.totalPrice -= existingItem.price * 0.8;
                         state.saleAmount -= existingItem.price * 0.2;
                    } else {
                         state.totalPrice -= existingItem.price;
                    }

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
