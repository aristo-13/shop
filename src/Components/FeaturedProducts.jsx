import Card from "./Card";


function FeaturedProducts({type}) {

    const featuredProducts = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Long sleeve Graphic T-shirt",
          isNew: true,
          oldPrice: 69.99,
          price: 59.99
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Coat",
          isNew: false,
          oldPrice: 29.99,
          price: 24.99
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Skirt",
          isNew: true,
          oldPrice: 39.99,
          price: 29.99
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Hat",
          isNew: false,
          oldPrice: 59.99,
          price: 49.99
        },
       
      ];
      




  return (
    <div className="m-[100px]">
       <div className="flex mb-[50px]">
        <h1 className="flex-[2] capitalize text-2xl font-bold">{type} Products</h1>
        <p className="flex-[3]  text-gray-500 text-[0.9rem]">Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Corrupti minus vitae placeat 
            fuga veniam illo, pariatur neque similique excepturi quam, 
            labore dolorem omnis praesentium ratione iure suscipit accusantium 
            .</p>
       </div>
       <div className="flex justify-center gap-5">
           {
            featuredProducts.map((product) => (
                <Card key={product.id} product={product}/>
            ))
           }
       </div>
    </div>
  )
}

export default FeaturedProducts
