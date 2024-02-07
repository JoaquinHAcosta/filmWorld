'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const HomePage = () => {
  const {} = useQuery({
    queryKey: ['getMovies'],
    queryFn: async () => {
      const { data } = await axios.get('/api/movies')
      console.log(data)
    },
  })

  return (
    <section className="max-w-6xl mx-auto border-b-8">
      <h1>Header movies</h1>
      <div>aca mapeo las pelis</div>
    </section>
  )
}

export default HomePage
