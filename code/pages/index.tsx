import { useAuth } from "../components/auth/AuthUserProvider"
import Layout from "../components/layout/Layout"

const IndexPage = () => {
  const { user, loading } = useAuth()
  return (
    <Layout title="Home">
      <h1 style={{ textAlign: "center" }}> <span>Welcome </span><span>to</span> <span>Harmony</span></h1>
      <p style={{ textAlign: "center" }}>The #1 source for all your favorite music</p>
    </Layout>
  )
}

export default IndexPage
