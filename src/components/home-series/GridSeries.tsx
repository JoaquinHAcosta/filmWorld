'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader } from '../Loader'
import { RightArrow } from '../icons/RightArrow'
import { LeftArrow } from '../icons/LeftArrow'
import { SerieCard } from '../cards/SerieCard'
import { TVSerie } from '@/types/TVSerie'

export const GridSeries = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getSeries'],
    queryFn: async () => {
      const { data } = await axios.get('/api/series')
      return data.results as TVSerie[]
    },
  })
  function prevPage() {
    setCurrentPage(currentPage - 1)
  }

  function nextPage() {
    setCurrentPage(currentPage + 1)
  }

  if (isLoading)
    return (
      <section className="text-white mx-auto h-[84vh] flex justify-center items-center">
        <Loader />
        <p className="mx-3">Loading Movies...</p>
      </section>
    )
  if (isError)
    return (
      <section className="text-white">Something went wrong, try again</section>
    )

  const N_OF_CARDS = 20

  const totalPages = Math.ceil(data!.length / N_OF_CARDS)
  const start = (currentPage - 1) * N_OF_CARDS
  const end = start + N_OF_CARDS

  let viewSeries = data!.slice(start, end)
  return (
    <nav>
      <div className="min-h-[84vh] grid grid-cols-4">
        {viewSeries.map((series) => (
          <SerieCard key={series.id} {...series} />
        ))}
      </div>
      <div className="flex justify-center border-t-2 border-b-2 py-1">
        <button
          className="mr-3 disabled:text-gray-300"
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          <LeftArrow />
        </button>
        <div>
          {Array.from(Array(totalPages)).map((_, i) => {
            return (
              <button
                className="mx-2"
                key={i}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            )
          })}
        </div>
        <button
          disabled={currentPage === totalPages}
          className="ml-3 disabled:text-gray-300"
          onClick={nextPage}
        >
          <RightArrow />
        </button>
      </div>
    </nav>
  )
}
