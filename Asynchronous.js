readAsync(article_loc,function(){
    console.log(article);
});

readAsync(authors_loc, function(){
    console.log(authors);
});

// Asynchronous will help passing a different/seperate thread to go out and get that data (ex: article) from API
// and carry on the next thread through the code and carry on to the next function (ex: authors) 
// After they recevied the article data, they will do the callback function
//Rather than waiting until a request finished like Synchronous, we can keep carry on many more request by Async


//ASYNC FLOW CONTROL

// Callbacks
// Promises
// Generators