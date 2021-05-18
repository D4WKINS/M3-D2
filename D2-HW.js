

let content = document.getElementById("albums")
let row = document.querySelector(".titleMobileHomePage .row")
const artists = ["Metallica","Behemoth","Eminem"]


window.onload =()=>{
  getAlbums(artists)
}

const getAlbums = (query) =>{
  query.forEach(artist => { // 3 times
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
  .then(response => response.json())
  .then(data => data.data)
  .then( albums=> {
    CreateAlbumList(artist,AlbumImg(albums))
  })
});
}


function CreateAlbumList(name,covers){
content.innerHTML+= `
    <h3 class="marginTop titleMobileHomepage">${name}</h3>
    <div class="row mb-3 text-center " >
      ${covers}
      </div>
      </div>
      `

}


function AlbumImg(albums){ 
  console.log(albums)
  albums.forEach(song=> // 25 times for each song
` <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
    <img
      src="${song.album.cover}"
      class="img-fluid mb-1 homePageImage"
      alt=""
    />
    <p class="mt-2 font-weight-bold">${song.title}</p>
  </div>
  `)
}

