import { Movie } from '@/types/Movie'
import Image from 'next/image'
import React from 'react'

export const HorizCard = ({
  title,
  backdrop_path,
  original_language,
  popularity,
  overview,
  vote_average,
  vote_count,
  genre_ids,
}: Movie) => {
  return (
    <div className="flex justify-between px-4 min-w-full">
      <div className="relative">
        <Image
          width={800}
          height={1200}
          alt="movie"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        ></Image>
      </div>
      <div className="absolute">
        <h2>{title}</h2>
        <p>{original_language}</p>
        <p>{popularity}</p>
        <p>{overview}</p>
        <p>{vote_average}</p>
        <p>{vote_count}</p>
        <p>{JSON.stringify(genre_ids)}</p>
      </div>
    </div>
  )
}
