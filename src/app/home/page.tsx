import { Genres } from '@/components/home-movies/Genres'
import { HomeMain1 } from '@/components/home-movies/HomeMain1'
import { TopRated } from '@/components/home-movies/TopRated'
import { HomeSeries } from '@/components/home-series/HomeSeries'

const HomePage = () => {
  return (
    <main>
      <HomeMain1 />
      <div className="absolute w-full">
        <Genres />
        <TopRated />
        <HomeSeries />
      </div>
    </main>
  )
}

export default HomePage
