import ProjectCard from "@/components/projectCard"
import twitterImg from "@/public/twitter.jpg"
import chatlyImg from "@/public/chatly.jpg"
import notedImg from "@/public/noted.jpg"
import clneImg from "@/public/clne.jpg"
import todoImg from "@/public/todo.jpg"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import router from "next/router"
import { IoCloseOutline } from "react-icons/io5"
import Head from "next/head"

const Projects = () => {
  const textColorControl = useAnimation()
  const gridControl = useAnimation()
  const [cover, setCover] = useState(false)

  const setText = () => {
    if (window.scrollY >= 10) {
      textColorControl.start({
        opacity: 0,
        transitionDuration: "0.5s",
      })
      gridControl.start({
        scale: 1,
        filter: "brightness(1)",
        transitionDuration: "0.3s ease 0 0.71s 0.2s 1.01s",
        transition: {
          type: "spring",
          damping: 9,
          stiffness: 100,
          restDelta: 0.001,
        },
      })
    } else {
      textColorControl.start({
        opacity: 100,
        transitionDuration: "0.5s",
      })
      gridControl.start({
        scale: 0.9,
        filter: "brightness(0.4)",
        transitionDuration: "0.3s ease 0 0.71s 0.2s 1.01s",
        transition: {
          type: "spring",
          damping: 9,
          stiffness: 100,
          restDelta: 0.001,
        },
      })
    }
  }

  const removeEventListener = () => {
    window.removeEventListener("scroll", setText)
  }

  useEffect(() => {
    document.body.style.backgroundColor = "black"
    return () => {
      document.body.style.backgroundColor = "white"
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    textColorControl.start({
      opacity: 100,
    })
    gridControl.start({
      scale: 0.9,
      filter: "brightness(0.4)",
    })
    window.addEventListener("scroll", setText)
    router.events.on("routeChangeStart", removeEventListener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Projects / Bryan Van Winnendael</title>
      </Head>
      <div className="w-full h-full bg-black">
        {cover && (
          <>
            <div className="fixed inset-0 h-full w-full z-50 bg-black opacity-80"></div>
            <IoCloseOutline className="fixed top-5 left-5 text-white cursor-pointer z-[60] h-10 w-10" />
          </>
        )}
        <motion.div
          animate={textColorControl}
          className="p-10 text-white md:text-6xl sm:text-5xl text-4xl font-semibold"
        >
          <p>Here are all of my projects I made.</p>
          <p>These are made in my spare time or for my education.</p>
        </motion.div>
        <motion.div
          animate={gridControl}
          className="bg-black sm:grid flex flex-col grid-cols-3 grid-rows-3 gap-x-12 gap-y-12 p-10 justify-center"
        >
          <div className="row-start-1 col-start-1">
            <ProjectCard setCover={setCover} project="Chatly" img={chatlyImg} />
          </div>
          <div className="row-start-1 col-start-2">
            <ProjectCard setCover={setCover} project="Noted" img={notedImg} />
          </div>
          <div className="row-start-1 col-start-3">
            <ProjectCard
              setCover={setCover}
              project="TwitterClone"
              img={twitterImg}
            />
          </div>
          <div className="row-start-2 col-start-1">
            <ProjectCard setCover={setCover} project="Clne" img={clneImg} />
          </div>
          <div className="row-start-2 col-start-2 row-span-2">
            <ProjectCard setCover={setCover} project="Todo" img={todoImg} />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Projects
