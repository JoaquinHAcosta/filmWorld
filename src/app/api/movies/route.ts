export async function GET(req: Request) {
  const url = new URL(req.url)

  const genres = url.searchParams.get('with_genres')
  console.log(genres)

  const urlTMDB =
    genres !== null
      ? `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}`
      : 'https://api.themoviedb.org/3/discover/movie'

  // const _id = url.searchParams.get('_id')

  // const urlTMDB = 'https://api.themoviedb.org/3/discover/movie?'
  // 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

  const movies = await fetch(urlTMDB, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2IwYjI3Yzc3MjUwN2M0ZGM2NDNlZmExYzI3OTk2NSIsInN1YiI6IjY1MjVjMDM3ZDM5OWU2MDBhZGRhMjk5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OdJbK6Gl5U3C3OHvxlgE9nMxKIpQWvlcgfIJsHlKngw',
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json
    })
    .catch((err) => console.error('error:' + err))

  return Response.json(movies)
}
