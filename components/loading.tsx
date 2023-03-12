import { motion, useAnimation } from "framer-motion"
import Head from "next/head"
import { useEffect, useState } from "react"

// preload images
import ChatlyImg from "@/public/chatly.jpg"
import ClneImg from "@/public/clne.jpg"
import NotedImg from "@/public/noted.jpg"
import NotedImg2 from "@/public/noted_light.png"
import NotedImg3 from "@/public/noted_settings.png"
import NotedImg4 from "@/public/noted_tutorial.png"
import TodoImg from "@/public/todo.jpg"
import TwitterImg from "@/public/twitter.jpg"
import TwitterImg2 from "@/public/twitter_home.jpg"
import TwitterImg3 from "@/public/twitter_dark.jpg"
import TwitterImg4 from "@/public/twitter_comments.jpg"
import TwitterImg5 from "@/public/twitter_following.jpg"
import DroneImg from "@/public/drone.jpg"
import DroneImg2 from "@/public/drone2.jpg"
import DroneImg3 from "@/public/drone3.jpg"
import DroneImg4 from "@/public/drone4.jpg"

import iconImage from "@/public/icon.png"
import Image from "next/image"

const images = [
  ChatlyImg,
  ClneImg,
  NotedImg,
  NotedImg2,
  NotedImg3,
  NotedImg4,
  TodoImg,
  TwitterImg,
  TwitterImg2,
  TwitterImg3,
  TwitterImg4,
  TwitterImg5,
  DroneImg,
  DroneImg2,
  DroneImg3,
  DroneImg4,
  iconImage,
]

const Loading = ({ setLoading }: { setLoading: (value: boolean) => void }) => {
  const [timer, setTimer] = useState<number>(0)
  const [done, setDone] = useState<boolean>(false)
  const divControler = useAnimation()
  const textContoller = useAnimation()
  const colorController = useAnimation()
  const visibleController = useAnimation()

  const addTimer = (time: any) => {
    if (time == 100) {
      setDone(true)
      return time
    } else {
      return time + 10
    }
  }

  useEffect(() => {
    const intervalId = setInterval(
      () => setTimer((prev: any) => addTimer(prev)),
      100
    )

    if (done) {
      visibleController.start({
        opacity: 1,
        transitionDuration: "5s",
      })
      textContoller.start({
        opacity: 0,
      })
      colorController.start({
        color: "#6B7280",
        transitionDuration: "1.5s",
      })
      divControler.start({
        scale: 50,
        transitionDuration: "5s",
      })
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }

    return () => {
      clearInterval(intervalId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  return (
    <div className="w-screen h-screen bg-white text-white flex justify-center items-center">
      <motion.div
        animate={divControler}
        className=" bg-[#0e0e0e] z-10 h-24 w-24 rounded-full flex justify-center items-center"
      >
        <div className="hidden">
          {images.map((image, id) => (
            <Image key={id} src={image} alt="load" />
          ))}
        </div>
        <motion.p animate={textContoller}>{timer}%</motion.p>
      </motion.div>
      <motion.div
        animate={visibleController}
        className="absolute opacity-0 h-screen text-white sm:p-10 p-5 w-full z-20"
      >
        <motion.section
          animate={colorController}
          className="text-white font-semibold pt-14 text-lg mb-5"
        >
          <p>My portfolio</p>
          <p>2023</p>
        </motion.section>
        <section>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
            FULL STACK
          </h1>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
            DEVELOPER
          </h1>
          <h1 className="md:text-9xl sm:text-8xl text-5xl font-bold">
            BRYAN VAN
          </h1>
          <h1 className="md:text-9xl sm:text-8xl text-5xl font-bold">
            WINNENDAEL
          </h1>
        </section>
        <section className="flex text-2xl gap-12 mt-5">
          <div>
            <motion.p animate={colorController} className="text-white">
              Location
            </motion.p>
            <p className="md:text-4xl sm:text-3xl text-2xl font-semibold">
              Belgium
            </p>
          </div>
          <div>
            <motion.p animate={colorController} className="text-white">
              Degree
            </motion.p>
            <p className="md:text-4xl sm:text-3xl text-2xl font-semibold">
              Applied Computer Science
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default Loading
