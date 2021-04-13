//METHODS

// GET - Retrieves data
// POST - Creates Data
// PUT - Edits all data
// PATCH -  Edits specified data

//PROMISE - Wrapper around a callback function, may complete at some point and produce a value
// 3 possible statuses of a promise 
// pending: Awaiting response or confirmation 
// resolved:Successfully received response
// rejected:something went wrong

//Status Codes
// Informational responses (100–199)
// Successful responses (200–299)
// Redirects (300–399)
// Client errors (400–499)
// Server errors (500–599)


getRemoteData("https//:google.com", function(err,resp){//This Code will be executed once we have the requested info
            if(err){
                console.log("Something went wrong")
            }else {
                console.log("The server replied with", resp)
            }

})

//Each asynchronous function consists of a response and an error incase we don't get the response
getRemoteData("https//:google.com", (err,resp) =>{//Same code in an arrow function
            if(err){
                console.log("Something went wrong")
            }else {
                console.log("The server replied with", resp)
            }
})

// console.log("Hey there!") // Asynchronous function will not prevent other code like this console.log from running 

//Promises

getUser("https://myblog.com/users")
//https://myblog.com/12345/posts/ e.g Grab the post of user 12345
//.then, keyword executes the code inside the brackets once the result of a request has been returned
    .then(user => getBlogPost("https://myblog.com/" + user.userId + "posts/")) //getBlogPost retrieves post using a a concatenated link before moving on to the next .then method
    .then(post => getComments("https://myblog.com/" + post.userId + "posts/comments"))
    .then(comments => console.log(comments))
    .catch(err => console.log("Something definitely went wrong! ", err)) //.catch is used to catch an error, the code within the brackets will be executed, specifying what will be done, if there is an error any point during the request

