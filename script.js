const playlist = [
	{ title: "Sweet Dreams", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
	{ title: "davido", artist: "Eurythmics", duration: "4:54", genre: "Rock" },
	{ title: "wiskid", artist: "Eurythmics", duration: "5:4", genre: "Rock" },
	{ title: "olamides", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
	{ title: "badoo", artist: "Eurythmics", duration: "4:54", genre: "Hip-Hop" },
	{ title: "fav", artist: "Eurythmics", duration: "5:4", genre: "Pop" },
	{ title: "lextar", artist: "Eurythmics", duration: "4:54", genre: "Hip-Hop" },

  ];
  console.table(playlist)

  playlist.forEach((value, index) => {
    console.table(`Now playing: ${value.name} by ${value.artist} ${value.duration} - ${value.genre}: Pop`)
  })

  const rockSong = playlist.filter(song => song.genre === "Pop")
  console.table(rockSong)

  console.table(playlist.filter(song => song.duration > "5:00"))


//   console.table(upperCasePlaylist);
const upperCasePlaylist = playlist.map(({artist, title, index}) => ({
    artist: artist.toUpperCase(),
    title: title.toUpperCase()
}))
console.table(upperCasePlaylist)


// function formatDuration(){
//    const durat = playlist.split(({"duration"}) => ({

//    }))
// }
// formatDuration()