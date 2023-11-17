import { useState } from "react"
import List from "../Components/List"
import { useParams } from "react-router-dom"

function Products() {
const {id} = parseInt(useParams())
const [maxPrice,setMaxPrice] = useState(1000)
const [sort,setSort] = useState(null)

  
  return (
    <div className="flex px-[20px] py-[40px]">
      {/* left */}
       <div className="flex-1 sticky h-full top-[50px] flex flex-col gap-7">
         <div className="">
           <h2 className="text-[1.1rem] mb-4 font-medium">Product Categories</h2>
           <div className="">
             <input type="checkbox" id="1" value={1}/>
              <label className="ml-2" htmlFor="1">Shoes</label>
           </div>
           <div className="">
             <input type="checkbox" id="2" value={2}/>
              <label className="ml-2" htmlFor="2">Skirts</label>
           </div>
           <div className="">
             <input type="checkbox" id="3" value={3}/>
              <label className="ml-2" htmlFor="3">Coats</label>
           </div>
         </div>
         <div>
           <h2 className="text-[1.1rem] mb-4 font-medium">Filter by price</h2>
           <div>
             <span>0</span>
             <input value={maxPrice} type="range" min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)}/>
             <span>{maxPrice}</span>
           </div>
         </div>
         <div>
          <h2 className="text-[1.1rem] mb-4 font-medium">Sort by</h2>
          <div className="">
             <input type="radio" name="price" id="asc" onChange={(e) => setSort("asc")}/>
             <label className="ml-2" htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="">
             <input type="radio" name="price" id="desc" onChange={(e) => setSort("desc")}/>
             <label className="ml-2" htmlFor="desc">Price (Highest first)</label>
          </div>
         </div>
       </div>
       {/* right */}
       <div className="flex-[3]">
          <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""  className="w-full h-[300px] object-cover mb-[50px]"/>
           <List catId={id} maxPrice={maxPrice} sort={sort}/>
       </div>
    </div>
  )
}

export default Products
