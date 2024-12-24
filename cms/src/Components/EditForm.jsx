import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditForm = () => {

    //useParams
    const {id} = useParams()
    const navigate = useNavigate()

    const[product, setProduct] = useState({
        productName : '',
        productBrand : '',
        productCategory : '',
        productImage : '',
        productPrice : '',
        productDescription : ''
    })
    
    const handleChange=(e)=>{
        const {name, value} = e.target 
        console.log(value)
        setProduct({
            ...product,
            [name]:value
        })
    }

    //useEffect
    useEffect(()=>{
        const fetchProduct= async ()=>{
           const response = await axios.get('https://67175b9db910c6a6e027b39d.mockapi.io/products/'+id)
           if(response.status === 200){
            setProduct(response.data)
           }
        }
        fetchProduct()
    },[id])

    const updateProduct=(e)=>{
        e.preventDefault()
        const response = axios.put('https://67175b9db910c6a6e027b39d.mockapi.io/products/'+id,product)
        if(response.status === 201){
            setProduct(response.data)
            navigate("/")    
        }
    }

  return (
    <>
    <div className="bg-white border border-4 rounded-lg shadow relative m-20 ">

<div className="flex items-start justify-between p-5 border-b rounded-t">
    <h3 className="text-xl font-semibold">
        Edit product
    </h3>
    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>

<div className="p-6 space-y-6">
    <form onSubmit={updateProduct}>
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                <input type="text" name="productName" onChange={handleChange} value={product.productName} id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Product Name" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                <input type="text" name="productCategory" onChange={handleChange} value={product.productCategory} id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Categories" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
                <input type="text" name="productBrand" onChange={handleChange} value={product.productBrand} id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Brand" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <input type="number" name="productPrice" onChange={handleChange} value={product.productPrice} id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Price" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="image" className="text-sm font-medium text-gray-900 block mb-2">Image </label>
                <input type="text" name="productImage" onChange={handleChange} value={product.productImage} id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Image Link" required=""/>
            </div>
            <div className="col-span-full">
                <label for="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
                <textarea id="product-details" rows="6" name="productDescription" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details" value={product.productDescription} ></textarea>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
    <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Edit </button>
</div>
        </div>
    </form>
</div>



</div>

    </>
  )
}

export default EditForm