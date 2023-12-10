import React, { useContext } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/Cart';

export default function Products() {
    const {productId}=useParams();
    console.log(productId);
    const {addToCartContext}=useContext(CartContext);
   const getproduct=async(productId)=>{
    const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
    

    return data.product;

   }
   const {data,isLoading}=useQuery('product',async ()=>(await getproduct(productId)));
   if(isLoading){
    return <p>loading...</p>
   }
   

   const addToCart= async (productId)=>{
      const res=await addToCartContext(productId);
      console.log(res);
   }
   
   return (
   
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          {data && data.subImages && data.subImages.map((img, index) => (
           
            <div key={index} className='image mt-3'>
              <img src={img.secure_url} alt={`product-image-${index}`} />
              
            </div>
          
          ))}
        </div>
  
        <div className='col-lg-8'>
          <h2>{data && data.name}</h2>
          <p>{data && data.price}</p>
          <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)}>Add to cart</button>
        </div>
      </div>
      
    </div>
  );
  
 
} 