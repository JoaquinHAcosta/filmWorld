import React from 'react'
import { GridTopRated } from './GridTopRated'

export const TopRated = () => {
  return (
    <section className="flex w-full h-96 text-white bg-[#070218] py-3 my-3">
      <div className="w-[1000px] mx-auto flex flex-col bg-[#070218]">
        <div className="flex justify-between items-center m-4 px-4 rounded-md border-2">
          <h1 className="text-2xl">Top Rated Movies</h1>
          <p className="text-lg">View All</p>
        </div>
        <GridTopRated />
        <div className="border-b-2 mt-4"></div>
      </div>
    </section>
  )
}
