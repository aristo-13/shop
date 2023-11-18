import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from 'react';

function Slider() {
 const [currIndex,setCurrIndex] = useState(0)

 const images = [
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
 ]

const NextSlide = () => {
   const LastSlide = currIndex === images.length -1
   const newIndex = LastSlide? 0 : currIndex+1
   setCurrIndex(newIndex)
}
const PrevSlide = () =>{
    const Firstslide = currIndex === 0
    const newIndex = Firstslide ? images.length -1 : currIndex-1
    setCurrIndex(newIndex)
}


  return (
    <div className='h-[calc(100vh-80px)] w-full relative overflow-hidden'>
       <div className='w-[300vw] flex h-full duration-300' style={{transform: `translateX(-${currIndex * 100}vw)`}}>
         {
            images.map((image,index) => (
                <img src={image} alt=""  className='w-[100vw] h-full object-cover' key={index}/>
            ))
         }
       </div>
       <div className='absolute bottom-[50px] w-full flex justify-center items-center p-2 gap-4 cursor-pointer'>
          <button onClick={PrevSlide} className='p-3 text-white bg-black/30 border border-gray-500'><WestOutlinedIcon /></button>
          <button onClick={NextSlide} className='p-3 text-white bg-black/30 border border-gray-500'><EastOutlinedIcon /></button>
       </div>
        <div className='absolute bottom-5 w-full flex justify-center items-center text-white cursor-pointer'>
            {
                images.map((image,index) => (
                    <FiberManualRecordIcon key={index} onClick={() =>setCurrIndex(index)} fontSize='small' style={{opacity: currIndex === index ? "1" : "0.5"}}/>
                ))
            }
        </div>
    </div>
  )
}

export default Slider
