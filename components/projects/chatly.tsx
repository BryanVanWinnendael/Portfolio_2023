import { Dialog } from "@headlessui/react"
import ChatlyImg from "@/public/chatly.jpg"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import { motion } from "framer-motion"

const Chatly = ({
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
      open={showProject === "Chatly"}
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
            src={ChatlyImg}
            alt="Chatly image"
            className="w-full h-96 object-cover object-center"
          />
          <div className="md:mx-20 mx-12 mt-12">
            <div className="flex justify-between">
              <p className="text-lg text-[#888] font-semibold">
                Website and Video Chat
              </p>
              <p className="text-lg text-[#888] font-semibold">January 2023</p>
            </div>
            <p className="text-4xl font-bold">Chatly</p>
            <hr className="h-[1px] mt-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
            <p className="mt-2">
              Chatly is an online website that allows you to chat with people
              from around the world.
            </p>
            <p className="mt-2">
              Chatly is made with nextjs, agora, supabase and tailwind.
            </p>
            <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />

            <div className="flex gap-5">
              <div>
                <p className="text-lg text-[#888] font-semibold">Website</p>
                <p
                  className="w-full flex items-center text-blue-200 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://chatly-bryanvanwinnendael.vercel.app",
                      "_blank"
                    )
                  }
                >
                  View website <IoIosArrowForward />
                </p>
              </div>
              <div>
                <p className="text-lg text-[#888] font-semibold">Code</p>
                <p
                  className="w-full flex items-center text-blue-200 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://github.com/BryanVanWinnendael/Chatly",
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

export default Chatly
