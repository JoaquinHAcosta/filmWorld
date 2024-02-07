import Link from 'next/link'
import React from 'react'
import { SearchBar } from './SearchBar'

export const Navbar = () => {
  return (
    <header className="max-w-6xl mx-auto border-b-8 text-white">
      <nav className=" flex justify-between items-center h-20 bg-transparent border-b-8 ">
        <section className="flex">
          <h1 className="w-[160px] text-center">FilmWorld</h1>
          <div className="flex gap-4">
            <Link href="#">Home</Link>
            <Link href="#">Movies</Link>
            <Link href="#">Series</Link>
            <Link href="#">Celebrities</Link>
          </div>
        </section>
        <section className="flex gap-4 pr-4">
          <Link href="#">My account</Link>
          <Link href="#">Login</Link>
        </section>
      </nav>
      <SearchBar />
    </header>
  )
}
