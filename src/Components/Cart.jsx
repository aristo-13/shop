import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function Cart() {
 const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long sleeve Graphic T-shirt",
        desc: " Lorem ipsum, dolor sit amet co",
        isNew: true,
        oldPrice: 69.99,
        price: 59.99
      },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 69.99,
        price: 59.99
      },
 ]


  return (
    <div className=" absolute right-[10px] top-[50px] z-30 bg-white p-[20px] shadow-xl flex flex-col">
       <h1 className='mb-[30px] text-gray-500 font-normal text-[24px]'>Products in your cart</h1>
       {
        data.map((item) => (
            <div className=" flex items-center gap-[20px] mb-3 justify-between" key={item.id}>
                <img src={item.img} alt="" className='w-[60px] h-[80px] object-cover'/>
                <div className="">
                    <h1 className='text-[14px] font-medium'>{item.title}</h1>
                    <p className='text-gray-500 mb-2 text-[12px]'>{item.desc?.substr(0,70)}</p>
                    <div className='text-[#2879fe]'>1 × {item.price}</div>
                </div>
                <DeleteOutlineOutlinedIcon fontSize='small' className='cursor-pointer text-red-600'/>
            </div>
        ))
       }
       <div className="flex justify-between font-medium mb-2">
         <span>SUBTOTAL</span>
         <span className='text-[#2879fe]'>$123</span>
       </div>
       <button className='uppercase text-[16px] border p-2 w-full bg-[#2879fe] text-white flex items-center justify-center'>PROCEED TO CHECKOUT</button>
       <button className='text-red-500 text-[14px]'>Reset Cart</button>
      
    </div>
  )
}

export default Cart
