import { useState } from "react"
import BalanceIcon from '@mui/icons-material/Balance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useParams} from 'react-router-dom'
import useFetch from "../Hooks/useFetch";
import Skeleton from "../Components/Skeleton";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartReducer";

function SingleProduct() {
const  {id} = useParams()
const [selectedImg,setSelectedImg] = useState("img")
const [quantity,setQuantity] = useState(1)
const {data,Loading,error} = useFetch(`api/products/${id}?populate=*`)
const dispatch = useDispatch()

const addProductToCart = () => {
   dispatch(addToCart(
    {
      id: data.id,
      title: data.attributes.title,
      desc: data.attributes.desc,
      price: data.attributes.price,
      img: data.attributes.img.data.attributes.url,
      quantity,
    }
   ))
}

  return (
    <div className="flex px-5 gap-5">

      {/* left */}

     <div className="flex-1 flex gap-1">
        <div className="flex-1 flex flex-col gap-1 w-full h-[60%] overflow-hidden">
               {Loading ? <Skeleton styles='w-[150px] h-[150px]' num={2}/>
               : <>
              
                <img src={import.meta.env.VITE_REACT_IMG_URL+data?.attributes?.img?.data?.attributes?.url} alt="" onClick={() => setSelectedImg("img")} className="flex-1 w-full max-h-[150px] object-cover cursor-pointer"/>
                <img src={import.meta.env.VITE_REACT_IMG_URL+data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={() => setSelectedImg("img2")} className="flex-1 w-full max-h-[150px] object-cover cursor-pointer"/>
                </>
              }
        </div>
        <div className="flex-[5]">
        {Loading ? <Skeleton styles='w-[500px] h-[600px]' num={1}/>
          :<>
             <img src={import.meta.env.VITE_REACT_IMG_URL+data?.attributes[selectedImg]?.data?.attributes?.url}
            alt="" className="w-full max-h-[600px] object-cover"
            />
          </>}
          
        </div>
     </div>

     {/* right */}

     <div className="flex-1 flex flex-col gap-3">
         <h1 className="font-bold text-xl">{data?.attributes?.title}</h1>
         <span className="text-[25px] font-medium text-[#2879fe]">${data?.attributes?.price}.00</span>
         <p className="text-[18px] font-normal text-justify">
         {data?.attributes?.desc}
         </p>
         <div className="flex items-center gap-2">
              <button className="p-2 w-[40px] h-[40px] border flex justify-center items-center bg-black/10" onClick={()=>setQuantity(prev => prev === 1? 1 : prev-1)}>-</button>
               <span>{quantity}</span>
              <button className="p-2 w-[40px] h-[40px] border flex justify-center items-center bg-black/10" onClick={()=>setQuantity(prev => prev+1)}>+</button>
         </div>
       <button onClick={addProductToCart} className="uppercase border p-2 w-[200px] bg-[#2879fe] text-white flex items-center gap-4 justify-center font-medium">
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
