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
    time: "3:00 mins",
    artist: "Bruno Mars"
  },
  {
    name: "Tum Hi Ho",
    time: "3:00 mins",
    artist: "Arijit Singh"
  },
  {
    name: "Despacito",
    time: "3:00 mins",
    artist: "Luis Fonsi, Daddy Yankee"
  },
  {
    name: "Tujhe Dekha To",
    time: "3:00 mins",
    artist: "Kumar Sanu, Lata Mangeshkar"
  },
  {
    name: "pushin P",
    time: "3:00 mins",
    artist: "Gunna"
  },
]

const SongCard = (props) => (
  <div>
    <p style={{ textAlign: "center" }}>{props.song.name} - {props.song.artist} ({props.song.time})</p>
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
  </Layout>
)

export default TopSongs
