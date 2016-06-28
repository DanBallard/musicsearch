function getMusic(){
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList){
  
  var songListElem = document.getElementById('song-list');
  console.log(songList);
  
  for (var i = 0; i < songList.length; i++) {
    var currentSong = songList[i]; 
    var song = '<div class="col-sm-4">'
    song += "<h3>"+currentSong.title+"</h3>>";
    song += "<h4>"+currentSong.artist+"</h4>";
    song += "<img src="+currentSong.albumArt+" alt= album art>" + "</img>";
    song += "<h5>"+currentSong.collection+"</h5>";
    song += "<h5>"+currentSong.price+"</h5>";
    song += '<audio controls = "controls" preload="none"><source src="' +currentSong.preview+ '" type=audio/mp4></audio></div>';

    songListElem.innerHTML += song
  } 

  
}
    


function clear(){
  document.getElementById('song-list').innerHTML = '';
}

