// Communicate with a server by making a http request
// Retrieved data without reloading the page 
// Stands for: Asynchronous JS and XML (XML is like JSON's ugly brother)

// For ex: zoom in and out a map without reloading/refreshing the page => AJAX Request

window.onload = function(){

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        console.log(http);
    };

    http.open("GET", "data/tweets.json", true);
    http.send();
}
