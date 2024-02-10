export async function GET() {
  const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN_KEY}`,
    },
  }

  const tvSeries = await fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      return json
    })
    .catch((err) => console.error('error:' + err))

  return Response.json(tvSeries)
}
