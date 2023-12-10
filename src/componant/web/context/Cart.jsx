import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  let [count,setCount]=useState(0);
  const addToCartContext = async (productId) => {

    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart`,
        { productId },
        { headers: { Authorization: `Tariq__${token}` } }
      );
      if (data.message.success) {
        toast.success("Product added to cart successfully!", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      setCount(++count);
      return data;
    } catch (error) {
      console.log(error);
    }
  };


  const getCardContext = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/cart`,
        { headers: { Authorization: `Tariq__${token}` } }
      );
      setCount(data.count);
      return data;

    } catch (error) {
      console.log(error);
    }
  };

  const removeItemcontext = async (productId) => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/cart/removeItem`,
        { productId },
        { headers: { Authorization: `Tariq__${token}` } }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{ addToCartContext, getCardContext, removeItemcontext,setCount,count }}
    >
      {children}
    </CartContext.Provider>
  );
}