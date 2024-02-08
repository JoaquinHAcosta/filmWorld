import { Genre } from '@/types/Genre'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const ListOfGenres = ({ setPickedGenre }: any) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMovieGenres'],
    queryFn: async () => {
      const { data } = await axios.get('/api/movie-genres')

      return data.genres as Genre[]
    },
  })
  if (isLoading) return <div className="text-white">Loading Genres...</div>
  if (isError)
    return <div className="text-white">Something went wrong, try again</div>
  return (
    <div className="flex flex-wrap justify-evenly mb-6">
      {data?.map((genre) => (
        <button
          onClick={() => setPickedGenre(genre.id)}
          key={genre.id}
          className="text-white bg-red-600 rounded-3xl m-1 px-2"
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}
