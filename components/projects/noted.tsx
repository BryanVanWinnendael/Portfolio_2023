import { Dialog } from "@headlessui/react"
import NotedImg from "@/public/noted.jpg"
import NotedImg2 from "@/public/noted_light.png"
import NotedImg3 from "@/public/noted_settings.png"
import NotedImg4 from "@/public/noted_tutorial.png"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import { motion } from "framer-motion"

const Noted = ({ showProject, setShowProject }: any) => {
  return (
    <>
      <Dialog
        as="div"
        className="fixed inset-0 w-full h-full my-5 flex justify-center z-50 overflow-y-auto rounded-sm"
        open={showProject === "Noted"}
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
              src={NotedImg}
              alt="Noted"
              className="w-full h-96 object-cover object-center"
            />
            <div className="mx-20 mt-12">
              <p className="text-lg text-[#888] font-semibold">Desktop app</p>
              <p className="text-4xl mt-2 font-bold">Noted</p>
              <hr className="h-[1px] mt-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
              <p className="mt-2 d">
                Noted is desktop application that allows you to write markdown
                files and preview them in real time.
              </p>
              <p className="mt-2 d">
                Noted is made with electron, react and draftjs.
              </p>
              <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />

              <div className="flex flex-col gap-5 my-5">
                <p className="text-base text-[#888] font-semibold">
                  Light mode
                </p>
                <Image
                  src={NotedImg2}
                  alt="Noted"
                  className="w-full h-96 object-cover object-center"
                />
                <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
                <p className="text-base text-[#888] font-semibold">
                  Settings page dark mode
                </p>
                <Image
                  src={NotedImg3}
                  alt="Noted"
                  className="w-full h-96 object-cover object-center"
                />
                <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
                <p className="text-base text-[#888] font-semibold">
                  Tutorial page dark mode
                </p>
                <Image
                  src={NotedImg4}
                  alt="Noted"
                  className="w-full h-96 object-cover object-center"
                />
              </div>

              <div className="flex gap-5">
                <div>
                  <p className="text-lg text-[#888] font-semibold">Download</p>
                  <p
                    className="w-full flex items-center text-blue-200 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://github.com/BryanVanWinnendael/Noted/releases/tag/v2",
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
                        "https://github.com/BryanVanWinnendael/Noted",
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
    </>
  )
}

export default Noted
