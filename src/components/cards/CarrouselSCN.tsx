import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Movie } from '@/types/Movie'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export const CarrouselSCN = ({ movies }: { movies: Movie[] }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center rounded-md relative pt-6 h-[550px] overflow-hidden">
                  <Image
                    width={1024}
                    height={550}
                    className="rounded-md"
                    alt="movie"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                  <div className="absolute bottom-2 left-8 z-10 hover:bg-black rounded-lg hover:bg-opacity-80 p-5">
                    <h4 className="font-bold text-2xl">{movie.title}</h4>
                    <p className="max-w-[400px]">{movie.overview}</p>
                  </div>
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
