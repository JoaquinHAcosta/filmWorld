import { Movie } from '@/types/Movie'
import Image from 'next/image'
import React, { useState } from 'react'
import { RightArrow } from '../icons/RightArrow'
import { LeftArrow } from '../icons/LeftArrow'
import { Square } from '../icons/Square'

export const Slider = ({
  movies,
  title,
}: {
  movies: Movie[]
  title: string
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function goToPrevius() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? movies.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function goToNext() {
    const isLastSlide = currentIndex === movies.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function goToSlide(index: number) {
    setCurrentIndex(index)
  }

  return (
    <div className="flex p-4">
      {/* <h1 className="text-white">{title}</h1> */}
      <div className="h-[500px] relative mx-auto mb-10">
        <div onClick={goToPrevius}>
          <LeftArrow className="w-10 h-10 absolute top-1/2 left-8 z-10 text-white bg-transparent cursor-pointer" />
        </div>
        <div onClick={goToNext}>
          <RightArrow className="w-10 h-10 absolute top-1/2 right-8 z-10 text-white bg-transparent cursor-pointer" />
        </div>
        <Image
          className="rounded-md border-2 border-black shadow-lg"
          width={900}
          height={500}
          alt="movie"
          src={`https://image.tmdb.org/t/p/w500${movies[currentIndex].backdrop_path}`}
        />
        <div className="flex justify-center">
          {movies.map((movies, movieIndex) => (
            <div
              className="mx-1 cursor-pointer text-sm pt-3"
              onClick={() => goToSlide(movieIndex)}
              key={movieIndex}
            >
              <Square className="w-6 h-6 text-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
