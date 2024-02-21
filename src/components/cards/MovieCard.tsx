import { Movie } from '@/types/Movie'
import Image from 'next/image'

export const MovieCard = (movie: Movie) => {
  return (
    <div className="h-96 w-56">
      <Image
        width={500}
        height={500}
        alt="movie"
        src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
      />
      {movie.title}
    </div>
  )
}
