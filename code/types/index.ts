export type Song = {
  name: string,
  time: string,
  artist: string
}

export type Language = {
  name: string
}

export type SongWithId = Song & {
  id: string
}

export type LanguageWithId = Language & {
  id: string
}