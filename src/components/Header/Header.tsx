import Link from 'next/link'
import { SearchBar } from '../SearchBar'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <nav className="max-w-7xl m-auto flex justify-between items-center text-white bg-transparent h-20  border-b-8 ">
      <section className="flex left items-center">
        <h1 className="w-[160px] text-center">FilmWorld</h1>
        <div className="flex">
          <Button variant={'nav'}>
            <Link href="#">Home</Link>
          </Button>
          <Button variant={'nav'}>
            <Link href="#">Movies</Link>
          </Button>
          <Button variant={'nav'}>
            <Link href="#">Series</Link>
          </Button>
          <Button variant={'nav'}>
            <Link href="#">Celebrities</Link>
          </Button>
        </div>
      </section>
      <section className="flex gap-4 pr-4 right">
        <Button variant={'nav'}>
          <Link href="#">My account</Link>
        </Button>
        <Button variant={'redButton'}>
          <Link href="#">Login</Link>
        </Button>
      </section>
      {/* <SearchBar /> */}
    </nav>
  )
}
