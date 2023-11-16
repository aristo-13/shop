import paymentMethods from '/images/Tiny-Payment-Method-Icons.webp'

function Footer() {
  return (
    <div>
      <div className='grid grid-cols-4'>
        <div className='flex flex-col'>
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className='flex flex-col'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cooies</span>
        </div>
        <div>
          <h1>About</h1>
          <p>Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Vero dolorum soluta fuga deleniti est ad
            architecto unde odio, recusandae dolor.
            Illum magnam pariatur voluptatibus! Sed 
            unde ex suscipit a eos!</p>
        </div>
        <div>
        <h1>Contact</h1>
          <p>Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Vero dolorum soluta fuga deleniti est ad
            architecto unde odio, recusandae dolor.
            Illum magnam pariatur voluptatibus! Sed 
            unde ex suscipit a eos!</p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <span>RICHSTORE</span>
          <span>&copy; copyright 2023 All right reserved</span>
        </div>
        <div>
          <img src={paymentMethods} width='300'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
