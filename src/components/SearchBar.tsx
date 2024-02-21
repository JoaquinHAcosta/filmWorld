export const SearchBar = () => {
  return (
    <div className="flex">
      <select name="typeShow">
        <option value="movie">Movies</option>
        <option value="serie">TV Series</option>
      </select>
      <input type="text" className="grow" />
    </div>
  )
}
