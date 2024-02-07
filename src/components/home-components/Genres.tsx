'use client'

import { Genre } from '@/types/Genre'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { GenreButton } from './GenreButton'

export const Genres = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMovieGenres'],
    queryFn: async () => {
      const { data } = await axios.get('/api/movie-genres')

      return data.genres as Genre[]
    },
  })
  if (isLoading) return <div className="text-white">Loading Genres...</div>
  if (isError)
    return <div className="text-white">Something went wrong, try again</div>
  return (
    <section className="flex w-full absolute border-2 text-white">
      <div className="w-[1000px] mx-auto flex flex-col ">
        <div className="flex justify-between my-4">
          <h1 className="text-2xl">In Generes</h1>
          <p className="text-lg">View All</p>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {data?.map((genre) => (
            <GenreButton key={genre.id} {...genre} />
          ))}
        </div>
      </div>
    </section>
  )
}
