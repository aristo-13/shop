import Slider from "../Components/Slider"
import FeaturedProducts from "../Components/FeaturedProducts"
import Categories from "../Components/Categories"
import Contact from "../Components/Contact"

function Home() {
  return (
    <div>
       <Slider />
       <FeaturedProducts type="Featured"/>
       <Categories />
       <FeaturedProducts type="Trending"/>
       <Contact />
    </div>
  )
}

export default Home
