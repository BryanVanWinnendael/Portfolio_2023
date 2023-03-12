import React from "react"
import PointCloudProcessor from "./projects/pointCloudProcessor"
import Noted from "./projects/noted"
import TwitterClone from "./projects/twitterClone"
import Chatly from "./projects/chatly"
import Clne from "./projects/clne"
import ToDo from "./projects/toDo"

const ShowProject = ({
  showProject,
  setShowProject,
}: {
  showProject: string
  setShowProject: (arg: string) => void
}) => {
  return (
    <>
      {(() => {
        switch (showProject) {
          case "Point Cloud Processor":
            return (
              <PointCloudProcessor
                showProject={showProject}
                setShowProject={setShowProject}
              />
            )
          case "Chatly":
            return (
              <Chatly
                showProject={showProject}
                setShowProject={setShowProject}
              />
            )
          case "Noted":
            return (
              <Noted
                showProject={showProject}
                setShowProject={setShowProject}
              />
            )
          case "TwitterClone":
            return (
              <TwitterClone
                showProject={showProject}
                setShowProject={setShowProject}
              />
            )
          case "Clne":
            return (
              <Clne showProject={showProject} setShowProject={setShowProject} />
            )
          case "ToDo":
            return (
              <ToDo showProject={showProject} setShowProject={setShowProject} />
            )
          default:
            return null
        }
      })()}
    </>
  )
}

export default ShowProject
