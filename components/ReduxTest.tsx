import { decrement, increment } from "../state/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../state/store";

const cartCount = useSelector((state: RootState) => state.cartCounter.value);
const dispatch = useDispatch();

const ReduxTest = () => {
     return (
          <div>
               <button
                    onClick={() => dispatch(increment())}
                    className="p-2 border"
               >
                    Add to Cart
               </button>
               <button
                    onClick={() => dispatch(decrement())}
                    className="p-2 border"
               >
                    Delete from Cart
               </button>
               <p>Count = {cartCount}</p>
               <a href="/checkout">Go to Checkout</a>
          </div>
     );
};

export default ReduxTest;
