import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full text-white bg-[url('/footer-bg.jpg')]">
      <section className="flex h-96 justify-center max-w-5xl mx-auto py-4">
        <div className="border left w-1/4 flex justify-center items-center bg-transparent">
          Left
        </div>
        <div className="border right w-3/4 flex justify-center items-center bg-transparent">
          Right
        </div>
      </section>
      <div className="h-12 w-full bg-[#1e2c3b] border-t-2 border-gray-700">
        <div className="max-w-5xl container mx-auto">
          <p className="left">Texto 1</p>
          <p className="right">Texto 2</p>
        </div>
      </div>
    </footer>
  )
}
