import { Link } from "react-router-dom"
function Button( {name} ) {
  return (
    <button className="absolute top-0 right-0 left-0 bottom-0 m-auto max-w-[100px] bg-white h-[35px] uppercase font-medium hover:text-white hover:bg-[#2879fe] duration-500">
      <Link to="/products/1">{name}</Link>
    </button>
  )
}

export default Button
