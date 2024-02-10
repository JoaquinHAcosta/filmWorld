import { TVSerie } from '@/types/TVSerie'
import Image from 'next/image'

export const SerieCard = (serie: TVSerie) => {
  return (
    <div className="h-96 w-56">
      <Image
        width={500}
        height={500}
        alt="movie"
        src={'https://image.tmdb.org/t/p/w500' + serie.poster_path}
      />
      {serie.name}
    </div>
  )
}
