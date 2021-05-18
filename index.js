let albums = []
let error = false


 function searchDeezer(query){

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, { //when a url contains the word search this means you have access to all data 
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "5d5e5bfd13msh98b7a74737a2158p15c5fejsnaf6fcce44748",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
          }
        })
        .then((response) => response.json()) //Converted to JSON object
        .then((data) => { // data contains an array of albums by an artist, which albums it contains depends on the name of the artist that was passed to the query parameter e.g. passing 'eminem' will store all albums by eminem in the response
          if(data.data){
            console.log(data) 
            const obj = { title: query, albums:data.data }//We create an object that contains a key with the name of the artist and a key that contains and array with songs from that artist albums
            console.log(obj)
            albums.push(obj)
            console.log(albums)
            return data
          }else{
            error = true
          }
        })
        .catch((err) => {
          console.log("rejected");
          console.error(err)
          error = true
        });

  }

  function AlbumsRow(title, albumsHTML){//title = search, albumsHTML = result of search
return`
    <div class="container mb-5">
    <h3 class="marginTop titleMobileHomepage">${title}</h3>
        <div class="row mb-3 text-center">
            ${albumsHTML}
        </div>
  </div>
`

  }
  const singleAlbum= (album) =>{//Template literal that contains the html for a single album cover and title
return `

    <div class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2 single-album" id="${album.id}"> 
          <img
            src="${album.cover}"
            class="img-fluid mb-1 homePageImage"
            alt=""
          />
          <p class="mt-2 font-weight-bold">${album.title}</p>
        </div>
`
  }

  window.onload = function(){
    searchDeezer("Eminem")
    searchDeezer("Metallica")
    searchDeezer("Behemoth")

    const render = document.getElementById('render')
      render.addEventListener('click',(event)=>{
        //   alert(event.target)
          const pageContent =document.querySelector('.contentSection') // This contains the content of the albums
          let pageContentHTML = "" 
          pageContent.childNodes.forEach((node,index)=>{ //(node = a child node, index= the index position)
              if(index!==1){ // This removes all content from the page apart from the nav, the nave is the first child node [1] 
                  node.remove()//hence why the condition test if the index is not equal to 1 meaning remove everything apart the nav
              }
             
          })

          albums.forEach(albumResult =>{ // for each object(album) in the albums array...

              let rowContent =""
              const title = albumResult.title // Obtains the artist name
            //   console.log(title)
              const data = albumResult.albums // Access to the artist array
              console.log(data)

              data.forEach(result =>{
                  const title = result.title_short // Obtains the short version of the song title
                  const cover = result.album.cover_medium // Obtains the short version of the song title
                  const id = result.album.id // Obtains the album song id
    
                  const album = {cover, title, id} // Insert the title, cover and id variables into a object
                  rowContent += singleAlbum(album) // Pass the object to singleAlbum function to be used from with the function
              })
              pageContentHTML += AlbumsRow(title,rowContent)
              rowContent =""
            })
          pageContent.innerHTML += pageContentHTML
    })
}

function countUniqueAlbums (){
    const albums = document.querySelectorAll(".single-album")
    const ids= []
    albums.forEach((album) =>{
        ids.push(album.id)
    })
    const uniqueSet = new Set(ids);//The Set object lets you store unique values of any type, whether primitive values or object references.
    console.log(uniqueSet.size)
}

