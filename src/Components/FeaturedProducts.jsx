import { useEffect, useState } from "react";
import Card from "./Card";
import api from "../../api/api";
import useFetch from "../Hooks/useFetch";
import Skeleton from "./Skeleton";

function FeaturedProducts({type}) {
  
  const {data,Loading,error} = useFetch(`api/products?populate=*&[filters][type][$eq]=${type}`)


/* useEffect(() => {
   const FetchData = async () => {
      try {
        const response = await api.get(`api/products?populate=*&[filters][type][$eq]=${type}`)
        console.log(response.data.data)
        setPoducts(response.data.data)
      }catch (error) {
        console.log(error)
      }
   }

   FetchData()
},[])
 */
  return (
    <div className="m-[100px]">
       <div className="flex mb-[50px]">
        <h1 className="flex-[2] capitalize text-2xl font-bold">{type} Products</h1>
        <p className="flex-[3]  text-gray-500 text-[0.9rem]">Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Corrupti minus vitae placeat 
            fuga veniam illo, pariatur neque similique excepturi quam, 
            labore dolorem omnis praesentium ratione iure suscipit accusantium 
            .</p>
       </div>
       <div className="flex justify-center gap-5">
           { Loading ? <Skeleton styles='w-[250px] h-[350px]' num={4}/>
            : data.map((product) => (
                <Card key={product.id} product={product}/>
            ))
           }
       </div>
    </div>
  )
}

export default FeaturedProducts
