import { useState } from "react"
import { sendContactForm } from "@/lib/api"
import Toast from "@/components/toast"
import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import Link from "next/link"

const initValues = { name: "", email: "", message: "" }
const initState = {
  isLoading: false,
  error: "",
  values: initValues,
}

const Contact = () => {
  const [state, setState] = useState(initState)
  const { values, isLoading, error } = state
  const [success, setSuccess] = useState(false)

  const handleCloseToast = () => setSuccess(false)

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      error: "",
      isLoading: true,
    }))
    try {
      await sendContactForm(values)
      setState(initState)
      setSuccess(true)
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }))
    }
  }

  return (
    <>
      <Head>
        <title>Contact / Bryan Van Winnendael</title>
      </Head>
      <div className="flex min-h-screen items-center justify-start bg-white sm:p-10 p-5">
        {isLoading && (
          <div className="bg-black fixed inset-0 w-full h-full z-50 opacity-80">
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-8 h-8 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
              <p className="ml-2 text-white text-xl font-semibold">
                Sending mail...
              </p>
            </div>
          </div>
        )}
        <AnimatePresence>
          {success && <Toast handleClose={handleCloseToast} />}
        </AnimatePresence>

        <div className="mx-auto w-full max-w-lg">
          <h1 className="md:text-7xl sm:text-6xl text-3xl font-medium">
            QUESTIONS?
          </h1>
          <h1 className="md:text-9xl sm:text-8xl text-5xl font-medium">
            CONTACT ME
          </h1>

          <div className="mt-5">
            {error && (
              <p className="text-xl font-semibold text-red-600">{error}</p>
            )}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={values.name}
                  onChange={handleChange}
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={values.email}
                  onChange={handleChange}
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your email
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  value={values.message}
                  onChange={handleChange}
                  name="message"
                  rows={5}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your message
                </label>
              </div>
            </div>
            <button
              onClick={onSubmit}
              disabled={isLoading}
              className="mt-5 rounded-md bg-black px-10 py-2 text-white"
            >
              Send Message
            </button>
          </div>
          <div className="mt-10">
            <p className="text-xl font-semibold mb-1">Find me online:</p>
            <div>
              <Link
                href="https://github.com/BryanVanWinnendael"
                passHref={true}
                target="_blank"
              >
                <FaGithubSquare className="inline-block text-3xl mr-2 cursor-pointer" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bryanvanwinnendael/"
                passHref={true}
                target="_blank"
              >
                <FaLinkedin className="inline-block text-3xl mr-2 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
