import { useState } from "react"
import BalanceIcon from '@mui/icons-material/Balance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function SingleProduct() {
const [selectedImg,setSelectedImg] = useState(0)
const [quantity,setQuantity] = useState(0)

const images = [
   "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600"
]
 

  return (
    <div className="flex px-5 gap-5">
      {/* left */}
     <div className="flex-1 flex gap-1">
        <div className="flex-1 flex flex-col gap-1 w-full h-[60%] overflow-hidden">
          {
            images.map((image,index) => (
              <img src={image} alt="" onClick={() =>setSelectedImg(index)} className="flex-1 w-full max-h-[150px] object-cover cursor-pointer"/>
            ))
          }
        </div>
        <div className="flex-[5]">
           <img src={images[selectedImg]} alt="" className="w-full max-h-[600px] object-cover"/>
        </div>
     </div>
     {/* right */}
     <div className="flex-1 flex flex-col gap-3">
         <h1 className="font-bold text-xl">Title</h1>
         <span className="text-[25px] font-medium text-[#2879fe]">$199</span>
         <p className="text-[18px] font-normal text-justify">
          Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Dolorem quae iusto et? 
          Tempora fugit quos repellat, deserunt adipisci 
          repellendus ipsam non quis a repudiandae 
          mollitia unde perferendis blanditiis ex hic.
         </p>
         <div className="flex items-center gap-2">
              <button className="p-2 w-[40px] h-[40px] border flex justify-center items-center bg-black/10" onClick={()=>setQuantity(prev => prev === 1? 1 : prev-1)}>-</button>
               <span>{quantity}</span>
              <button className="p-2 w-[40px] h-[40px] border flex justify-center items-center bg-black/10" onClick={()=>setQuantity(prev => prev+1)}>+</button>
         </div>
       <button className="uppercase border p-2 w-[200px] bg-[#2879fe] text-white flex items-center gap-4 justify-center font-medium">
         <AddShoppingCartIcon /> Add to cart
       </button>
       <div className="flex gap-5">
          <div className="uppercase flex items-center gap-1 text-[#2879fe] text-[14px]"><FavoriteBorderIcon fontSize="small"/> add to wish list</div>
          <div className="uppercase flex items-center gap-1 text-[#2879fe] text-[14px]"><BalanceIcon fontSize="small"/> add to compare</div>
       </div>
       <div className="flex flex-col gap-2 text-gray-500 text-[14px] mt-[30px]">
        <span>Vendor: Polo</span>
        <span>Product Type: T-Shirt</span>
        <span>Tag: T-Shirt, Women, Top</span>
       </div>
       <hr />
       <div className="flex flex-col gap-2 text-gray-500 text-[14px] mt-[30px]">
         <span className="uppercase">Description</span>
         <hr className="w-[200px] border"/>
         <span className="uppercase">Additional Information</span>
         <hr className="w-[200px] border"/>
         <span className="uppercase">Faq</span>
       </div>
     </div>
    </div>
  )
}

export default SingleProduct
