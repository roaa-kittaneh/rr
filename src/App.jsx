import { RouterProvider} from "react-router-dom";
import {router} from './layouts/Routes.jsx'; 
import {  useEffect, useContext} from "react";
import { UserContext } from './componant/web/context/User.jsx';
import { CartContext } from "./componant/web/context/Cart.jsx";
import {  CartContextProvider } from "./componant/web/context/Cart.jsx";


export default function App() {
  let {setUserToken}=useContext(UserContext);
  //let {count,setCount, getCardContext}=useContext(CartContext)
  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      setUserToken(localStorage.getItem("userToken"));
      // Access count from context
      //setCount(getCardContext().count);
      
    }
  }, []);
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );

}


