import { HStack, Button, Text } from "@chakra-ui/react"
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { SongWithId } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  readonly song: SongWithId
}

const SongItem = ({ song: { id, name, time, artist } }: Props) => {
  const docRef = doc(db, 'tasks', id);

  const playSong = () => {
    console.log("hi");
  }

  return (
    <HStack w="100%">
      <Text>
        {name} - {artist} ({time})
      </Text>
      <Button
        aria-label="play song"
        size="lg"
        variant="ghost"
        colorScheme="blue"
        onClick={playSong}
      />
    </HStack>
  )
}

export default SongItem