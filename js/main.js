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

}

function mainMenu() {
    $(".js-mainMenuDiv").show();
    $(".js-resetDiv").hide();
}



//EVENTS
init();
    //Click of Movie Reference
        //Hide Main Menu
        //Show Movies Menu
        //Movies generate based on list of Movies from API

    //Click of Movie in Movie References
    $(document).on("click", ".js-movie-button", function() {
        hideMenu();
        //Calls up individual Movie Page
        //Calls Wikipedia API for Description of Movie
        //Return to Main Menu Button
        console.log("js-movie button success");
    })
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



