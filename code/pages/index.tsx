import { Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout/Layout"


const IndexPage = () => (
  <Layout title="Home">
    <h1 style={{ textAlign: "center" }}> <span>Welcome </span><span>to</span> <span>Harmony</span></h1>
    <p style={{ textAlign: "center" }}>The #1 source for all your favorite music</p>
  </Layout>
)

export default IndexPage
