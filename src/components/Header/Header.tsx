import Link from 'next/link'
import { Button } from '../ui/button'
import { ModeToggle } from '../ToggleTheme'

export const Header = () => {
  return (
    <nav className="w-full m-auto flex justify-between items-center rounded-b-xl dark:text-white dark:bg-[#070218] h-20  border-b-8 ">
      <section className="flex left items-center max-w-5xl">
        <h1 className="w-[160px] text-center">FilmWorld</h1>
        <div className="flex">
          <Button variant={'nav'}>
            <Link href="/home">Home</Link>
          </Button>
          <Button variant={'nav'}>
            <Link href="/movies">Movies</Link>
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
        {/* <Button variant={'nav'}>
          <Link href="#">My account</Link>
        </Button> */}
        <ModeToggle />
        <Button variant={'redButton'}>
          <Link href="#">Login</Link>
        </Button>
      </section>
      {/* <SearchBar /> */}
    </nav>
  )
}
