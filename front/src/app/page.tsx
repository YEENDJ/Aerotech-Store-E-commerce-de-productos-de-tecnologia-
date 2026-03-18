import Categorias from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroVideo from '@/components/Hero'
import HeroVideo2 from '@/components/Hero2'
import Productos from './product/page'

const Home = async () => {
  return (
    <div className="bg-GrisClaro">
      <HeroVideo />
      <Categorias />
      <FeaturedProducts featuredIds={['5', '19', '24']} />
      <HeroVideo2 />
      <Productos />
    </div>
  )
}

export default Home
