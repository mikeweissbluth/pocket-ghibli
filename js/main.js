$( document ).ready(function() {
//VARIABLES





//FUNCTIONS
function init() {
    $(".js-resetDiv").hide();
}

function hideMenu() {
    $(".js-mainMenuDiv").hide();
    $(".js-resetDiv").show();
}

function renderMovieRef() {
    let movieRefArray = [
        "Laputa: Castle in the Sky", 
        "Grave of the Fireflies,", 
        "My Neighbor Totoro", 
        "Kiki's Delivery Service", 
        "Only Yesterday", 
        "Porco Rosso", 
        "Ocean Waves", 
        "Pom Poko", 
        "Whisper of the Heart", 
        "Princess Mononoke", 
        "My Neighbors the Yamadas", 
        "Spirited Away", 
        "The Cat Returns", 
        "Howl's Moving Castle", 
        "Tales from Earthsea", 
        "Ponyo", "Arrietty", 
        "From Up on Poppy Hill", 
        "The Wind Rises", 
        "The Tale of the Princess Kaguya", 
        "When Marnie Was There", 
        "How Do You Live?"
    ];
    $(".js-movie-ref-div").empty();
    for (let i = 0; i < movieRefArray.length; i++) {
        var movieRefItem = $("<button>");
        movieRefItem.addClass("js-movieRef");
        movieRefItem.attr("data-name", movieRefArray[i]);
        movieRefItem.text(movieRefArray[i]);
        $(".js-movie-ref-div").append(movieRefItem);
    }
}

function movieRefCall() {
    let movieName = "&query=" + $(this).attr("data-name");
    let cssStyle = 
    console.log(movieName);
    console.log(this);
    let apiKey = "?api_key=5cd1ecff8ea6adcee13ecffc24c20aa2";
    let queryURL = "https://api.themoviedb.org/3/search/movie";
    let noPorn = "&include_adult=false"
    $.ajax({
        url: queryURL + apiKey + movieName + noPorn,
        method: "GET",

    }).then(function(response){
        let result = response;
        console.log(result.results[0].overview);
    })
}

function mainMenu() {
    $(".js-mainMenuDiv").show();
    $(".js-resetDiv").hide();
}



//EVENTS
    init();
    $(document).on("click", ".js-movie-button", function() {
        hideMenu();
        renderMovieRef();
        console.log("js-movie button success");
    })
    //Click of Movie in Movie References
    $(document).on("click", ".js-movieRef", movieRefCall);
        //Calls up individual Movie Page
        //Calls Wikipedia API for Description of Movie
        //Return to Main Menu Button
    //Click of Movie Quiz
    $(document).on("click", ".js-movie-quiz-button", function() {
        hideMenu();
        //Questions are Asked
        //Responses and their effects on the answers are generated.
        //Result or results are picked.
        //Result page displays.
        //Return to Main Menu Button
        console.log("js-movie-quiz button success");
    })
    //Click of Spirit Quiz
    $(document).on("click", ".js-spirit-quiz-button", function() {
        hideMenu();
        //Questions are Asked
        //Responses and their effects on the answers are generated.
        //Result or results are picked.
        //Result page displays.
        //Return to Main Menu Button
        console.log("js-spirit-quiz button success");
    })
    //Return to Main Menu
    $(document).on("click", ".js-resetDiv", function() {
        mainMenu();
    })

}); // Closing of Document Ready



