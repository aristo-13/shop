import Card from "./Card";
import useFetch from "../Hooks/useFetch";
import Skeleton from "./Skeleton";

function List({subCats,maxPrice,sort,catId}) {
   
  const {data,Loading,error} = useFetch(`api/products?populate=*&[filters][categories][id]=${catId}${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)


  return (
    <div className="flex justify-between flex-wrap gap-2">
      {Loading? <Skeleton styles='w-[200px] h-[300px]' num={4}/>
      :data?.map((item) => (
        <Card product={item} key={item.id}/> 
      ))}
    </div>
  )
}

export default List
