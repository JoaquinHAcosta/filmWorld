export async function GET(req: Request) {
  const url = new URL(req.url)

  const genres = url.searchParams.get('with_genres')

  const urlTMDB =
    genres !== null
      ? `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}`
      : 'https://api.themoviedb.org/3/discover/movie'

  const movies = await fetch(urlTMDB, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json
    })
    .catch((err) => console.error('error:' + err))

  return Response.json(movies)
}
