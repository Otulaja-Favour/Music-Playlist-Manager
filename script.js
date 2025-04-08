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





  const longSongs = playlist.filter(song => {
    const durationParts = song.duration.split(":");
    const minutes = parseInt(durationParts[0]);
    const seconds = parseInt(durationParts[1]);
    const totalSeconds = minutes * 60 + seconds;
    return totalSeconds > 300; 
  });
  console.table(longSongs);
  
 
  const upperCasePlaylist = playlist.map(song => ({
    title: song.title.toUpperCase(),
    artist: song.artist.toUpperCase(),
    duration: song.duration,
    genre: song.genre,
    playCount: 0
  }));
  console.table(upperCasePlaylist);
  
  // Step 5: String Manipulation
  function formatDuration(duration) {
    const parts = duration.split(":");
    const minutes = parseInt(parts[0]);
    const seconds = parseInt(parts[1]);
    return `${minutes} minutes and ${seconds} seconds`;
  }
  
  playlist.forEach(song => {
    const formatted = formatDuration(song.duration);
    console.log(`${song.title}: ${formatted}`);
  });
  

  function findSong(searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return playlist.filter(song =>
      song.title.toLowerCase().includes(lowerSearchTerm) ||
      song.artist.toLowerCase().includes(lowerSearchTerm)
    );
  }
  
  const queenSongs = findSong("queen");
  console.table(queenSongs);
  
  // Step 7: Sort the Playlist
  const sortedByTitle = [...playlist].sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  console.table(sortedByTitle);
  
  const sortedByDuration = [...playlist].sort((a, b) => {
    const durationAparts = a.duration.split(":");
    const totalSecondsA = parseInt(durationAparts[0]) * 60 + parseInt(durationAparts[1]);
    const durationBparts = b.duration.split(":");
    const totalSecondsB = parseInt(durationBparts[0]) * 60 + parseInt(durationBparts[1]);
    return totalSecondsA - totalSecondsB;
  });
  console.table(sortedByDuration);
  
  // Step 8: Fun Challenge - Random Song Picker
  function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * playlist.length);
    const randomSong = playlist[randomIndex];
    console.log(`Now playing a random song: ${randomSong.title} by ${randomSong.artist}`);
  }
  
  playRandomSong();
   