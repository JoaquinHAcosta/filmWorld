'use client'

import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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
    <section className="max-w-6xl mx-auto border-b-8">
      <h1>Header movies</h1>
      <div>{JSON.stringify(data)}</div>
    </section>
  )
}

export default HomePage
