'use client'

import Image from 'next/image'
import React from 'react'
import { Slider } from '../cards/Slider'
import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader } from '../Loader'

export const HomeMain1 = () => {
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
  if (isError) return <div>Something went wrong, try again</div>
  return (
    <section>
      <div className="min-h-[550px] text-white py-10">
        <Slider title={'Popular movies'} movies={data!} />
      </div>
    </section>
  )
}
