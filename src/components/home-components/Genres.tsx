'use client'

import React, { useState } from 'react'
import { ListOfGenres } from './ListOfGenres'
import axios from 'axios'
import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import { MovieCard } from '../cards/MovieCard'

export const Genres = () => {
  const [pickedGenre, setPickedGenre] = useState(12)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMoviesByGenres', pickedGenre],
    queryFn: async () => {
      const { data } = await axios.get('/api/movies?with_genres=' + pickedGenre)
      return data.results as Movie[]
    },
  })

  return (
    <section className="flex w-full absolute text-white">
      <div className="w-[1000px] mx-auto flex flex-col ">
        <div className="flex justify-between my-4">
          <h1 className="text-2xl">In Genres</h1>
          <p className="text-lg">View All</p>
        </div>
        <ListOfGenres pickedGenre={setPickedGenre} />
        <div className="grid grid-cols-3">
          {data?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  )
}
