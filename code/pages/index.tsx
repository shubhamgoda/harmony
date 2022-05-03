import { Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout/Layout"

const IndexPage = () => (
  <Layout title="Home">
    <Heading my="4">
      Harmony
    </Heading>
    <Text fontSize="md" my="3">
      The #1 source for all your favorite music
    </Text>
  </Layout>
)

export default IndexPage
