import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import router from "next/router"

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
      className={`fixed top-0 w-full bg-black text-white text-lg z-30 ${
        visible ? "" : "hidden"
      }`}
    >
      <ul className="flex justify-around py-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </motion.div>
  )
}

export default Navbar
