import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import ShowProject from "./showProject"

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
      <ShowProject showProject={showProject} setShowProject={setShowProject} />
    </>
  )
}

export default ProjectCard
