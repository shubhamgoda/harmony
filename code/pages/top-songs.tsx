import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import { db } from "../util/firebase"
import { Song, SongWithId } from "../types"
import SongList from "../components/favorite-songs/SongList"
import SongAddControl from "../components/favorite-songs/SongAddControl"
import LanguageList from "../components/favorite-songs/LanguageList"

const LanguagesGenres = () => {
  const [songs, setSongs] = useState<SongWithId[] | null>(null)

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const languageName = urlParams.get('name')
  const languageID = languageName?.toLowerCase()
  const songQuery = query(collection(db, 'songs'), where("language", "==", "" + languageID));

  useEffect(() => {
    const unsubscribe = onSnapshot(songQuery, (querySnapshot) => {
      setSongs(querySnapshot.docs.map(obj => {
        return { ...obj.data() as Song, id: obj.id, trash: false } as SongWithId;
      }));
    })
    return unsubscribe
  }, [])

  return (
    <Layout title="Favorite Songs">
      <h1 style={{ textAlign: "center" }}>Languages & Genres</h1>
      <h2 style={{ textAlign: "center" }}>Here are the songs that can be played in {languageName}:</h2>
      <VStack spacing={4}>
        {songs ? < SongList songs={songs} /> : <Spinner />}
      </VStack>
    </Layout>
  )
}
export default LanguagesGenres