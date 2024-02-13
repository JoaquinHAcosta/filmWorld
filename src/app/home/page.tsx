import { NewsSection } from '@/components/NewsSection'
import { Genres } from '@/components/home-movies/Genres'
import { HomeMain1 } from '@/components/home-movies/HomeMain1'
import { TopRated } from '@/components/home-movies/TopRated'
import { HomeSeries } from '@/components/home-series/HomeSeries'

const HomePage = () => {
  return (
    <main className="flex flex-col justify-center items-center min-w-[800px] ">
      <HomeMain1 />
      <Genres />
      <TopRated />
      <HomeSeries />
      <NewsSection />
    </main>
  )
}

export default HomePage
