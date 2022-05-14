import { DeleteIcon } from "@chakra-ui/icons"
import { HStack, Button, Text, IconButton } from "@chakra-ui/react"
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { SongWithId } from "../../types"
import { db } from "../../util/firebase"
import { getStorage, ref, getDownloadURL } from "firebase/storage";

type Props = {
  readonly song: SongWithId
}

const SongItem = ({ song: { id, name, time, artist } }: Props) => {
  const docRef = doc(db, 'songs', id);
  const storage = getStorage();

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
      getDownloadURL(ref(storage, 'songs/' + id + '.mp3'))
        .then((url: any) => {
          audio = new Audio(url)
          audio.play()
          paused = false
        })
        .catch((error: any) => {
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
    updateDoc(docRef, {
      favorite: false
    });
  }

  return (
    <HStack w="100%">
      <Text>
        {name} - {artist} ({time})
      </Text>
      <Button
        variant="ghost"
        onClick={playSong}
      >Play</Button>
      <Button
        variant="ghost"
        onClick={pauseSong}
      >Pause</Button>
      <IconButton
        aria-label="delete song"
        size="xs"
        variant="ghost"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={deleteSong}
      />
    </HStack>
  )
}

export default SongItem
