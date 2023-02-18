import { configureStore } from "@reduxjs/toolkit";
import cartCountingReducer from "../state/slices/cartSlice";

export const store = configureStore({
     reducer: {
          cartCounter: cartCountingReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
