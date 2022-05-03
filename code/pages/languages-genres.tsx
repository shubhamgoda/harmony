import React from "react"
import Layout from "../components/layout/Layout"

const LanguageCard = (props) => (
  <div>
    <h3>{props.language}</h3>
  </div>
)

let languages = ['English', 'Hindi', 'German', 'Telugu', 'Tamil']

const LanguagesGenres = () => (
  <div>
    <Layout title="Languages and Genres">
      <h1 style={{ textAlign: "center" }}>Languages & Genres</h1>
      <div style={{ textAlign: "center" }}>
        {
          languages.map((l, i) => {
            return <LanguageCard language={l} key={l}></LanguageCard>
          })
        }
      </div>
    </Layout>
  </div>
  // <div>
  // <Layout title="Languages and Genres">
  //   {/* <h1 style={{ textAlign: 'center' }}>Languages & Genres</h1>
  //   <p style={{ textAlign: "center" }}> </p> */}
  //   {
  //     languages.forEach((l, i) => {
  //       <LanguageCard language={l}></LanguageCard>
  //     })
  //   }
  // </Layout>
  // </div>
)

export default LanguagesGenres
