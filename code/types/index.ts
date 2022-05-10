export type Song = {
  name: string,
  time: string,
  artist: string
}

export type SongWithId = Song & {
  id: string
}
