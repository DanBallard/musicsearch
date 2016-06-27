function getMusic(){
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList){
  
  var songListElem = document.getElementById('song-list');
  console.log(songList);
  
  for (var i = 0; i < songList.length; i++) {
    var currentSong = songList[i]; 
    songListElem.innerHTML += "<h3>"+currentSong.title+"</h3>>";
    songListElem.innerHTML += "<h4>"+currentSong.artist+"</h4>";
    songListElem.innerHTML += "<img src="+currentSong.albumArt+" alt= album art>" + "</img>";
    songListElem.innerHTML += "<h5>"+currentSong.collection+"</h5>";
    songListElem.innerHTML += "<h5>"+currentSong.price+"</h5>";
    songListElem.innerHTML += '<audio controls = "controls" preload="none"><source src="' +currentSong.preview+ '" type=audio/mp4></audio>';
  } 

  
}
    


function clear(){
  document.getElementById('song-list').innerHTML = '';
}

