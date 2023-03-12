import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import ShowProject from "./showProject"

const ProjectCardHome = ({
  title,
  content,
  date,
  tags,
}: {
  title: string
  content: string
  date: string
  tags: string
}) => {
  const [showProject, setShowProject] = useState("")

  return (
    <>
      {showProject !== "" && (
        <>
          <div className="fixed inset-0 h-full w-full z-50 bg-black opacity-80"></div>
          <IoCloseOutline className="fixed top-5 left-5 text-white cursor-pointer z-[60] h-10 w-10" />
        </>
      )}
      <div className="m-5 w-full">
        <p className="text-gray-400">{date}</p>
        <p className="text-4xl font-bold">{title}</p>
        <p className="mb-9 text-gray-400">{tags}</p>
        <p className="mb-9 text-2xl">{content}</p>
        <p
          className="text-lg underline font-sans cursor-pointer"
          onClick={() => setShowProject(title)}
        >
          Read more
        </p>
        <hr className="mb-9 mt-9 h-0 text-gray-500 bg-gray-500" />
      </div>
      <ShowProject showProject={showProject} setShowProject={setShowProject} />
    </>
  )
}

export default ProjectCardHome
