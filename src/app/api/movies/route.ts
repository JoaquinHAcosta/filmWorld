import { Movie } from '@/types/Movie'
import axios, { AxiosRequestConfig } from 'axios'

export async function GET() {
  // const requestConfig: AxiosRequestConfig = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization:
  //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2IwYjI3Yzc3MjUwN2M0ZGM2NDNlZmExYzI3OTk2NSIsInN1YiI6IjY1MjVjMDM3ZDM5OWU2MDBhZGRhMjk5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OdJbK6Gl5U3C3OHvxlgE9nMxKIpQWvlcgfIJsHlKngw',
  //   },
  // }

  // const movies = await axios.get(
  //   'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  //   requestConfig
  // )
  // console.log(movies.data?.results)

  const url =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2IwYjI3Yzc3MjUwN2M0ZGM2NDNlZmExYzI3OTk2NSIsInN1YiI6IjY1MjVjMDM3ZDM5OWU2MDBhZGRhMjk5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OdJbK6Gl5U3C3OHvxlgE9nMxKIpQWvlcgfIJsHlKngw',
    },
  }

  const movies: Movie[] = []
  fetch(url, options)
    .then((res) => {
      res.json()
      movies.push(res)
    })
    .then((json) => console.log(json))
    .catch((err) => console.error('error:' + err))

  return Response.json(movies)
}
