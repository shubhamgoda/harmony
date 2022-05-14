import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import SongHeading from "../components/favorite-songs/FavoriteSongs"
import { db } from "../util/firebase"
import { Language, LanguageWithId } from "../types"
import LanguageList from "../components/favorite-songs/LanguageList"

const languageQuery = query(collection(db, 'languages'));

const LanguagesGenres = () => {
  const [language, setLanguage] = useState<LanguageWithId[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(languageQuery, (querySnapshot) => {
      setLanguage(querySnapshot.docs.map(obj => {
        return { ...obj.data() as Language, id: obj.id } as LanguageWithId;
      }));
    })
    return unsubscribe
  }, [])

  return (
    <Layout title="Favorite Songs">
      <h1 style={{ textAlign: "center" }}>Languages & Genres</h1>
      <h2 style={{ textAlign: "center" }}>Here are the languages that can be played:</h2>
      <VStack spacing={4}>
        {language ? <LanguageList language={language} /> : <Spinner />}
      </VStack>
    </Layout>
  )
}

// const LanguageCard = (props) => (
//   <div>
//     <h3>{props.language}</h3>
//   </div>
// )

// let languages = ['English', 'Hindi', 'German', 'Telugu', 'Tamil']

// const LanguagesGenres = () => (
//   <div>
//     <Layout title="Languages and Genres">
//       <h1 style={{ textAlign: "center" }}>Languages & Genres</h1>
//       <div style={{ textAlign: "center" }}>
//         {
//           languages.map((l, i) => {
//             return <LanguageCard language={l} key={l}></LanguageCard>
//           })
//         }
//       </div>
//     </Layout>
//   </div>
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
// )

export default LanguagesGenres
