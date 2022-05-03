import Layout from "../components/layout/Layout"
import SongHeading from "../components/top-songs/TopSongs"

type Song = {
  name: string,
  time: string,
  artist: string
}

const songData: Song[] = [
  {
    name: "Smoking Out The Window",
    time: "3:00 minutes",
    artist: "Bruno Mars"
  },
]

const SongCard = (song) => (
  <div>
    <p style={{ textAlign: "center" }}>{song.name}</p>
  </div>
)

const TopSongs = () => (
  <Layout title="Top Songs">
    <SongHeading />
    <h1 style={{ textAlign: "center" }}>Top Songs</h1>
    <h2 style={{ textAlign: "center" }}>Here are your most played songs:</h2>

    {
      songData.map((s, i) => {
        return <SongCard song={s} key={i}></SongCard>
      })
    }
    <p style={{ textAlign: "center" }}> Smoking Out The Window - Bruno Mars</p>
    <p style={{ textAlign: "center" }}> Tum Hi Ho - Arijit Singh</p>
    <p style={{ textAlign: "center" }}> Despacito - Luis Fonsi, Daddy Yankee</p>
    <p style={{ textAlign: "center" }}> Tujhe Dekha To - Kumar Sanu, Lata Mangeshkar</p>
    <p style={{ textAlign: "center" }}> pushin P - Gunna</p>
  </Layout>
)

export default TopSongs
