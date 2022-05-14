import { DeleteIcon } from "@chakra-ui/icons"
import { HStack, Button, Text, IconButton } from "@chakra-ui/react"
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { SongWithId } from "../../types"
import { db } from "../../util/firebase"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useAuth } from "../auth/AuthUserProvider"

type Props = {
  readonly song: SongWithId
  readonly trash: boolean
}

const SongItem = ({ song: { id, name, time, artist }, trash }: Props) => {
  const storage = getStorage();
  const { user } = useAuth();
  const filename = trash ? id.substring(0, id.lastIndexOf("-")) : id

  let audio: HTMLAudioElement | null = null
  let paused = false

  const playSong = () => {
    if (audio && paused) {
      audio.play()
      paused = false
    }
    else {
      if (audio) {
        audio.pause()
      }
      getDownloadURL(ref(storage, 'songs/' + filename + '.mp3'))
        .then((url: string) => {
          audio = new Audio(url)
          audio.play()
          paused = false
        })
        .catch((error: string) => {
          console.log(error)
        });
    }
  }

  const pauseSong = () => {
    if (!paused && audio) {
      audio.pause()
      paused = true
    }
  }

  const deleteSong = () => {
    const docRef = doc(db, 'favorite-songs', id);
    deleteDoc(docRef);
  }

  return (
    trash ?
      <HStack w="100%">
        <Text>
          {name} - {artist} ({time})
        </Text>
        <Button
          size='xs'
          variant="solid"
          onClick={playSong}
        >Play</Button>
        <Button
          size='xs'
          variant="solid"
          onClick={pauseSong}
        >Pause</Button>
        <IconButton
          aria-label="delete song"
          size="xs"
          variant="solid"
          colorScheme="red"
          icon={<DeleteIcon />}
          onClick={deleteSong}
        />
      </HStack>
      :
      <HStack w="100%">
        <Text>
          {name} - {artist} ({time})
        </Text>
        <Button
          size='xs'
          variant="solid"
          onClick={playSong}
        >Play</Button>
        <Button
          size='xs'
          variant="solid"
          onClick={pauseSong}
        >Pause</Button>
      </HStack>
  )
}

export default SongItem
