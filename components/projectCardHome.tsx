import Chatly from "./projects/chatly"
import Noted from "./projects/noted"
import TwitterClone from "./projects/twitterClone"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"

const ProjectCardHome = ({
  title,
  content,
}: {
  title: string
  content: string
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
        <p className="text-4xl mb-9 font-bold">{title}</p>
        <p className="mb-9 text-2xl">{content}</p>
        <p
          className="text-lg underline font-sans cursor-pointer"
          onClick={() => setShowProject(title)}
        >
          Read more
        </p>
        <hr className="mb-9 mt-9 h-0 text-gray-500 bg-gray-500" />
      </div>
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
        }[showProject]
      }
    </>
  )
}

export default ProjectCardHome
