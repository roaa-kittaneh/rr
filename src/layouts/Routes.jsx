import {createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './../componant/web/home/Home.jsx'
import Categories from '../componant/web/categories/Categories.jsx'
import DashboardLayout from './DashboardLayout.jsx'
import HomeDashboard from './../componant/dashboard/home/Home.jsx'
import CategoriesDashboard from './../componant/dashboard/categories/Categories.jsx'
import CategoriesDetalis from '../componant/web/categories/CategoriesDetalis'
import Products from '../componant/web/products/Products.jsx'
import Cart from '../componant/web/cart/Cart.jsx'
import Register from '../componant/web/register/Register.jsx'
import Login from '../componant/web/login/Login.jsx'
import ProtectedRoute from '../componant/web/protectedRoute/ProtectedRoute.jsx'
import Profile from '../componant/web/profile/Profile.jsx'
import Userinfo from '../componant/web/profile/Userinfo.jsx'
import Usercontact from '../componant/web/profile/Usercontact.jsx'
import Sendcode from '../componant/web/auth/Sendcode.jsx'
import Forgetpassword from '../componant/web/auth/Forgetpassword.jsx'


export const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[{
      //path:'/home',
       index:true,
        element:<Home/>
      },
      {
        path:'categories',
        element:<Categories/>
      },
      {
        path:'products/category/:categoryId',
        element:<CategoriesDetalis/>
      },
      {
        path:'product/:productId',
        element:<Products/>
      },
      {
          path:'register',
          element:<Register/>
      },
      {
        path:'Sendcode',
        element:<Sendcode/>
    },
    {
      path:'Forgetpassword',
      element:<Forgetpassword/>
  },
      {
        path:'profile',
        element:
        <ProtectedRoute >
        <Profile/>
        </ProtectedRoute>,
        children:[
          {
            index:true,
            //path:'info',
            element:<Userinfo/>
          },
          {
            path:'contact',
            element:<Usercontact/>
          },
        ]
    },
      {
        path:'cart',
        element:
        <ProtectedRoute >
             <Cart/>
        </ProtectedRoute>
       
    },
    {
        path: 'login',
        element: <Login />
    },
   
        
      ]
      
    },
  
    {
      path:"/dashboard",
      element:<DashboardLayout />,
      children:[{
        path:'home',
        element:<HomeDashboard/>
      },
      {
        path:'categories',
        element:<CategoriesDashboard/>
      }
      ]
      
    }
  ]);
