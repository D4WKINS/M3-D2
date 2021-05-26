

let content = document.getElementById("albums")
const artists = ["Linkin Park","Metallica","Behemoth","Eminem",""]
window.onload = () =>{
  getAlbums(artists)

 
}

const getAlbums = async (query) => {
  query.forEach( async artist => { // Fetch, display, repeat!
    try{// attempts to run
      let getData = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
      const response = await getData.json()
      const data = await response.data
    CreateAlbumList(artist,AlbumImg(data))
   }
    catch(err){// if an error occurs an error msg is executed
      return console.error("Something F'd Up!",err)
    }
    finally{// Finally is executed whether their is an error or not
      console.log("Finish")
    }
  
})
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
