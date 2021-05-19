

let content = document.getElementById("albums")

const artists = ["Metallica","Behemoth","Eminem"]


window.onload = () =>{
  getAlbums(artists)
}

const getAlbums = async (query) => {
  query.forEach(artist => { // Fetch, display, repeat!
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
  const response = await response.json();
  const data = await data.data;

  try {
      createAlbumList(artist,AlbumImg(albums))
   }
   catch(err){
     return console.error(err)
   }
   finally{
    console("Task Finished!")
   }
 
  }
}


function CreateAlbumList(name,covers){

content.innerHTML+= `
    <h3 class="marginTop titleMobileHomepage">${name}</h3>
    <div class="row mb-3 text-center" style="max-width:1200px;  -ms-overflow-style: none;  scrollbar-width: none; flex-wrap: nowrap; height: 200px; overflow-y:scroll; overflow-x:scroll  " >
      ${covers.join('')}
      </div>
      </div>
      `
}


function AlbumImg(albums){ 
  const covers = []
// iterates through 25 items/songs in the array sends the result to another array
              albums.forEach(song=>
                 covers.push( `<div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2" style="display: inline-block;">
                                <img
                                  src="${song.album.cover}"
                                  class="img-fluid mb-1 homePageImage"
                                  alt=""
                                />
                                <p class="mt-2 font-weight-bold">${song.album.title}</p>
                              </div>
                              `))
    return covers
  
  }
