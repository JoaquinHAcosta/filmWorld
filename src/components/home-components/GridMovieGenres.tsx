import axios from 'axios'
import { Movie } from '@/types/Movie'
import { useQuery } from '@tanstack/react-query'
import { MovieCard } from '../cards/MovieCard'
import { useState } from 'react'

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

  if (isLoading) return <div className="text-white">Loading Movies...</div>
  if (isError)
    return <div className="text-white">Something went wrong, try again</div>

  const N_OF_CARDS = 6

  const totalPages = Math.ceil(data!.length / N_OF_CARDS)
  const start = (currentPage - 1) * N_OF_CARDS
  const end = start + N_OF_CARDS

  let viewMovies = data!.slice(start, end)
  return (
    <div>
      <div className="grid grid-cols-3">
        {viewMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <div className="flex justify-center">
        {currentPage > 1 && <button onClick={prevPage}>PREV</button>}
        <div>{currentPage}</div>
        {currentPage < totalPages && <button onClick={nextPage}>NEXT</button>}
      </div>
    </div>
  )
}
