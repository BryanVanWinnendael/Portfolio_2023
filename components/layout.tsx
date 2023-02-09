import { ReactElement } from "react"
import Navbar from "@/components/navbar"
import Footer from "./footer"

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      <main className="pt-14 w-full">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
