import Button from "./Button"
function Categories() {
  return (
    <div className="flex h-[80vh] gap-[5px]">
        {/* firts col */}
        <div className="flex-1 flex flex-col gap-[5px]">
            <div className="flex-1 relative overflow-hidden">
                <Button name='Sale'/> 
               <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex-1 relative overflow-hidden">
                <Button name='Sale'/> 
               <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover" alt="" />
            </div>
        </div>
        {/* 2nd col */}
        <div className="flex-1 flex flex-col">
            <div className="img w-full h-full relative"> 
                <Button name='Sale'/> 
               <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover" alt="" />
            </div>
        </div>
        {/* 3rd col */}
        <div className="h-full flex-[2] flex flex-col gap-[5px]">
            <div className="flex-1 flex gap-[5px] overflow-hidden">
                <div className="flex-1 relative overflow-hidden">
                    <Button name='Sale'/> 
                    <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 relative overflow-hidden">
                    <Button name='Sale'/> 
                   <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover" alt="" />
                </div>
            </div>
            <div className="flex-1 relative overflow-hidden">
                <Button name='Sale'/> 
               <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" className="object-cover w-full h-full" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Categories
