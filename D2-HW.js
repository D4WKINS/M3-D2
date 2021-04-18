
let albums = []
let error = false

 function searchDeezer(query){

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "5d5e5bfd13msh98b7a74737a2158p15c5fejsnaf6fcce44748",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
          }
        })
        .then((response) => response.json()) //Converted to JSON object
        .then((data) => {

          if(data.data){
            const obj = { title: query, albums:data.data }
            albums.push(obj)
            console.log(albums)
            return data
          }else{
            error = true
          }
        })
        .then((data)=>{
          let lists = document.getElementById("lists")
            // lists.innerHTML +=x
            //  `
            //  <ul class ="">
            //  <img class="img-fluid" src=${data.img}>
            //  <li>${data.name}<li>
            //  <li>${data}</li>
             
            //  </ul>
            // `


        })
        .catch((err) => {
          console.log("rejected");
          console.error(err)
          error = true
        });

  }

  window.onload = () =>{
    searchDeezer("Eminem")
    searchDeezer("Metallica")
    searchDeezer("Behemoth")

  }


