'use client'

import Image from 'next/image'
import React from 'react'
import { Slider } from '../cards/Slider'
import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const HomeMain1 = () => {
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
    <section>
      <Image
        alt="background"
        width={2000}
        height={2000}
        src={'/movie-bg.jpg'}
        className="absolute"
      />
      <div className="py-10">
        <div className="min-w-[800px] min-h-[550px]">
          <Slider movies={data!} />
        </div>
      </div>
    </section>
  )
}
