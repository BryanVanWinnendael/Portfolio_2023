import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import Chatly from "./projects/chatly"
import Noted from "./projects/noted"
import TwitterClone from "./projects/twitterClone"
import Clne from "./projects/clne"
import Todo from "./projects/todo"

const ProjectCard = ({
  project,
  img,
  setCover,
}: {
  project: string
  img: StaticImageData
  setCover: (arg: boolean) => void
}) => {
  const [showProject, setShowProject] = useState("")

  useEffect(() => {
    setCover(showProject !== "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showProject])

  return (
    <>
      <Image
        onClick={() => setShowProject(project)}
        src={img}
        alt="project image"
        className="rounded-md cursor-pointer"
      />
      {
        {
          Chatly: (
            <Chatly setShowProject={setShowProject} showProject={showProject} />
          ),
          Noted: (
            <Noted setShowProject={setShowProject} showProject={showProject} />
          ),
          TwitterClone: (
            <TwitterClone
              setShowProject={setShowProject}
              showProject={showProject}
            />
          ),
          Clne: (
            <Clne setShowProject={setShowProject} showProject={showProject} />
          ),
          Todo: (
            <Todo setShowProject={setShowProject} showProject={showProject} />
          ),
        }[showProject]
      }
    </>
  )
}

export default ProjectCard
