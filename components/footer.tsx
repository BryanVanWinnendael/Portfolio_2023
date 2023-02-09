import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <div className="bg-black h-32 flex text-white items-center justify-between border-t border-gray-700">
      <div className="px-5">
        <h1>BRYAN VAN</h1>
        <h1>WINNENDAEL</h1>
      </div>
      <div className="px-5 flex flex-col">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/projects">
          <p>Projects</p>
        </Link>
        <Link href="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div className="px-5 flex flex-col font-normal">
        <Link
          href="https://www.linkedin.com/in/bryanvanwinnendael/"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link href="https://github.com/BryanVanWinnendael" target="_blank">
          GitHub
        </Link>
      </div>
    </div>
  )
}

export default Footer
