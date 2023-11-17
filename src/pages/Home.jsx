import Slider from "../Components/Slider"
import FeaturedProducts from "../Components/FeaturedProducts"


function Home() {
  return (
    <div>
       <Slider />
       <FeaturedProducts type="Featured"/>
       <FeaturedProducts type="Trending"/>
    </div>
  )
}

export default Home
