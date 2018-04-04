$( document ).ready(function() {
//VARIABLES





//FUNCTIONS

function hideMenu() {
    $(".js-mainMenuDiv").hide();
    $(".js-resetDiv").show();
}

//variables in order to be able to manipulate changing backgrounds
let recentlyAddedClass = "";
let recentlyEditedElement = "";

//variables in order to be able to manipulate changing images
let recentlyAddedImage = "";
let recentlyEditedImage = "";

function renderMovieRef() {
    let movieRefArray = [
        { name: "Laputa: Castle in the Sky",
        addbackground : "bg-laputa",
        },
        { name: "Grave of the Fireflies",
        addbackground : "bg-fireflies", 
        },
        { name: "My Neighbor Totoro",
        addbackground: "bg-totoro",
        }, 
        { name: "Kiki's Delivery Service",
        addbackground: "bg-kiki",
        }, 
        { name: "Only Yesterday", 
        addbackground: "bg-yesterday",
        },
        { name: "Porco Rosso", 
        addbackground: "bg-rosso",
        },
        { name: "Ocean Waves",
        addbackground: "bg-ocean", 
        },
        { name: "Pom Poko",
        addbackground: "bg-poko",
        }, 
        { name: "Whisper of the Heart", 
        addbackground: "bg-heart",
        },
        { name: "Princess Mononoke",
        addbackground: "bg-mononoke",
        }, 
        { name: "My Neighbors the Yamadas",
        addbackground: "bg-yamadas",
        }, 
        { name:"Spirited Away",
        addbackground: "bg-spirit", 
        },
        { name: "The Cat Returns", 
        addbackground: "bg-cat",
        },
        { name: "Howl's Moving Castle",
        addbackground: "bg-castle", 
        },
        { name: "Tales from Earthsea", 
        addbackground: "bg-earthsea",
        },
        { name: "Ponyo", 
        addbackground: "bg-ponyo",
        },
        { name: "Arrietty",
        addbackground: "bg-arrietty",
        },
        { name: "From Up on Poppy Hill",
        addbackground: "bg-hill", 
        },
        { name:"The Wind Rises",
        addbackground: "bg-wind", 
        },
        { name:"The Tale of the Princess Kaguya",
        addbackground: "bg-princess", 
        },
        { name:"When Marnie Was There", 
        addbackground: "bg-marnie",
        },
        { name: "How Do You Live?",
        addbackground: "bg-live",
        }
    ];
    $(".js-movie-ref-div").show();
    $(".js-movie-ref-div").empty();
    for (let i = 0; i < movieRefArray.length; i++) {
        var movieRefItem = $("<button>");
        movieRefItem.addClass("js-movieRef");
        movieRefItem.attr("data-classToAdd", movieRefArray[i].addbackground);
        movieRefItem.attr("data-imageToAdd", movieRefArray[i].image);
        movieRefItem.attr("data-name", movieRefArray[i].name);
        movieRefItem.text(movieRefArray[i].name);
        $(".js-movie-ref-div").append(movieRefItem);
    }
}

//for backgrounds to show up 
function addClass(classToAdd) {
    $("#background").addClass(classToAdd);
}
function removeClass(classToRemove) {
    $("#background").removeClass(classToRemove);
}

function movieRefCall() {
    let movieName = "&query=" + $(this).attr("data-name");
    let cssStyle; 
    let apiKey = "?api_key=5cd1ecff8ea6adcee13ecffc24c20aa2";
    let queryURL = "https://api.themoviedb.org/3/search/movie";
    let noPorn = "&include_adult=false"
    $.ajax({
        url: queryURL + apiKey + movieName + noPorn,
        method: "GET",

    }).then(function(response){
        let result = response;
        $(".js-movie-ref-text").text(result.results[0].overview);
    })
}

function mainMenu() {
    $(".js-mainMenuDiv").show();
    $(".js-resetDiv").hide();
    $(".js-pickaFlick").hide();
    $(".js-movie-ref-div").hide();
    $(".js-movie-ref-text").empty();
}

function flickPicker() {
    $(".js-pickaFlick").show();
}

function spiritPIcker() {
    $(".js-spiritQuiz").show();
    let spiritArray = [
        {
            name: "deer",
            score: 0.
        },
        {
            name: "spirit",
            score: 0,
        },
        {
            name: "god",
            score: 0,
        },
        {
            name: "cat",
            score: 0,
        },
        {
            name: "totoro",
            score: 0,
        },
    ]
}



//EVENTS
    mainMenu();
    $(document).on("click", ".js-movie-button", function() {
        hideMenu();
        renderMovieRef();
        console.log("js-movie button success");
    })
    //Click of Movie in Movie References
    $(document).on("click", ".js-movieRef", function() {
        let dataFromDom = $(this).data().classtoadd;
        // console.log("data elem: ", $(this).data().classtoadd);
        $("#background").addClass(dataFromDom);
        removeClass(recentlyAddedClass);
        recentlyAddedClass = dataFromDom;
        recentlyEditedElement = $(this);
    });
    $(document).on('click', '.js-movieRef', movieRefCall);
    //Click of Movie Quiz
    $(document).on("click", ".js-movie-quiz-button", function() {
        hideMenu();
        flickPicker();
        //Questions are Asked
        //Responses and their effects on the answers are generated.
        //Result or results are picked.
        //Result page displays.
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
        removeClass(recentlyAddedClass);
    })

}); // Closing of Document Ready



