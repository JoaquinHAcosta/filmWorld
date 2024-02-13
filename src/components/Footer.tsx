import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="h-96 w-full bg-[url('/footer-bg.jpg')] text-white grid grid-cols-2">
      <div className="flex justify-center items-center bg-transparent">
        Left
      </div>
      <div className="flex justify-center items-center bg-transparent">
        Right
      </div>
    </footer>
  )
}
