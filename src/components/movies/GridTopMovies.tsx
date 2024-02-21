'use client'

import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CarouselTopRated } from '../cards/CarouselTopRated'

export const GridTopMovies = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMoviesTopRated'],
    queryFn: async () => {
      const { data } = await axios.get('/api/movies-top-rated')
      return data.results as Movie[]
    },
  })
  if (isLoading) return <div className="text-white">Loading Movies...</div>
  if (isError)
    return <div className="text-white">Something went wrong, try again</div>
  return <CarouselTopRated movies={data!} />
}
