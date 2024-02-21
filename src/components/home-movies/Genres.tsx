'use client'

import { useState } from 'react'
import { ListOfGenres } from './ListOfGenres'
import { GridMovieGenres } from './GridMovieGenres'

export const Genres = () => {
  const [pickedGenre, setPickedGenre] = useState(12)

  return (
    <section className="flex w-full min-h-full text-white">
      <div className="w-[1000px] mx-auto flex flex-col ">
        <div className="flex justify-between items-center m-4 px-4 rounded-md border-2">
          <h1 className="text-2xl">In Genres</h1>
          <p className="text-lg">View All</p>
        </div>
        <ListOfGenres setPickedGenre={setPickedGenre} />
        <GridMovieGenres pickedGenre={pickedGenre} />
      </div>
    </section>
  )
}
