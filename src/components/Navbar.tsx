import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 mx-8 bg-transparent border-b-8 ">
      <section className="flex">
        <h1 className="w-[160px] text-center">FilmWorld</h1>
        <div className="flex gap-4">
          <Link href="#">Home</Link>
          <Link href="#">Movies</Link>
          <Link href="#">Series</Link>
          <Link href="#">Celebrities</Link>
        </div>
      </section>
      <section className="flex gap-4">
        <Link href="#">My account</Link>
        <Link href="#">Login</Link>
      </section>
    </nav>
  )
}
