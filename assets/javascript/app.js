$(document).ready(function () {
    
var topics = ["Simpsons", "Futurama", "Bob's Burgers", "Venture Brothers", "Superjail", "Space Ghost Coast to Coast"];
// var searchTerm = CRITICAL! trim version of a specific topic. this will take several steps. I need to replace any spaces with plus signs which seems like a PITA.
// okay it goes like this: str = str.replace(" ", "+");
// var topicSubmit = "";

function writeLayout(){
    $("#main-div").append("<div id=topics-div></div>");
    $("#main-div").append("<div id=add-topic-button>i exist</div>");
    $("#main-div").append("<div id=show-gifs>i also exist</div>");
}

// click events
// click on top buttons activate show gifts function
// click on add term button to run add term function
$(document).on("click", ".top-buttons", showGifs);

// function to display topics as buttons across the top. 1: name the var. 2: empty the html div ID like in the class activity, so there isn't a feedback loop. 3. write a for loop and within that loop, set a var, add <button> and text html (would class help?). possibly an attr?


function displayTopRow(){
    $("#topics-div").empty();
    for (let i = 0; i < topics.length; i++) {
        var topButtons = $("<button>");
        topButtons.text(topics[i]);
        topButtons.attr("data-name", topics[i]);
        topButtons.addClass("top-buttons")
        $("#topics-div").append(topButtons)
        console.log(topButtons)
    }
}
console.log(topics)

    // function to add another term to topics. 1: 
// function to remove. look up array commands, remove (topics.length-1)?

// function addToTopics(){
//     // $("#add-topic-button").on("click", function(){
//     //     var extraShow = 
//     // }

    
// }

// function to show gifs. 1: a var for (this.attr). 2: a var that converts all the spaces var1 into plus signs for URL functionality. 3. function response = data. 4. loop results across var = newDiv. 5. take the rating (G, PG, etc) from the ajax object and append to the div. 6: add stationary gif from the ajax object and append to the div.


// var searchTerm = topics[];

// for (let i = 0; i < topics.length; i++) {
    


    // // I cribbed the following regex from googling how to do find/replace.
    // searchTerm = searchTerm.replace(/\s/g, "+");
    // }

    console.log(topics)

    // searchTerm = searchTerm.replace(/\s/g, "+");
    // console.log(searchTerm)
function showGifs(){    

    var apiKey = "uRB2c2R6GBVWaNSKFvlmsqZZwBzkRe9P";
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics[1] + "&api_key=" + apiKey + "&limit=10";
    
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        //   console.log(response);
            $("#show-gifs-div").empty();
            var mainBody = response.data;
            for (let i = 0; i < mainBody.length; i++) {
                var newDiv = $("<div>");
                var gifRating = $("<p>").text(mainBody[i].rating);
                newDiv.append(gifRating);
                var gifItself = $("<img>");
                gifItself.attr("src", mainBody[i].images.fixed_height_small_still.url);
                newDiv.append(gifItself);
                $("#show-gifs").append(newDiv);
                
            }
          
        });
    }
        
// $("button").on("click", function(){
    
  


// }

// API functionality


    // then(function(response) {
    //     $("#movies-view").text(JSON.stringify(response));
    //   });

// all necessary variables

writeLayout();
displayTopRow();
showGifs();


// array for "topic" buttons at the top
// js for loop to write array to the DOM as clickable buttons
// topic button functinality: load ten gifs via the API. the default state is motionless (this comes from the object position). should only load ten gifs since I added 'limit=10' to the url
// on.click the gif switches from still to animated and vice versa. this was an if/else from exercise 3.5.15
// DO LAST:
// submit form that appends a new button to topic buttons at the top (ex 3.5.14, 3.4.9)

// stretch goal: tweak the code so there is only one div on the HTML, have the css tie to the class/id that gets defined in script


// this is the closer for document.ready --
});