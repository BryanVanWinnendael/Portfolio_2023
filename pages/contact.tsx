import { useState } from "react"
import { sendContactForm } from "@/lib/api"
const initValues = { name: "", email: "", subject: "Contact", message: "" }
const initState = { isLoading: false, error: "", values: initValues }

const Contact = () => {
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values, isLoading, error } = state

  const onBlur = ({ target }: any) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }))

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
      isLoading: true,
    }))
    try {
      await sendContactForm(values)
      setTouched({})
      setState(initState)
    } catch (error: any) {
      console.log(error)
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }))
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-start bg-white p-5">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="md:text-9xl sm:text-8xl text-5xl font-medium">
          Contact me
        </h1>

        <div className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
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
                onBlur={onBlur}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
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
            className="mt-5 rounded-md bg-black px-10 py-2 text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
