import { Button, HStack, Input } from "@chakra-ui/react"
import { addDoc, collection } from "firebase/firestore"
import { FormEventHandler, useState } from "react"
import { Song } from "../../types"
import { db } from "../../util/firebase"

const SongAddControl = () => {
  const [input, setInput] = useState("")

  const addSong: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (input === "") return

    // const song: Song = {
    //   name: input,
    //   time: false,
    // }
    addDoc(collection(db, 'songs'), song);

    setInput("");
  }

  return (
    <form onSubmit={addSong}>
      <HStack shouldWrapChildren>
        <Input
          value={input}
          type="text"
          placeholder="Pick a song..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Add Song</Button>
      </HStack>
    </form>
  )
}

export default SongAddControl
