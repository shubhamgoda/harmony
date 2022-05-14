import { Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import { db } from "../util/firebase"
import { Language, LanguageWithId } from "../types"
import LanguageList from "../components/languages/LanguageList"

const languageQuery = query(collection(db, 'languages'));

const LanguagesGenres = () => {
  const [languages, setLanguages] = useState<LanguageWithId[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(languageQuery, (querySnapshot) => {
      setLanguages(querySnapshot.docs.map(obj => {
        return { ...obj.data() as Language, id: obj.id } as LanguageWithId;
      }));
    })
    return unsubscribe
  }, [])

  return (
    <Layout title="Languages">
      <br></br>
      <h1 style={{ textAlign: "center" }}>Languages</h1>
      <h2 style={{ textAlign: "center" }}>Here are the languages that can be played:</h2>
      <br></br>
      <VStack spacing={4}>
        {languages ? <LanguageList languages={languages} /> : <Spinner />}
      </VStack>
      <br></br>
    </Layout>
  )
}

export default LanguagesGenres
