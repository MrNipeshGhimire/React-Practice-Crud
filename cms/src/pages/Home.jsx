import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import axios from 'axios'

const Home = () => {

    const[products,setProduct]= useState([])

      const FetchProduct =async()=>{
       const response = await axios.get('https://67175b9db910c6a6e027b39d.mockapi.io/products')
       if(response.status === 200){
        console.log("Data aayo")
        setProduct(response.data)
       }
      }

      useEffect(()=>{
         FetchProduct()
      },[])

  return (
    <>
   <Navbar/>
   <div className='flex justify-center flex-wrap mt-20' >
   {
     products.map((product)=>(
        <Card product={product} />
     ))
   }
   </div>
  </>
  )
}

export default Home


