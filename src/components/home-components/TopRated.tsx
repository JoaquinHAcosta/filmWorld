import React from 'react'
import { GridTopRated } from './GridTopRated'

export const TopRated = () => {
  return (
    <section className="flex w-full h-96 text-white">
      <div className="w-[1000px] mx-auto flex flex-col ">
        <div className="flex justify-between my-4">
          <h1 className="text-2xl">Top Rated Movies</h1>
          <p className="text-lg">View All</p>
        </div>
        <GridTopRated />
        <div className="border-b-2 mt-4"></div>
      </div>
    </section>
  )
}
