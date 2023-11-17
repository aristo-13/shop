import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';


function Contact() {
  return (
    <div className='flex justify-center bg-[#2879fe] text-white p-[15px]'>
       <div className=" flex justify-between w-[60%] items-center">
           <span>BE IN TOUCH WITH US:</span>
           <div className="flex justify-center items-center">
              <input type="text" placeholder="Enter your e-mail..." className='p-[10px] rounded-l-md'/>
               <button className="p-[10px] text-white bg-[#333] rounded-r-md">JOIN US</button>
           </div>
           <div className='flex gap-1'>
             <InstagramIcon />
             <TwitterIcon />
             <GoogleIcon />
            < PinterestIcon />
            < FacebookIcon />
           </div>
       </div>
    </div>
  )
}

export default Contact
