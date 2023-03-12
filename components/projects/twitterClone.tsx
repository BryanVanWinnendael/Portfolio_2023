import { Dialog } from "@headlessui/react"
import TwitterImg from "@/public/twitter.jpg"
import TwitterImg2 from "@/public/twitter_home.jpg"
import TwitterImg3 from "@/public/twitter_dark.jpg"
import TwitterImg4 from "@/public/twitter_comments.jpg"
import TwitterImg5 from "@/public/twitter_following.jpg"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import { motion } from "framer-motion"

const TwitterClone = ({ showProject, setShowProject }: any) => {
  return (
    <Dialog
      as="div"
      className="fixed inset-0 w-full h-full my-5 flex justify-center z-50 overflow-y-auto rounded-sm"
      open={showProject === "TwitterClone"}
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
            src={TwitterImg}
            alt="TwitterClone image"
            className="w-full h-96 object-cover object-center"
          />
          <div className="md:mx-20 mx-12 mt-12">
            <div className="flex justify-between">
              <p className="text-lg text-[#888] font-semibold">
                Website and Social media
              </p>
              <p className="text-lg text-[#888] font-semibold">March 2022</p>
            </div>
            <p className="text-4xl mt-2 font-bold">TwitterClone</p>
            <hr className="h-[1px] mt-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
            <p className="mt-2">
              TwitterClone, like twitter, is a social media platform. Make a
              post, comment and like a post and follow other users. Or create an
              api-key and use the api.
            </p>
            <p className="mt-2">TwitterClone is made with phoenix and mysql.</p>
            <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />

            <div className="flex flex-col gap-5 my-5">
              <p className="text-base text-[#888] font-semibold">Light mode</p>
              <Image
                src={TwitterImg2}
                alt="TwitterClone image 2"
                className="w-full h-96 object-cover object-center"
              />
              <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
              <p className="text-base text-[#888] font-semibold">Dark mode</p>
              <Image
                src={TwitterImg3}
                alt="TwitterClone image 3"
                className="w-full h-96 object-cover object-center"
              />
              <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
              <p className="text-base text-[#888] font-semibold">
                Comments dark mode
              </p>
              <Image
                src={TwitterImg4}
                alt="TwitterClone image 4"
                className="w-full h-96 object-cover object-center"
              />
              <hr className="h-[1px] my-3 text-[#494a4d] bg-[#494a4d] border-t-0" />
              <p className="text-base text-[#888] font-semibold">
                Following page
              </p>
              <Image
                src={TwitterImg5}
                alt="TwitterClone image 5"
                className="w-full h-96 object-cover object-center"
              />
            </div>

            <div className="flex gap-5">
              <div>
                <p className="text-lg text-[#888] font-semibold">Code</p>
                <p
                  className="w-full flex items-center text-blue-200 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://github.com/BryanVanWinnendael/TwitterClone",
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

export default TwitterClone
