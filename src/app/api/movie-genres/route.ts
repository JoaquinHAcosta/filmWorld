export async function GET() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN_KEY}`,
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
