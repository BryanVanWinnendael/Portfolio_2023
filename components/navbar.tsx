import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import iconImage from "@/public/icon.png"
import Image from "next/image"
import NavButton from "./navButton"

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const navControl = useAnimation()

  const handleScrol = () => {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos === 0) return setVisible(true)
    const visible = prevScrollpos > currentScrollPos

    setVisible(visible)
    setPrevScrollpos(currentScrollPos)
  }

  useEffect(() => {
    navControl.start({
      y: visible ? 0 : -100,
      transitionDuration: "0.1s",
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  useEffect(() => {
    window.addEventListener("scroll", handleScrol)
    return () => window.removeEventListener("scroll", handleScrol)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollpos])

  return (
    <motion.div
      animate={navControl}
      className={`fixed flex justify-between top-0 w-full bg-[#0e0e0e] text-white text-lg z-30 ${
        visible ? "" : "hidden"
      }`}
    >
      <Link
        href="/"
        className="py-4 w-full sm:ml-10 ml-5 flex items-center cursor-pointer"
      >
        <Image src={iconImage} alt="icon" width={30} height={30} />
        <h1 className="ml-1 text-xl">My Portfolio</h1>
      </Link>
      <div className="flex sm:hidden mr-5 py-4">
        <NavButton />
      </div>
      <ul className="gap-32 justify-center items-center py-4 w-2/3 mr-5 hidden sm:flex">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </motion.div>
  )
}

export default Navbar
