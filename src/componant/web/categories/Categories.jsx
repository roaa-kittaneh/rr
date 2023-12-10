//import React, { useEffect, useState } from 'react'
//import axios from 'axios';

//export default function Categories() {
    //console.log(import.meta.env.VITE_API_URL)
    //const [categories,setCategories]=useState([]);
    //const [isLoading,setIsLoading]=useState(true);
    //const getcategories=async()=>{
       // try{
       //     const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
        //    setCategories(data.categories);
        //}
       // catch(error){
        //   console.log(error);
       // }
       // finally{
       //     setIsLoading(false);
       // }
       
    //}
    //useEffect(()=>{
   //     getcategories();
   // },[])

   // if(isLoading){
    //    return <h2>Loading...</h2>
    //}
  //return (
  // <>
  // <div className='container'>
  //  <div className='row'>
    //    { categories.length?categories.map((category)=>
    //      <div className='col-lg-4' key={category._id}>
     //       <img src={category.image.secure_url}/>
     //       <h2>{category.name}</h2>
     //      </div>
     //   ):'no categqory found'
     //   }
    //</div>
   //</div> 

  // </>

//  )
//}
import axios from "axios";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import { Link } from "react-router-dom";
import 'swiper/swiper-bundle.css';
import './Categoris.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {CartContext} from '../context/Cart.jsx';
import { useContext } from "react";

export default function Categories() {
  const getCategories = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=6`);
    return data;
  };

const x=useContext(CartContext);
console.log(x);


  const { data, isLoading } = useQuery('web_categories', getCategories);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <div className="swiper-custom-pagination"></div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        loop={true}
        Autoplay={{
            delay:1000
        }}
        pagination={{ clickable: true, 
        el:'.swiper-custom-pagination'}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.categories.length ? (
          data.categories.map((category) => (
            <SwiperSlide key={category._id}>
                <Link to={`/products/category/${category._id}`}>
                <img src={category.image.secure_url} alt={category.name} className="rounded-circle" />
                 <h2 className="h22">{category.name}</h2>
                </Link>
            </SwiperSlide>
          ))
        ) : (
          <h2>No category found</h2>
        )}
      </Swiper>
    </div>
  );
}

