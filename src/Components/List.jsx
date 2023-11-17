import Card from "./Card";

function List() {
    const data = [
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
    <div className="flex justify-between flex-wrap">
      {data?.map((item) => (
        <Card product={item} key={item.id}/> 
      ))}
    </div>
  )
}

export default List
