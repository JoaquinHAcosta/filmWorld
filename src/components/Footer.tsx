import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex justify-center">
      <Image src={'/footer-bg.jpg'} alt="footer" width={800} height={240} />
    </footer>
  )
}
