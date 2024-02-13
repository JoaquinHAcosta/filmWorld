import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex justify-center w-full">
      <Image
        className="absolute"
        src="/footer-bg.jpg"
        alt="footer"
        width={1800}
        height={800}
      />
      <div className="relative bg-transparent flex justify-between items-center text-white z-10">
        <div className="bg-red-500">Left</div>
        <div className="bg-blue-500">Right</div>
      </div>
    </footer>
  )
}
