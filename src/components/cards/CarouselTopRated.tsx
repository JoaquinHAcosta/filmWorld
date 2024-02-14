import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Movie } from '@/types/Movie'
import Image from 'next/image'

export function CarouselTopRated({ movies }: { movies: Movie[] }) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 relative">
                  <Image
                    width={540}
                    height={220}
                    className="rounded-md"
                    alt="image"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                  <h3 className="absolute text-lg bottom-1 left-2 p-6">
                    {movie.title}({movie.release_date.split('-')[0]})
                  </h3>
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
