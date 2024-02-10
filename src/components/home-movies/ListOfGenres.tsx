import { Genre } from '@/types/Genre'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader } from '../Loader'

export const ListOfGenres = ({ setPickedGenre }: any) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMovieGenres'],
    queryFn: async () => {
      const { data } = await axios.get('/api/movie-genres')

      return data.genres as Genre[]
    },
  })
  if (isLoading)
    return (
      <section className="text-white mx-auto min-h-[100px] flex justify-center items-center">
        <Loader />
        <p className="mx-3">Loading Genres...</p>
      </section>
    )
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
