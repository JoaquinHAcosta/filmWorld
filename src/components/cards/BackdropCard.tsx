import { Movie } from '@/types/Movie'
import Image from 'next/image'
import { useState } from 'react'

export const BackdropCard = (movie: Movie) => {
  return (
    <Image
      width={500}
      height={500}
      alt="image"
      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
    />
  )
}
