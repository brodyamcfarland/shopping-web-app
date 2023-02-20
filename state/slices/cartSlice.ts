import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
     value: number;
}

const initialState: CounterState = {
     value: 0,
};

const maxQuantity = 99;

export const cartSlice = createSlice({
     name: "cartCounter",
     initialState,
     reducers: {
          increment: (state) => {
               if (state.value <= 99) {
                    if (state.value === 99) {
                         return;
                    } else {
                         state.value += 1;
                    }
               }
          },
          decrement: (state) => {
               if (state.value === 0) {
                    return;
               } else {
                    state.value -= 1;
               }
          },
          incrementByAmount: (state, action: PayloadAction<number>) => {
               if (state.value + action.payload > 99) {
                    return;
               } else {
                    state.value += action.payload;
               }
          },
     },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
