import paymentMethods from '/images/Tiny-Payment-Method-Icons.webp'

function Footer() {
  return (
    <div className='mt-[100px] mx-[100px] mb-[20px]'>
      <div className='flex gap-[50px] text-gray-500'>
        <div className='flex-1 flex flex-col gap-[10px]'>
          <h1 className='text-[18px] font-medium text-[#555]'>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className=' flex-1 flex flex-col gap-[10px]'>
          <h1 className='text-[18px] font-medium text-[#555]'>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cooies</span>
        </div>
        <div className='flex-1 text-[14px] text-justify '>
          <h1 className='text-[18px] font-medium text-[#555]'>About</h1>
          <p>Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Vero dolorum soluta fuga deleniti est ad
            architecto unde odio, recusandae dolor.
            Illum magnam pariatur voluptatibus! Sed 
            unde ex suscipit a eos!</p>
        </div>
        <div className='flex-1 text-[14px] text-justify'>
        <h1 className='text-[18px] font-medium text-[#555]'>Contact</h1>
          <p>Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Vero dolorum soluta fuga deleniti est ad
            architecto unde odio, recusandae dolor.
            Illum magnam pariatur voluptatibus! Sed 
            unde ex suscipit a eos!</p>
        </div>
      </div>
      <div className='flex items-center justify-between mt-[50px]'>
        <div className='flex items-center gap-2'>
          <span className='text-[#2879fe] font-bold text-[2rem]'>RICHSTORE</span>
          <span className='text-[0.7rem] text-gray-500'>&copy; copyright 2023 All right reserved</span>
        </div>
        <div>
          <img src={paymentMethods} width='300'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
