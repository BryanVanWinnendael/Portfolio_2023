import Head from "next/head"
import About from "@/components/about"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import router from "next/router"

export default function Home() {
  const colorControl = useAnimation()
  const textColorControl = useAnimation()
  const [mounted, setMounted] = useState(false)

  const setColor = () => {
    if (mounted) {
      if (window.scrollY >= 1) {
        colorControl.start({
          backgroundColor: "white",
          transitionDuration: "0.5s",
        })
        textColorControl.start({
          color: "black",
          transitionDuration: "0.5s",
        })
      } else {
        colorControl.start({
          backgroundColor: "#0e0e0e",
          transitionDuration: "0.5s",
        })
        textColorControl.start({
          color: "white",
          transitionDuration: "0.5s",
        })
      }
    }
  }

  const removeEventListener = () => {
    window.removeEventListener("scroll", setColor)
  }

  useEffect(() => {
    document.body.style.overflow = "visible"
    setMounted(true)
    colorControl.start({
      backgroundColor: "#0e0e0e",
      transitionDuration: "0.5s",
    })
    textColorControl.start({
      color: "white",
      transitionDuration: "0.5s",
    })
    window.addEventListener("scroll", setColor)
    router.events.on("routeChangeStart", removeEventListener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  return (
    <>
      <Head>
        <meta name="description" content="Bryan Van Winnendael" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Home / Bryan Van Winnendael</title>
      </Head>
      <motion.div animate={colorControl}>
        <div className="h-screen text-white sm:p-10 p-5 w-full">
          <section className="text-gray-500 font-semibold text-lg mb-5">
            <p>My portfolio</p>
            <p>2023</p>
          </section>
          <section>
            <motion.h1
              animate={textColorControl}
              className="md:text-7xl sm:text-6xl text-4xl font-bold"
            >
              FULL STACK
            </motion.h1>
            <motion.h1
              animate={textColorControl}
              className="md:text-7xl sm:text-6xl text-4xl font-bold"
            >
              DEVELOPER
            </motion.h1>
            <motion.h1
              animate={textColorControl}
              className="md:text-9xl sm:text-8xl text-5xl font-bold"
            >
              BRYAN VAN
            </motion.h1>
            <motion.h1
              animate={textColorControl}
              className="md:text-9xl sm:text-8xl text-5xl font-bold"
            >
              WINNENDAEL
            </motion.h1>
          </section>
          <section className="flex text-2xl gap-12 mt-5">
            <div>
              <p className="text-gray-500">Location</p>
              <motion.p
                animate={textColorControl}
                className="md:text-4xl sm:text-3xl text-2xl font-semibold"
              >
                Belgium
              </motion.p>
            </div>
            <div>
              <p className="text-gray-500">Degree</p>
              <motion.p
                animate={textColorControl}
                className="md:text-4xl sm:text-3xl text-2xl font-semibold"
              >
                Applied Computer Science
              </motion.p>
            </div>
          </section>
        </div>
        <About />
      </motion.div>
    </>
  )
}
