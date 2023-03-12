import Link from "next/link"
import ProjectCardHome from "./projectCardHome"

const About = () => {
  const calculateAge = () => {
    const birthDate = new Date("2002-03-29")
    const currentDate = new Date()
    const age = currentDate.getFullYear() - birthDate.getFullYear()
    const m = currentDate.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
      return age - 1
    }
    return age
  }

  return (
    <div className="w-full h-full p-10">
      <section className="h-96 sm:flex mb-96">
        <div className="sm:w-1/2 sm:h-12 sm:top-1/3 sm:m-5 sm:my-0 my-5">
          <p className="md:text-8xl sm:text-7xl text-5xl font-semibold">
            About
          </p>
          <p className="md:text-8xl sm:text-7xl text-5xl font-semibold">me</p>
        </div>
        <article className="font-semibold text-2xl sm:w-1/2">
          <p>
            My name is Bryan Van Winnendael and I&apos;m {calculateAge()} years
            old.
          </p>
          <p>
            I study computer science at ucll and I&apos;m now in my third year.
          </p>
          <p className="mt-12">
            I&apos;m a full stack developer and I&apos;m always looking for new
            challenges.
          </p>
          <p>
            On this site you can find some of my projects that I&apos;ve made.
          </p>
        </article>
      </section>

      <section className="h-full sm:flex mb-96">
        <div className="sm:w-1/2 sm:sticky sm:h-12 top-1/3 sm:m-5 sm:my-0 my-5">
          <p className="md:text-8xl sm:text-7xl text-5xl font-semibold">
            Recent
          </p>
          <p className="md:text-8xl sm:text-7xl text-5xl font-semibold">
            projects
          </p>
        </div>
        <article className="flex flex-col items-center sm:w-1/2">
          <ProjectCardHome
            title="Point Cloud Processor"
            date="March 2023"
            tags="AI, Desktop Application and Point Cloud"
            content="With Point Cloud Processor you can process point clouds. You segment and classify them."
          />
          <ProjectCardHome
            title="Noted"
            date="June 2022"
            tags="Desktop Application"
            content="Noted is desktop application that allows you to write markdown files and preview them in real time."
          />
          <ProjectCardHome
            title="TwitterClone"
            date="March 2022"
            tags="Website and Social media"
            content="TwitterClone, like twitter, is a social media platform. Make a post, comment and like a post and follow other users. Or create an api-key and use the api."
          />
          <Link href="/projects" className="m-5 underline">
            View more
          </Link>
        </article>
      </section>

      <section className="h-screen sm:flex items-center gap-20">
        <div className="sm:w-1/2 sm:my-0 my-5">
          <p className="md:text-8xl sm:text-7xl text-5xl font-semibold">
            Still
          </p>
          <p className="md:text-8xl sm:text-7xl text-5xl font-semibold">
            interested?
          </p>
        </div>
        <article className="font-semibold sm:text-2xl sm:w-1/2 sm:m-5">
          <p className="text-2xl">
            Check out my CV or contact me if you want to know more about me.
          </p>
          <div className="flex sm:flex-row flex-col gap-5 mt-5 w-full md:text-lg text-base">
            <button
              onClick={() => {
                window.open("/cv.pdf", "_blank")
              }}
              className="bg-black text-white text-center md:px-5 md:py-3 px-3 py-2 rounded-md hover:opacity-80 duration-200"
            >
              View my CV
            </button>
            <Link
              href="/contact"
              className="bg-black text-white text-center md:px-5 md:py-3 px-3 py-2 rounded-md hover:opacity-80 duration-200"
            >
              Contact me
            </Link>
          </div>
        </article>
      </section>
    </div>
  )
}

export default About
