'use client'

import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { BackdropCard } from '../cards/BackdropCard'

export const GridTopRated = () => {
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
  return (
    <div className="flex h-64 overflow-x-auto">
      {data!.map((movie) => (
        <BackdropCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}
