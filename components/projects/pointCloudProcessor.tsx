import { Dialog } from "@headlessui/react"
import DroneImg from "@/public/drone.jpg"
import DroneImg2 from "@/public/drone2.jpg"
import DroneImg3 from "@/public/drone3.jpg"
import DroneImg4 from "@/public/drone4.jpg"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import { motion } from "framer-motion"

const PointCloudProcessor = ({
  showProject,
  setShowProject,
}: {
  showProject: string
  setShowProject: (arg: string) => void
}) => {
  return (
    <Dialog
      as="div"
      className="fixed inset-0 w-full h-full my-5 flex justify-center z-50 overflow-y-auto rounded-sm"
      open={showProject === "Point Cloud Processor"}
      onClose={() => setShowProject("")}
    >
      <Dialog.Panel className="md:w-1/2 md:p-0 p-5">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="bg-[#111111] text-white w-full pb-12 border-[#2c2e30] border rounded-sm"
        >
          <Image
            src={DroneImg}
            alt="Drone image"
            className="w-full h-96 object-cover object-center"
          />
          <div className="md:mx-20 mx-12 mt-12">
            <div className="flex justify-between">
              <p className="text-lg text-[#888] font-semibold">
                AI, Desktop Application and Point Cloud
              </p>
              <p className="text-lg text-[#888] font-semibold">March 2023</p>
            </div>
            <p className="text-4xl mt-2 font-bold">Point Cloud Processor</p>
            <hr className="h-[1px] mt-3 text-[#494a4d] bg-[#494a4d] border-t-0" />

            <p className="text-xl mt-4 underline">Problem</p>
            <p className="mt-1">
              For my Graduation project my group and I had to make a project
              that was about detecting planes inside a point cloud, in order to
              get information about all the planes in a point cloud.
            </p>

            <p className="text-xl mt-4 underline">The program</p>
            <p className="mt-1">This program is seperated into 2 parts:</p>
            <ul className="list-disc list-inside mt-1 font-sans text-md">
              <li>
                The desktop application that was made in Pyton using the PyQt5
                library.
              </li>
              <li>
                The model that will actually process the point cloud was made
                with Python
              </li>
            </ul>

            <p className="text-xl mt-4 underline">Process</p>
            <ul className="list-disc list-inside mt-1 font-sans text-md">
              <li>Load the point cloud</li>
              <li>Use RANSAC to detect planes</li>
              <li>
                Possibly cluster using a cluster strategy like DBSCAN or
                agglomerative clustering, using no clustering is also possible
              </li>
              <li>Save each of the planes as a .ply file</li>
              <li>
                Generate a color range for each plane and save the entire point
                cloud with the colors
              </li>
              <li>Calculate the surface area of each plane</li>
              <li>Write the info for each plane to a .csv file</li>
            </ul>

            <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />

            <div className="flex flex-col gap-5 my-5">
              <p className="text-base text-[#888] font-semibold">Home page</p>
              <Image
                src={DroneImg2}
                alt="Drone image 2"
                className="w-full h-96 object-cover object-center"
              />
              <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
              <p className="text-base text-[#888] font-semibold">
                Settings page
              </p>
              <Image
                src={DroneImg3}
                alt="Drone image 3"
                className="w-full h-96 object-cover object-center"
              />
              <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
              <p className="text-base text-[#888] font-semibold">Viewer</p>
              <Image
                src={DroneImg4}
                alt="Drone image 4"
                className="w-full h-96 object-cover object-center"
              />
            </div>

            <p className="text-xl mt-4 mb-4">
              For an in depth explanation about the app you can visit the github
              page.
            </p>

            <div className="flex gap-5">
              <div>
                <p className="text-lg text-[#888] font-semibold">Download</p>
                <p
                  className="w-full flex items-center text-blue-200 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://github.com/BryanVanWinnendael/Drone_project/releases/latest",
                      "_blank"
                    )
                  }
                >
                  Download <IoIosArrowForward />
                </p>
              </div>
              <div>
                <p className="text-lg text-[#888] font-semibold">Code</p>
                <p
                  className="w-full flex items-center text-blue-200 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://github.com/BryanVanWinnendael/Drone_project",
                      "_blank"
                    )
                  }
                >
                  View code <IoIosArrowForward />
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <p
                className="mt-5 rounded-md bg-black px-10 py-2 text-white cursor-pointer hover:opacity-80 duration-200"
                onClick={() => setShowProject("")}
              >
                Go back
              </p>
            </div>
          </div>
        </motion.div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default PointCloudProcessor
