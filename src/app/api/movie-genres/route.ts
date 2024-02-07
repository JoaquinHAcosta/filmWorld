export async function GET() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2IwYjI3Yzc3MjUwN2M0ZGM2NDNlZmExYzI3OTk2NSIsInN1YiI6IjY1MjVjMDM3ZDM5OWU2MDBhZGRhMjk5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OdJbK6Gl5U3C3OHvxlgE9nMxKIpQWvlcgfIJsHlKngw',
    },
  }

  const movieGenres = await fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      return json
    })
    .catch((err) => console.error('error:' + err))

  return Response.json(movieGenres)
}
