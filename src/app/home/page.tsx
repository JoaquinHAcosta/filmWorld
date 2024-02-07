'use client'

import { Movie } from '@/types/Movie'
import { Slider } from '@/components/cards/Slider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'

const HomePage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMovies'],
    queryFn: async () => {
      const { data } = await axios.get('/api/movies')
      return data.results as Movie[]
    },
  })

  if (isLoading) return <div>Loading Movies...</div>
  if (isError) return <div>Something went wrong, try again</div>
  return (
    <section className="flex justify-center">
      <Image
        alt="background"
        width={2000}
        height={2000}
        src={'/movie-bg.jpg'}
        className="absolute"
      />
      <div className="max-w-6xl mx-auto border-b-8 bg-lime-50 py-10">
        <div className="min-w-[800px] min-h-[550px]">
          <Slider movies={data!} />
        </div>
      </div>
    </section>
  )
}

export default HomePage
