import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export const Footer = () => {
  return (
    <footer className="w-full text-white bg-[url('/footer-bg.jpg')]">
      <section className="flex h-96 justify-center max-w-5xl mx-auto py-4">
        <div className="max-w-5xl grid mx-auto grid-cols-5 items-center font-thin leading-7">
          <p className="w-40 mr-5">
            <h4 className="font-bold mb-3">BLOCKTER</h4>
            <p>5th Avenue st. Manhattan</p>
            <p className="text-sm">
              Call us: <span className="font-bold">(+01) 202 333 4444</span>
            </p>
          </p>
          <p className="">
            <h4 className="font-bold mb-3">Resources</h4>
            <p>About Film World</p>
            <p>Contact Us</p>
            <p>Forums</p>
            <p>Blog</p>
            <p>Help Center</p>
          </p>
          <p className="left">
            <h4 className="font-bold mb-3">Account</h4>
            <p>My Account</p>
            <p>WatchList</p>
            <p>Collections</p>
            <p>User Guide</p>
          </p>
          <p className="right">
            <h4 className="font-bold mb-3">Legal</h4>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Security</p>
          </p>
          <p className="">
            <h4 className="font-bold mb-3">Newsletter</h4>
            <p>
              Syscribe to our newsletter system now to get latest news from use
            </p>
            <input
              className="bg-grey-50 border-2 mx-1"
              type="text"
              placeholder="Enter tour email"
            />
            <Button
              variant={'ghost'}
              className="font-bold text-lg text-red-500"
            >
              SUSCRIBE NOW &gt;&gt;
            </Button>
          </p>
        </div>
      </section>
      <div className="h-12 w-full bg-[#1e2c3b] border-t-2 border-gray-700"></div>
    </footer>
  )
}
