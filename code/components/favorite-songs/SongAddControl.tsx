import { Button, HStack, Select } from "@chakra-ui/react"
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore"
import { FormEventHandler, useEffect, useState } from "react"
import { FavoriteSong, Song, SongWithId } from "../../types"
import { db } from "../../util/firebase"
import { useAuth } from "../auth/AuthUserProvider"

const songQuery = query(collection(db, 'songs'));

const SongAddControl = () => {
  const [input, setInput] = useState("")
  const [songs, setSongs] = useState<SongWithId[] | null>(null)
  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(songQuery, (querySnapshot) => {
      setSongs(querySnapshot.docs.map(obj => {
        return { ...obj.data() as Song, id: obj.id } as SongWithId;
      }));
    })
    return unsubscribe
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInput(event.target.value)
  }

  const addSong: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (input === "" || !user) return

    const songWithId = songs?.find(x => x.id === input)

    const favoriteSong: FavoriteSong = {
      name: songWithId?.name || "",
      time: songWithId?.time || "",
      artist: songWithId?.artist || "",
      language: songWithId?.language || "",
      owner: user!.uid,
    }

    setDoc(doc(db, "favorite-songs", input + "-" + user!.uid), favoriteSong)

    setInput("");
  }

  return (
    <form onSubmit={addSong}>
      <HStack shouldWrapChildren>
        <Select
          value={input}
          onChange={handleChange}
          placeholder="Pick a song (must be logged in)..."
        >
          {songs ? (songs.map((song) => <option value={song.id} key={song.id}>{song.name} - {song.artist}</option>)) : <></>}
        </Select>
        <Button type="submit">Add Song</Button>
      </HStack>
    </form>
  )
}

export default SongAddControl
