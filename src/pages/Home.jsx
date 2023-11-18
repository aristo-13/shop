import Slider from "../Components/Slider"
import FeaturedProducts from "../Components/FeaturedProducts"
import Categories from "../Components/Categories"
import Contact from "../Components/Contact"

function Home() {
  return (
    <div>
       <Slider />
       <FeaturedProducts type="featured"/>
       <Categories />
       <FeaturedProducts type="trending"/>
       <Contact />
    </div>
  )
}

export default Home
