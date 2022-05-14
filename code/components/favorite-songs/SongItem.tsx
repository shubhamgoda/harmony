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
  const filename: string = trash ? id.substring(0, id.lastIndexOf("-")) : id
  const canRemove = trash && user
  let audio: HTMLAudioElement;
  getDownloadURL(ref(storage, 'songs/' + filename + '.mp3'))
    .then((url: string) => {
      audio = new Audio(url)
    })
    .catch((error: string) => {
      console.log(error)
    });

  const playSong = () => {
    if (audio!.paused) {
      audio!.play()
    }
    else {
      audio!.currentTime = 0
    }
  }

  const pauseSong = () => {
    if (!audio!.paused) {
      audio!.pause()
    }
  }

  const deleteSong = () => {
    pauseSong()
    const docRef = doc(db, 'favorite-songs', id);
    deleteDoc(docRef);
  }

  return (
    <HStack w="100%">
      <Text>
        {name} - {artist} ({time})
      </Text> :
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
      {canRemove && <IconButton
        aria-label="delete song"
        size="xs"
        variant="solid"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={deleteSong}
      />}
    </HStack>
  )
}

export default SongItem
