import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import { db } from "../util/firebase"
import { Song, SongWithId } from "../types"
import SongList from "../components/favorite-songs/SongList"
import SongAddControl from "../components/favorite-songs/SongAddControl"
import LanguageList from "../components/favorite-songs/LanguageList"

const songQuery = query(collection(db, 'songs'));
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const languageName = urlParams.get('name')
const languageID = languageName?.toLowerCase()


const LanguagesGenres = () => {
  const [songs, setSongs] = useState<SongWithId[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(songQuery, (querySnapshot) => {
      setSongs(querySnapshot.docs.map(obj => {
        return { ...obj.data() as Song, id: obj.id } as SongWithId;
      }));
    })
    return unsubscribe
  }, [])

  return (
    <Layout title="Favorite Songs">
      <h1 style={{ textAlign: "center" }}>Languages & Genres</h1>
      <h2 style={{ textAlign: "center" }}>Here are the songs that can be played in {languageName}:</h2>
      <VStack spacing={4}>
        {song ? < LanguageList language={song} /> : <Spinner />}
      </VStack>
    </Layout>
  )
}
export default LanguagesGenres