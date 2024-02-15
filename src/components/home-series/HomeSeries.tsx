import { GridSeries } from './GridSeries'

export const HomeSeries = () => {
  return (
    <section className="flex w-full min-h-full text-white">
      <div className="w-[1000px] mx-auto flex flex-col ">
        <div className="flex justify-between items-center my-4 px-4 rounded-md border-2">
          <h1 className="text-4xl">Popular TV Shows</h1>
          <p className="text-lg">View All</p>
        </div>
        <GridSeries />
      </div>
    </section>
  )
}
