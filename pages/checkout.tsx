import Head from "next/head";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { clearCart } from "../state/slices/cartSlice";
import toast from "react-hot-toast";
import {
     CreditCardIcon,
     ExclamationCircleIcon,
     GlobeAmericasIcon,
     ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";
import Currency from "react-currency-formatter";

// This needs to be a protected Auth Route

const Checkout = () => {
     const [address, setAddress] = useState<string>("");
     const [addressError, setAddressError] = useState<boolean>(false);
     const [address2, setAddress2] = useState<string>("");
     const [address2Error, setAddress2Error] = useState<boolean>(false);
     const [city, setCity] = useState<string>("");
     const [cityError, setCityError] = useState<boolean>(false);
     const [state, setState] = useState<string>("");
     const [stateError, setStateError] = useState<boolean>(false);
     const [zipcode, setZipcode] = useState<number>();
     const [zipError, setZipError] = useState<boolean>(false);
     const [cardNumber, setCardNumber] = useState<number>();
     const [cardError, setCardError] = useState<boolean>(false);
     const [expDate, setExpDate] = useState<string>("");
     const [expError, setExpError] = useState<boolean>(false);
     const [cvc, setCvc] = useState<number>();
     const [cvcError, setCvcError] = useState<boolean>(false);
     const [cardName, setCardName] = useState<string>("");
     const [cardNameError, setCardNameError] = useState<boolean>(false);

     const router = useRouter();
     const dispatch = useDispatch();

     const cart = useSelector((state: RootState) => state.cartCounter.items);

     const totalPrice = useSelector(
          (state: RootState) => state.cartCounter.totalPrice
     );

     const totalQuantity = useSelector(
          (state: RootState) => state.cartCounter.totalQuantity
     );

     const { data: session } = useSession();

     const submitCheckout = async (e: React.FormEvent) => {
          e.preventDefault();
          if (cart.length === 0) {
               toast.error(
                    "Your Cart was emptied prior to checkout. Redirecting..."
               );
               router.push("/");
               return;
          }
          if (!address) {
               toast.error("Missing Address.");
               setAddressError(true);
               return;
          } else {
               setAddressError(false);
          }
          if (!city) {
               toast.error("Missing City.");
               setCityError(true);
               return;
          } else {
               setCityError(false);
          }
          if (state.length !== 2) {
               toast.error("Missing or incorrect State Code.");
               setStateError(true);
               return;
          } else {
               setStateError(false);
          }
          if (!state) {
               toast.error("Missing State.");
               setStateError(true);
               return;
          } else {
               setStateError(false);
          }
          if (!zipcode || zipcode?.toString().length !== 5) {
               toast.error("Missing or incorrect Zip Code.");
               setZipError(true);
               return;
          } else {
               setZipError(false);
          }
          if (!cardNumber || cardNumber?.toString().length !== 16) {
               toast.error("Missing or incorrect Card Number.");
               setCardError(true);
               return;
          } else {
               setCardError(false);
          }
          if (!expDate) {
               toast.error("Missing Expiration Date.");
               setExpError(true);
               return;
          } else {
               setExpError(false);
          }
          if (!cvc) {
               toast.error("Missing CVC number.");
               setCvcError(true);
               return;
          } else {
               setCvcError(false);
          }
          if (!cardName) {
               toast.error("Missing Cardholder Name.");
               setCardNameError(true);
               return;
          } else {
               setCardNameError(false);
          }

          let orderNumber =
               session?.user?.name?.slice(0, 4) + Date.now().toString();
          const purchasedItems = {
               orderId: orderNumber,
               quantity: totalQuantity,
               totalPrice: totalPrice,
               items: cart,
               orderedAt: serverTimestamp(),
               user: session?.user?.email,
          };
          console.log(purchasedItems);
          try {
               await setDoc(doc(db, "orders", orderNumber), purchasedItems);
          } catch (error) {
               console.error(error);
               console.log("didnt work");
          }
          dispatch(clearCart());
          toast.success("Checkout Successful. Thank you!");
          router.push("/orders");
     };

     const calculateShipping = (totalPrice: number) => {
          if (totalPrice < 200) {
               return 10;
          } else {
               return 0;
          }
     };

     const tax = totalPrice * 0.0725;
     const shipping = calculateShipping(totalPrice);
     return (
          <Layout>
               <Head>
                    <title>Get: Checkout</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg px-2">
                    {!session ? (
                         <div className="flex items-center justify-center">
                              <span className="pt-32">
                                   Please Sign in to continue
                              </span>
                         </div>
                    ) : (
                         <div className="flex flex-col mx-2 md:mx-auto my-4 border border-gray-600 bg-[#252525] max-w-4xl rounded-md">
                              <h2 className="py-2 border-b border-gray-600 font-bold bg-[#171717] rounded-t-md">
                                   Checkout
                              </h2>
                              <div className="flex flex-col border rounded-md border-gray-600 bg-[#171717] mx-2 md:mx-auto px-10 pt-2 pb-4 mt-2">
                                   <h3 className="font-bold pb-2 flex gap-2 items-center justify-center">
                                        <ShoppingCartIcon className="h-8 w-8" />
                                        <span>Cart Details</span>
                                   </h3>
                                   <div className="flex gap-2 text-sm">
                                        <label className="text-gray-400 uppercase">
                                             Items:
                                        </label>
                                        <span className="font-bold">
                                             {totalQuantity}
                                        </span>
                                   </div>
                                   <div className="flex gap-2 text-sm">
                                        <label className="text-gray-400 uppercase">
                                             Sub-total:
                                        </label>
                                        <span className="font-bold">
                                             <Currency quantity={totalPrice} />
                                        </span>
                                   </div>
                                   <div className="flex gap-2 text-sm">
                                        <label className="text-gray-400 uppercase">
                                             Tax:
                                        </label>
                                        <span className="font-bold">
                                             <Currency quantity={tax} />
                                        </span>
                                   </div>
                                   <div className="flex gap-2 text-sm">
                                        <label className="text-gray-400 uppercase">
                                             Shipping:
                                        </label>
                                        <span className="font-bold">
                                             {shipping === 0 ? (
                                                  <span className="text-green-500">
                                                       FREE
                                                  </span>
                                             ) : (
                                                  <Currency
                                                       quantity={shipping}
                                                  />
                                             )}
                                        </span>
                                   </div>
                                   <div className="flex gap-2 text-sm">
                                        <label className="text-gray-400 uppercase">
                                             Total Cost:
                                        </label>
                                        <span className="font-bold text-green-500">
                                             <Currency
                                                  quantity={
                                                       totalPrice +
                                                       tax +
                                                       shipping
                                                  }
                                             />
                                        </span>
                                   </div>
                              </div>
                              <form
                                   className="flex flex-col w-full gap-4 py-4 px-2 md:w-1/2 mx-auto justify-center"
                                   onSubmit={submitCheckout}
                              >
                                   <div className="flex flex-col border gap-1 bg-[#171717] border-gray-600 pt-2 pb-4 rounded-md">
                                        <h3 className="font-bold pb-2 flex gap-2 items-center justify-center">
                                             <GlobeAmericasIcon className="h-8 w-8" />
                                             <span>Shipping Details</span>
                                        </h3>
                                        <p className="text-sm pt-1 pb-4 text-gray-400">
                                             Please enter your shipping address
                                             below.
                                        </p>
                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700 flex items-center gap-2 relative">
                                             <span>Address</span>
                                             {addressError && (
                                                  <ExclamationCircleIcon className="absolute left-20 h-6 w-6 text-red-500" />
                                             )}
                                        </label>
                                        <input
                                             onChange={(e) =>
                                                  setAddress(e.target.value)
                                             }
                                             className={`inputs ${
                                                  addressError &&
                                                  "border-red-500"
                                             }`}
                                             placeholder="123 Main St"
                                             type="text"
                                             maxLength={38}
                                        />
                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700">
                                             Apt, suite, unit, etc. (optional)
                                        </label>
                                        <input
                                             onChange={(e) =>
                                                  setAddress2(e.target.value)
                                             }
                                             className="inputs w-1/2"
                                             placeholder="Unit 1"
                                             type="text"
                                             maxLength={15}
                                        />
                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700 flex items-center gap-2 relative">
                                             <span>City</span>
                                             {cityError && (
                                                  <ExclamationCircleIcon className="absolute left-12 h-6 w-6 text-red-500" />
                                             )}
                                        </label>

                                        <input
                                             onChange={(e) =>
                                                  setCity(e.target.value)
                                             }
                                             className={`inputs w-1/2 ${
                                                  cityError && "border-red-500"
                                             }`}
                                             placeholder="Los Angeles"
                                             type="text"
                                             maxLength={17}
                                        />
                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700 flex items-center gap-2 relative">
                                             <span>State</span>
                                             {stateError && (
                                                  <ExclamationCircleIcon className="absolute left-14 h-6 w-6 text-red-500" />
                                             )}
                                        </label>
                                        <input
                                             onChange={(e) =>
                                                  setState(e.target.value)
                                             }
                                             className={`inputs w-12 ${
                                                  stateError && "border-red-500"
                                             }`}
                                             placeholder="CA"
                                             type="text"
                                             maxLength={2}
                                        />
                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700 flex items-center gap-2 relative">
                                             <span>Zip Code</span>
                                             {zipError && (
                                                  <ExclamationCircleIcon className="absolute left-20 h-6 w-6 text-red-500" />
                                             )}
                                        </label>
                                        <input
                                             onChange={(e) =>
                                                  setZipcode(
                                                       Number(e.target.value)
                                                  )
                                             }
                                             className={`inputs w-1/3 md:w-1/6 ${
                                                  zipError && "border-red-500"
                                             }`}
                                             placeholder="12345"
                                             type="text"
                                             maxLength={5}
                                             minLength={5}
                                        />
                                   </div>
                                   <div className="flex flex-col gap-1 border bg-[#171717] border-gray-600  pt-2 pb-4 rounded-md">
                                        <h3 className="font-bold pb-2 flex gap-2 items-center justify-center">
                                             <CreditCardIcon className="h-8 w-8" />
                                             <span>Payment Details</span>
                                        </h3>
                                        <p className="text-sm pt-1 pb-4 text-gray-400 px-3">
                                             Please enter your card information
                                             below. This data is not stored in a
                                             database, feel free to use mock
                                             data.
                                        </p>
                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700 flex items-center gap-2 relative">
                                             <span>Card Number</span>
                                             {cardError && (
                                                  <ExclamationCircleIcon className="absolute left-28 h-6 w-6 text-red-500" />
                                             )}
                                        </label>
                                        <input
                                             onChange={(e) =>
                                                  setCardNumber(
                                                       Number(e.target.value)
                                                  )
                                             }
                                             className={`inputs w-3/4 md:w-1/2 ${
                                                  cardError && "border-red-500"
                                             }`}
                                             placeholder="1234-5678-9012-3456"
                                             type="text"
                                             maxLength={16}
                                             minLength={16}
                                        />
                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700 flex items-center gap-2 relative">
                                             <span>Expiration Date</span>
                                             {expError && (
                                                  <ExclamationCircleIcon className="absolute left-32 h-6 w-6 text-red-500" />
                                             )}
                                        </label>

                                        <input
                                             onChange={(e) =>
                                                  setExpDate(e.target.value)
                                             }
                                             className={`inputs w-1/2 md:w-1/3 ${
                                                  expError && "border-red-500"
                                             }`}
                                             placeholder="MM-YYYY"
                                             type="month"
                                             min="2023-03"
                                             max="2035-01"
                                        />

                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700 flex items-center gap-2 relative">
                                             <span>CVC Code</span>
                                             {cvcError && (
                                                  <ExclamationCircleIcon className="absolute left-20 h-6 w-6 text-red-500" />
                                             )}
                                        </label>
                                        <input
                                             onChange={(e) =>
                                                  setCvc(Number(e.target.value))
                                             }
                                             className={`inputs w-12 ${
                                                  cvcError && "border-red-500"
                                             }`}
                                             placeholder="123"
                                             type="text"
                                             maxLength={3}
                                        />
                                        <label className="text-xs uppercase font-bold text-left pl-3 pb-[2px] text-orange-700 flex items-center gap-2 relative">
                                             <span>Cardholder Name</span>
                                             {cardNameError && (
                                                  <ExclamationCircleIcon className="absolute left-36 h-6 w-6 text-red-500" />
                                             )}
                                        </label>
                                        <input
                                             onChange={(e) =>
                                                  setCardName(e.target.value)
                                             }
                                             className={`inputs ${
                                                  cardNameError &&
                                                  "border-red-500"
                                             }`}
                                             placeholder="John Wick"
                                             type="text"
                                             maxLength={35}
                                        />
                                   </div>
                                   <button
                                        className="mx-auto inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-mediums text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none"
                                        type="submit"
                                   >
                                        <span className="px-5 py-1 md:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                             Place Order
                                        </span>
                                   </button>
                              </form>
                         </div>
                    )}
               </div>
          </Layout>
     );
};

export default Checkout;
