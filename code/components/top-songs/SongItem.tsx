import { HStack, Button, Text } from "@chakra-ui/react"
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

  // let audio = null
  // let isPlaying = false

  const playSong = () => {
    getDownloadURL(ref(storage, 'songs/' + id + '.mp3'))
      .then((url: any) => {
        let audio = new Audio(url)
        audio.play()
      })
      .catch((error: any) => {
        console.log(error)
      });
  }

  return (
    <HStack w="100%">
      <Text>
        {name} - {artist} ({time})
      </Text>
      <Button
        size="lg"
        variant="ghost"
        colorScheme="blue"
        onClick={playSong}
      >Play</Button>
    </HStack>
  )
}

export default SongItem