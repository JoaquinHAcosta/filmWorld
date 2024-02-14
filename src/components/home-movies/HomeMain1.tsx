'use client'

import React from 'react'
import { Slider } from '../cards/Slider'
import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader } from '../Loader'
import { CarrouselSCN } from '../cards/CarrouselSCN'

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
  if (isError)
    return (
      <section className="text-white mx-auto min-h-[700px] flex justify-center items-center">
        <p className="mx-3">Something went wrong :(</p>
      </section>
    )
  return (
    <section className="flex flex-col items-center w-full h-5/6 bg-[url('/movie-bg.jpg')] ">
      <div className="text-white py-10">
        <h1 className="py-5 text-2xl font-medium border-2 rounded-xl px-5">
          Popular films this week:
        </h1>
        {/* <Slider title={'Popular movies'} movies={data!} /> */}
        <div className="max-w-[1024px] mx-4">
          <CarrouselSCN movies={data!} />
        </div>
      </div>
    </section>
  )
}
