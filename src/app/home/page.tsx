import { Genres } from '@/components/home-components/Genres'
import { HomeMain1 } from '@/components/home-components/HomeMain1'
import { TopRated } from '@/components/home-components/TopRated'

const HomePage = () => {
  return (
    <main>
      <HomeMain1 />
      <div className="absolute w-full">
        <Genres />
        <TopRated />
      </div>
    </main>
  )
}

export default HomePage
