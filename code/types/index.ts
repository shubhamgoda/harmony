export type Song = {
  name: string,
  time: string,
  artist: string,
  language: string,
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

export type FavoriteSong = Song & {
  owner: string
}

export type FavoriteSongWithId = FavoriteSong & {
  id: string
}
