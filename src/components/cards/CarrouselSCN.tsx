import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Movie } from '@/types/Movie'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export const CarrouselSCN = ({ movies }: { movies: Movie[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center m-3">
                  <span className="text-4xl font-semibold">
                    <Image
                      width={920}
                      height={520}
                      alt="movie"
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
