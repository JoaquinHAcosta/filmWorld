import axios from 'axios'
import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import { MovieCard } from '../cards/MovieCard'
import { useState } from 'react'
import { LeftArrow } from '../icons/LeftArrow'
import { RightArrow } from '../icons/RightArrow'
import { Loader } from '../Loader'

export const GridMovieGenres = ({ pickedGenre }: { pickedGenre: number }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMoviesByGenres', pickedGenre],
    queryFn: async () => {
      const { data } = await axios.get('/api/movies?with_genres=' + pickedGenre)
      return data.results as Movie[]
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

  const N_OF_CARDS = 8

  const totalPages = Math.ceil(data!.length / N_OF_CARDS)
  const start = (currentPage - 1) * N_OF_CARDS
  const end = start + N_OF_CARDS

  let viewMovies = data!.slice(start, end)
  return (
    <nav>
      <div className="min-h-[84vh] grid grid-cols-4">
        {viewMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
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
