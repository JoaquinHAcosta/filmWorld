'use client'
import { CarouselMovie } from './CarouselMovie'
import { Loader } from '../Loader'
import { useQuery } from '@tanstack/react-query'
import { Movie } from '@/types/Movie'
import axios from 'axios'

const MainMovies = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMovies'],
    queryFn: async () => {
      const { data } = await axios.get('/api/movies')
      return data.results as Movie[]
    },
  })
  if (isLoading)
    return (
      <section className="text-white mx-auto min-h-[700px] flex justify-center items-center">
        <Loader />
        <p className="mx-3">Loading Movies...</p>
      </section>
    )
  if (isError)
    return (
      <section className="text-white mx-auto min-h-[700px] flex justify-center items-center">
        <p className="mx-3">Something went wrong :(</p>
      </section>
    )
  return (
    <section className="flex flex-col items-center w-full h-5/6">
      <div className="text-white py-10">
        <h1 className="py-5 text-2xl font-medium border-2 rounded-xl px-5">
          Films you should watch:
        </h1>
        <div className="max-w-[1024px] mx-4">
          <CarouselMovie movies={data!} />
        </div>
      </div>
    </section>
  )
}

export default MainMovies
