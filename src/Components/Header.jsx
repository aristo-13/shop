import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EN from '/images/EN.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className='flex justify-between'>
         <div className='flex'>
            <div className='flex items-center'>
                <img src={EN} alt="logo" width='20' height='10'/>
                <ExpandMoreIcon />
            </div>
            <div className='flex items-center'>
                <span>USD</span>
                <ExpandMoreIcon />
            </div>

            <Link to='category/1'>Men</Link>
            <Link to='category/2'>Women</Link>
            <Link to='category/3'>Children</Link>
            <Link to='category/4'>Accessories</Link>
         </div>
         <div></div>
         <div></div>
      </div>
    </div>
  )
}

export default Header
