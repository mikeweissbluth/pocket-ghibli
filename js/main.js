$( document ).ready(function() {
//VARIABLES

//variables in order to be able to manipulate changing backgrounds
let recentlyAddedClass = "";
let recentlyEditedElement = "";

//variables in order to be able to manipulate changing images
let recentlyAddedImage = "";
let recentlyEditedImage = "";

//FUNCTIONS

function hideMenu() {
    $(".js-mainMenuDiv").hide();
    $(".js-resetDiv").show();
}

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
    $(".js-box-ref").show();
    $(".js-ref").show();
    for (let i = 0; i < movieRefArray.length; i++) {
        var movieRefItem = $("<div>");
        movieRefItem.addClass("flex-auto");
        movieRefItem.addClass("button-main");
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
    $(".js-spiritQuiz").hide();
    $(".js-ref").hide();
    $(".js-flick").hide();
    $(".js-spirit").hide();
    $(".js-box-ref").hide();
    $(".js-box-flick").hide();
    $(".js-box-spirit").hide();
}

function flickPicker() {
    $(".js-pickaFlick").show();
    $(".js-box-flick").show();
    $(".js-flick").show();
}

function spiritPicker() {
    $(".js-spiritQuiz").show();
    $(".js-box-spirit").show();
    $(".js-spirit").show();
    var quiz = {
        title: 'Hey Ghibliean! Let’s see which Ghibli creature you are',

        questions: [{
                text: "Do you like to be friends with princesses?",
                responses: [{
                        text: 'Well, in fact, I AM A Princess!',
                        value: 'deer' 
                    },
                    {
                        text: 'I.. I mean my neice loves princesses',
                        value: 'spirit'
                    },
                    {
                        text: 'I can take them or leave them',
                        value: 'totoro'
                    }
                ]
            },
            {
                text: "Do you guide adventurers?",
                responses: [{
                        text: 'life is a journey, not a destination',
                        value: 'god'
                    },
                    {
                        text: 'If they do not mind getting lost',
                        value: 'cat'
                    },
                    {
                        text: 'Oh yes, in my previous life I graduated top of my class in ranger school',
                        value: 'deer'
                    }
                ]
            },
            {
                text: "Who would you most hang around with?",
                responses: [{
                        text: 'an ambivalent garden troll',
                        value: 'cat'
                    },
                    {
                        text: 'happy go lucky toddler',
                        value: 'totoro'
                    },
                    {
                        text: 'i hang around with everyone',
                        value: 'god'
                    }
                ]
            },
            {
                text: "Do you prefer Companion or Guide?",
                responses: [{
                        text: 'UFOs will pick me up on June 18th 2021.',
                        value: 'spirit'
                    },
                    {
                        text: 'companion',
                        value: 'cat'
                    },
                    {
                        text: 'Guide',
                        value: 'deer'
                    }
                ]
            },
            {
                text: "When do you help people?",
                responses: [{
                        text: 'Every chance I can',
                        value: 'cat'
                    },
                    {
                        text: 'At night',
                        value: 'god'
                    },
                    {
                        text: 'When they need me to',
                        value: 'spirit'
                    }
                ]
            },
            {
                text: "Do you like a kitsunerisu (cute little fox-squirrels)?",
                responses: [{
                        text: 'wtf is a foxsquirrel?',
                        value: 'totoro'
                    },
                    {
                        text: 'LOVE them. They aresoooooo cute!',
                        value: 'deer'
                    },
                    {
                        text: 'not really. I have allergies.',
                        value: 'god'
                    }
                ]
            },
        ]
    };

    var app = new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
        },
        methods: {
            // Go to next question
            next: function() {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                //find the highest occurence in responses
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
    });
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
        spiritPicker();
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



