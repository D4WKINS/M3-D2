// getRemoteData("http://google.com") // syncrhonous way - something we want to AVOID


// getRemoteData("http://google.com", function(error, response){ // asynchronous way
//   if(error) {
//     alert("Error happened")
//   } else {
//     console.log('HERE IS DATA ', response)
//   }
// })


// getRemoteData("http://google.com", (err, data) => { // asynchronous way with arrow function


// })


// CALLBACK HELL


getUser("http://whatever.com/users", (err, user) => {
  // REQ I
  getBlogPosts(
    // REQ II
    "http://whatever.com/blogPosts" + user.name,
    (err, blogPosts) => {
      getComments(
        // REQ III
        "http://whatever.com/comments" + blogPosts.title,
        (err, comments) => {
          console.log(comments)
        }
      )
    }
  )
})


// PROMISES - Wrapper around callbacks


// pending - you are still waiting
// resolved - you have the value available
// rejected - you don't have the value because an error happened


getRemoteData("http://google.com")
  .then(response => console.log(response)) // 200 ok
  .catch(err => alert("Error happened!"))


getUser("http://whatever.com/users")
  .then(user => getBlogPosts("http://whatever.com/blogPosts" + user.name))
  .then(blogPosts =>
    getComments("http://whatever.com/comments" + blogPosts.title)
  )
  .then(comments => console.log(comments))
  .catch(err => alert(err))


console.log("normal execution")


index.html

        function loadBooks() {
            console.log("the button has been clicked")
            const loader = document.getElementById("loader")
            loader.classList.remove("d-none")
            // fetch the information from the APIs
            // fetch("https://striveschool-api.herokuapp.com/books")
            //     .then(function(booksResp) { 
            //         return booksResp.json()
            //     })
            //     .then(function(books) {
            //         console.log(books)
            //     })


            fetch("https://striveschool-api.herokuapp.com/books")
                .then(resp => resp.json()) // transform the response body in a JSON object
                .then(books => {
                    const row = document.querySelector(".row")
                    row.innerText = ""


                    for(let i = 0; i < books.length; i++) {
                        const book = books[i]
                        //add the book to the row!
                        // create a <div class="col col-md-3">
                        const bookDiv = document.createElement("div")
                        bookDiv.classList.add("col-12")
                        bookDiv.classList.add("col-md-3")
                        // add <img src="https://...." />
                        const img = document.createElement("img")
                        img.src = book.img
                        img.classList.add("img-fluid")
                        // img.addEventListener('load', () => console.log("test"))
                        bookDiv.appendChild(img)
                        row.appendChild(bookDiv)
                    }
                    loader.classList.add("d-none")
                }) // use the data
                .catch(err => {
                    const row = document.querySelector(".row")
                    row.innerText = "Cannot load the books list"
                    console.log("THIS IS THE CATCH CLAUSE", err)
                    loader.classList.add("d-none")
                })
            console.log("this will be executed before the fetch callback")
        }
