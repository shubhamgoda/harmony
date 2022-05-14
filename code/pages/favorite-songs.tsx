import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import SongHeading from "../components/favorite-songs/FavoriteSongs"
import { db } from "../util/firebase"
import { Song, SongWithId } from "../types"
import SongList from "../components/favorite-songs/SongList"
import SongAddControl from "../components/favorite-songs/SongAddControl"

const songQuery = query(collection(db, 'songs'));

const FavoriteSongs = () => {
  const [songs, setSongs] = useState<SongWithId[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(songQuery, (querySnapshot) => {
      setSongs(querySnapshot.docs.filter(obj => obj.get('favorite')).map(obj => {
        return { ...obj.data() as Song, id: obj.id, trash: true } as SongWithId;
      }));
    })
    return unsubscribe
  }, [])

  return (
    <Layout title="Favorite Songs">
      <h1 style={{ textAlign: "center" }}>Favorite Songs</h1>
      <h2 style={{ textAlign: "center" }}>Here are your favorite songs:</h2>
      <VStack spacing={4}>
        <SongAddControl />
        {songs ? <SongList songs={songs} /> : <Spinner />}
      </VStack>
    </Layout>
  )
}

export default FavoriteSongs
