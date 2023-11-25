import {createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './../componant/web/home/Home.jsx'
import Categories from '../componant/web/categories/Categories.jsx'
import DashboardLayout from './DashboardLayout.jsx'
import HomeDashboard from './../componant/dashboard/home/Home.jsx'
import CategoriesDashboard from './../componant/dashboard/categories/Categories.jsx'
import Register from '../componant/web/register/Register.jsx'


 export const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[{
      path:'home',
      element:<Home/>
    },
    {
      path:'categories',
      element:<Categories/>
    },
    {
        path:'register',
        element:<Register/>
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
