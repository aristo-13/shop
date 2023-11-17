import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div className="mb-10">
      <Link to={`/product/${product.id}`}>
        <div className="w-[250px] flex flex-col gap-2">
          <div className="w-full h-[350px] overflow-hidden relative group">
             {product.isNew && <span className="absolute top-1 left-1 bg-white text-[teal] p-1 z-20 font-medium text-[0.7rem]">New Season</span>}
            <img className="w-full h-full object-cover absolute" src={product.img} alt="" />
            {product.img2 && (
              <img className="w-full h-full object-cover absolute -z-10 group-hover:z-10 transition-all duration-300" src={product.img2} alt="" />
            )}
          </div>
          <h2 className="text-[1rem] font-normal">{product.title}</h2>
          <div className="flex gap-[20px]">
            <h3 className="font-medium line-through text-[14px] text-gray-500">${product.oldPrice}</h3>
            <h3 className="font-medium text-[18px] ">${product.price}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
