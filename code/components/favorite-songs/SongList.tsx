import { Text, VStack } from "@chakra-ui/react"
import { SongWithId } from "../../types"
import SongItem from "./SongItem"

type Props = {
  readonly songs: SongWithId[]
}

const SongList = ({ songs }: Props) => {
  return (
    <VStack>
      {songs.length ? (
        songs.map((song) => <SongItem key={song.id} song={song} />)
      ) : (
        <Text>There are no songs here right now 👀</Text>
      )}
    </VStack>
  )
}

export default SongList
