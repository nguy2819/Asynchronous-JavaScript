// Synchronous JS:


// JS code runs on a single thread (can do 1 thing at a time)

//Synchronous code waits for 1 action to complete before moving onto the next

var article = readSync(article_loc);
console.log(article);

var authors = readSync(authors_loc);
console.log(authors);

//which means they will go to the API, request to readSync article (block there until it can get back with some article results).
// Then it will able to move on with the next request to readSync authors
// In conclusion, it is not a good idea to use Synchronous