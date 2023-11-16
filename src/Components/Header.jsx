import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EN from '/images/EN.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='border p-3 text-[18px]'>
      <div className='flex justify-between items-center'>
         <div className='flex items-center gap-[25px]'>
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
            <Link className='text-[30px] font-medium' to='/'>RICHSTORE</Link>
         </div>
         <div className='flex gap-[25px] items-center cursor-pointer'>
            <Link to='/'>Homepage</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Stores</Link>
            <div className='flex items-center gap-2'>
               <SearchIcon fontSize='small'/>
               <PersonOutlineIcon fontSize='small'/>
               <FavoriteBorderOutlinedIcon fontSize='small'/>
               <div className='relative cursor-pointer text-[12px]'>
                 <ShoppingCartOutlinedIcon fontSize='small'/>
                 <span className='absolute -right-1 -top-2 w-4 h-4 bg-blue-500 flex justify-center items-center rounded-full text-white'>0</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Header
