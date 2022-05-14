import { Button, HStack, Input, Select } from "@chakra-ui/react"
import { addDoc, collection, doc, onSnapshot, query, setDoc, updateDoc } from "firebase/firestore"
import { FormEventHandler, useEffect, useState } from "react"
import { Song, SongWithId } from "../../types"
import { db } from "../../util/firebase"

const songQuery = query(collection(db, 'songs'));

const SongAddControl = () => {
  const [input, setInput] = useState("")
  const [songs, setSongs] = useState<SongWithId[] | null>(null)

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
    if (input === "") return

    updateDoc(doc(db, "songs", input), {
      favorite: true
    });

    setInput("");
  }

  return (
    <form onSubmit={addSong}>
      <HStack shouldWrapChildren>
        <Select
          value={input}
          onChange={handleChange}
          placeholder="Pick a song..."
        >
          {songs ? (songs.map((song) => <option value={song.id} key={song.id}>{song.name} - {song.artist}</option>)) : <></>}
        </Select>
        <Button type="submit">Add Song</Button>
      </HStack>
    </form>
  )
}

export default SongAddControl
