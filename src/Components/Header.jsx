import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EN from '/images/EN.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import { useSelector } from 'react-redux';

function Header() {
const [openCart,setOpen] = useState(false)
const data = useSelector(state=> state.cart.products)

  return (
    <div className='p-2 text-[18px] relative'>
      <div className=' w-full flex justify-between items-center'>
         <div className='flex items-center gap-[20px]'>
            <div className='flex items-center'>
                <img src={EN} alt="logo" width='20' height='10'/>
                <ExpandMoreIcon />
            </div>
            <div className='flex items-center'>
                <span>USD</span>
                <ExpandMoreIcon />
            </div>

            <Link to='products/1'>Men</Link>
            <Link to='products/2'>Women</Link>
            <Link to='products/3'>Children</Link>
            <Link to='products/4'>Accessories</Link>
         </div>
         <div>
            <Link className='text-[25px] text-[#2879fe] font-medium' to='/'>RICHSTORE</Link>
         </div>
         <div className='flex gap-[20px] items-center cursor-pointer'>
            <Link to='/'>Homepage</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Stores</Link>
            <div className='flex items-center gap-2'>
               <SearchIcon fontSize='small'/>
               <PersonOutlineIcon fontSize='small'/>
               <FavoriteBorderOutlinedIcon fontSize='small'/>
               <div className='relative cursor-pointer text-[12px]' onClick={() => setOpen(!openCart)}>
                 <ShoppingCartOutlinedIcon fontSize='small'/>
                 <span className='absolute -right-1 -top-2 w-4 h-4 bg-blue-500 flex justify-center items-center rounded-full text-white'>{data.length}</span>
               </div>
            </div>
         </div>
      </div>
      { openCart && <Cart />}
    </div>
  )
}

export default Header
