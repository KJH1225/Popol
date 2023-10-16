import React, {useState} from "react";
import axios from 'axios';
import Product from "./Product";
import useAsync from "../customHook/useAsync";
import {useParams} from 'react-router-dom';
import { API_URL } from "../config/contansts";


const Products = () => {
  let {category} = useParams();
  console.log("category: ",category);
  
  const getProducts = !category ? async () => {
    const res = await axios.get(`/products`);
    console.log('res(/products): ',res.data);
    return res.data;
  } : async () => {
    const res = await axios.get(`/products/${category}`);
    console.log(`res(/products/${category}): `,res.data);
    return res.data;
  }
  
  const [state ] = useAsync(getProducts, []);
  const { loading, data:products, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!products){
    console.log("state: ", state);
    console.log("products: ",products);
    return <div>로딩중입니다.</div>
  }  


  return(
    <>
      <h2>상품 목록</h2>
      <div id="products-list">
        {products.map(product => <Product key = {product.id} product={product} />)}
      </div>
    </>
  )
}

export default Products;