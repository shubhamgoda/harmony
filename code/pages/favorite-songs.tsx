import { Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import { db } from "../util/firebase"
import { FavoriteSong, FavoriteSongWithId } from "../types"
import SongList from "../components/favorite-songs/SongList"
import SongAddControl from "../components/favorite-songs/SongAddControl"
import { useAuth } from "../components/auth/AuthUserProvider"

const FavoriteSongs = () => {
  const [songs, setSongs] = useState<FavoriteSongWithId[] | null>(null)

  const { user } = useAuth()
  const songQuery = user ? query(collection(db, 'favorite-songs'), where('owner', '==', user!.uid)) : query(collection(db, 'placeholder'));

  useEffect(() => {
    const unsubscribe = onSnapshot(songQuery, (querySnapshot) => {
      setSongs(querySnapshot.docs.map(obj => {
        return { ...obj.data() as FavoriteSong, id: obj.id } as FavoriteSongWithId;
      }));
    })
    return unsubscribe
  }, [user])

  return (
    <Layout title="Favorite Songs">
      <br></br>
      <h1 style={{ textAlign: "center" }}>Favorite Songs</h1>
      <h2 style={{ textAlign: "center" }}>Here are your favorite songs:</h2>
      <br></br>
      <VStack spacing={4}>
        <SongAddControl />
        {songs ? <SongList songs={songs} trash={true} /> : <Spinner />}
      </VStack>
      <br></br>
    </Layout>
  )
}

export default FavoriteSongs
