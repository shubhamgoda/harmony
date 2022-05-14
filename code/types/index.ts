export type Song = {
  name: string,
  time: string,
  artist: string,
  favorite: boolean,
  language: string,
  trash: boolean
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