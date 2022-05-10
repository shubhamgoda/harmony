import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import SongHeading from "../components/top-songs/TopSongs"
import { db } from "../util/firebase"
import { Song, SongWithId } from "../types"
import SongList from "../components/top-songs/SongList"

const songQuery = query(collection(db, 'songs'));

const TopSongs = () => {
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
    <Layout title="Top Songs">
      <h1 style={{ textAlign: "center" }}>Top Songs</h1>
      <h2 style={{ textAlign: "center" }}>Here are your most played songs:</h2>
      <VStack spacing={4}>
        {songs ? <SongList songs={songs} /> : <Spinner />}
      </VStack>
    </Layout>
  )
}

export default TopSongs
