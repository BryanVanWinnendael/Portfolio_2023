import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "@/components/layout"
import { useEffect, useState } from "react"
import Loading from "@/components/loading"

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  const msg = "%c Hi 👋! Welcome to my portfolio!"
  const stylesArray = [
    "font-size: 12px",
    "background: #000000",
    "display: inline-block",
    "color: #ffffff",
    "padding: 8px 19px",
    "border-radius: 8px",
    "font-weight: bold",
  ].join(";")

  console.log(msg, stylesArray)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(true)
    }
  }, [])

  return loading ? (
    <Loading setLoading={setLoading} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
