//VARIABLES

//variables in order to be able to manipulate changing backgrounds
let recentlyAddedClass = "";
let recentlyEditedElement = "";

//variables in order to be able to manipulate changing images
let recentlyAddedImage = "";
let recentlyEditedImage = "";

//FUNCTIONS
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
    for (let i = 0; i < movieRefArray.length; i++) {
        var movieRefItem = $("<button>");
        movieRefItem.addClass("flex-auto");
        // movieRefItem.addClass("button-main");
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

function flickPicker() {
    var quiz = {
        title: 'Pick-a-Flick!',

        questions: [{
                text: "It’s raining cats and dogs, do you curl up with a hot cuppa and a good book or do you put on your wellies and stomp in the puddles?",
                responses: [{
                        text: 'stomp in puddles - all day!',
                        value: ['Laputa: Castle in the Sky', 'My Neighbor Totoro', 'Kikis Delivery Service', 'Porco Rosso', 'Pom Poko', 'My Neighbors the Yamadas', 'Spirited Away', 'The Cat Returns', 'Ponyo']
                    },
                    {
                        text: 'curl up with a cuppa',
                        value: ['Grave_of_the_Fireflies', 'Only Yesterday', 'Ocean Waves', 'Princess Mononoke', 'Tales from Earthsea']
                    },
                    {
                        text: 'squirrel!',
                        value: ['Whisper of the Heart', 'Howls Moving Castle', 'Arrietty', 'From Up on Poppy Hill', 'The Wind Rises', 'The Tale of the Princess Kaguya', 'When Marnie Was There']
                    }
                ]
            },
            {
                text: "Do you like bath houses?",
                responses: [{
                        text: 'Yes! Yes! Yes! They are the best!',
                        value: ['Pom Poko', 'Princess Mononoke', 'Spirited Away']
                    },
                    {
                        text: 'Are there lots of tentacles, or is this not that kind of japanime?',
                        value: ['Laputa: Castle in the Sky', 'Grave_of_the_Fireflies', 'My Neighbor Totoro', 'Kikis Delivery Service', 'Only Yesterday', 'Porco Rosso', 'Ocean Waves', 'Whisper of the Heart', 'My Neighbors the Yamadas', 'Howls Moving Castle, Arrietty', 'From Up on Poppy Hill, The Tale of the Princess Kaguya']
                    },
                    {
                        text: 'I can take em or leave em',
                        value: ['The Cat Returns', 'Tales from Earthsea', 'Ponyo', 'The Wind Rises', 'When Marnie Was There,']
                    }
                ]
            },
            {
                text: "Are you in the mood for a fantasy movie or movie that takes place in contemporary times?",
                responses: [{
                        text: 'Contemporary',
                        value: ['Grave_of_the_Fireflies', 'My Neighbor Totoro', 'Kikis Delivery Service', 'Only Yesterday', 'Whisper of the Heart', 'My Neighbors the Yamadas', 'The Cat Returns', 'Arrietty', 'From Up on Poppy Hill', 'The Wind Rises', 'When Marnie Was There']
                    },
                    {
                        text: 'like whateva?',
                        value: ['Ocean Waves', 'Howls Moving Castle', 'Ponyo']
                    },
                    {
                        text: 'fantasy',
                        value: ['Laputa: Castle in the Sky', 'Porco Rosso', 'Pom Poko', 'Princess Mononoke', 'Spirited Away', 'Tales from Earthsea', 'The Tale of the Princess Kaguya',] 
                    },
                ]
            },
            {
                text: "Do you prefer a carefree or heavy atmosphere?",
                responses: [{
                        text: 'carefree',
                        value: ['Laputa: Castle in the Sky', 'My Neighbor Totoro', 'Pom Poko', 'Whisper of the Heart', 'My Neighbors the Yamadas', 'The Cat Returns, Arrietty']
                    },
                    {
                        text: "I don't know",
                        value: ['Kikis Delivery Service', 'Only Yesterday', 'Porco Rosso', 'Ocean Waves', 'Spirited Away', 'Howls Moving Castle', 'Ponyo', 'From Up on Poppy Hill', 'The Tale of the Princess Kaguya']
                    },
                    {
                        text: 'heavy',
                        value: ['Grave_of_the_Fireflies', 'Princess Mononoke', 'Tales from Earthsea', 'The Wind Rises', 'When Marnie Was There',]
                    }
                ]
            },
            {
                text: "Mountain or Ocean?",
                responses: [{
                        text: 'Mountains',
                        value: ['Only Yesterday, Pom Poko, Princess Mononoke, The Wind Rises, The Tale of the Princess Kaguya']
                    },
                    {
                        text: 'whateva',
                        value: ['Laputa: Castle in the Sky', 'Grave_of_the_Fireflies', 'My Neighbor Totoro', 'Ocean Waves', 'Whisper of the Heart', 'The Cat Returns', 'Howls Moving Castle', 'Arrietty', 'When Marnie Was There']
                    },
                    {
                        text: 'Oceans',
                        value: ['Kikis Delivery Service', 'Porco Rosso', 'My Neighbors the Yamadas', 'Spirited Away', 'Tales from Earthsea', 'Ponyo', 'From Up on Poppy Hill']
                    }
                ]
            },
            {
                text: "Do you like to wander?",
                responses: [{
                        text: 'Every chance I can',
                        value: ['Laputa: Castle in the Sky', 'Grave_of_the_Fireflies', 'My Neighbor Totoro', 'Kikis Delivery Service', 'Whisper of the Heart', 'Princess Mononoke', 'My Neighbors the Yamadas', 'Spirited Away', 'Tales from Earthsea', 'The Tale of the Princess Kaguya']
                    },
                    {
                        text: 'Oh sure! I got lost in the mall last Saturday.',
                        value: ['Only Yesterday', 'Porco Rosso', 'The Cat Returns', 'Howls Moving Castle', 'From Up on Poppy Hill', 'The Wind Rises', ]
                    },
                    {
                        text: 'No, I suffer from agrophobia',
                        value: ['Ocean Waves', 'Pom Poko', 'Ponyo', 'Arrietty', 'When Marnie Was There']
                    }
                ]
            },
            {
                text: "Do you worry about future conflicts?",
                responses: [{
                        text: 'Every chance I can',
                        value: ['Grave_of_the_Fireflies', 'Princess Mononoke', 'Tales from Earthsea', 'Ponyo', 'From Up on Poppy Hill,']
                    },
                    {
                        text: 'wha?',
                        value: ['Laputa: Castle in the Sky', 'Kikis Delivery Service', 'Only Yesterday', 'Ocean Waves', 'Pom Poko', 'Whisper of the Heart', 'My Neighbors the Yamadas', 'The Cat Returns', 'Howls Moving Castle', 'Arrietty', 'The Wind Rises', 'When Marnie Was There,']
                    },
                    {
                        text: 'Do you mean, like, if Kim leaves Kanye?',
                        value: ['My Neighbor Totoro', 'Porco Rosso', 'Spirited Away', 'The Tale of the Princess Kaguya']
                    }
                ]
            },
            {
                text: "Are you concerned about the state of our environment?",
                responses: [{
                        text: 'Every chance I can',
                        value: ['Grave_of_the_Fireflies', 'Princess Mononoke', 'Ponyo, ']
                    },
                    {
                        text: 'Trump says its a Chinese hoax. so...',
                        value: ['Laputa: Castle in the Sky', 'My Neighbor Totoro', 'Kikis Delivery Service', 'Only Yesterday', 'Ocean Waves', 'Pom Poko', 'Whisper of the Heart', 'My Neighbors the Yamadas', 'The Cat Returns', 'Howls Moving Castle', 'Tales from Earthsea', 'Arrietty', 'From Up on Poppy Hill', 'The Wind Rises', 'When Marnie Was There']
                    },
                    {
                        text: 'No, a superbug born from the Florida sewage will wipe us out before Hale-Bop returns.',
                        value: ['Porco Rosso', 'Spirited Away', 'The Tale of the Princess Kaguya']
                    }
                ]
            },
            {
                text: "Do you like bright or muted colors?",
                responses: [{
                        text: 'yes',
                        value: ["My Neighbor Totoro", "Kiki's Delivery Service", "Princess Mononoke", "Spirited Away", "Tales from Earthsea", "Ponyo", "Arrietty", "The Wind Rises", "When Marnie Was There"]
                    },
                    {
                        text: "I'm Blue da ba dee dabba die",
                        value: ["Kiki's Delivery Service", "Only Yesterday", "Porco Rosso", "Ocean Waves", "The Cat Returns", "Howl's Moving Castle", "From Up on Poppy Hill"]
                    },
                    {
                        text: 'No',
                        value: ["Laputa: Castle in the Sky", "Grave_of_the_Fireflies", "Pom Poko", "Whisper of the Heart", "My Neighbors the Yamadas", "The Tale of the Princess Kaguya"]
                    }
                ]
            },
            {
                text: "What mood do you prefer, light atmosphere or heavy atmo?",
                responses: [{
                        text: 'light',
                        value: ["Laputa: Castle in the Sky", "My Neighbor Totoro", "Kiki's Delivery Service", "Pom Poko", "Whisper of the Heart", "My Neighbors the Yamadas", "The Cat Returns", "Ponyo", "Arrietty", "The Tale of the Princess Kaguya", "When Marnie Was There"]
                    },
                    {
                        text: 'aint no thang but a chicken wang',
                        value: ["Only Yesterday", "Ocean Waves", "Howl's Moving Castle", "From Up on Poppy Hill"]
                    },
                    {
                        text: "Heavy, I'm already miserable",
                        value: ["Grave_of_the_Fireflies", "Princess Mononoke", "Spirited Away", "Tales from Earthsea", "The Wind Rise"]
                    }
                ]
            },
            {
                text: "Do you like airships?",
                responses: [{
                        text: "always- especially dirigibles.",
                        value: ["Laputa: Castle in the Sky", "Grave_of_the_Fireflies", "My Neighbor Totoro", "Kiki's Delivery Service", "Whisper of the Heart", "Princess Mononoke", "My Neighbors the Yamadas", "Spirited Away", "Tales from Earthsea", "The Tale of the Princess Kaguya,"]
                    },
                    {
                        text: "I can take it or leave it",
                        value: ["Only Yesterday", "Ocean Waves", "Pom Poko", "Princess Mononoke", "Spirited Away", "Tales from Earthsea"]
                    },
                    {
                        text: "I prefer to keep my feet firmly planted on the ground.",
                        value: ["My Neighbor Totoro", "Grave_of_the_Fireflies", "Whisper of the Heart", "The Cat Returns", "Howl's Moving Castle", "Ponyo", "Arrietty", "From Up on Poppy Hill", "The Tale of the Princess Kaguya", "When Marnie Was There"]
                    }
                ]
            }]
    };


    var app = new Vue({
        el: '#app2',
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
                var maxEl = this.userResponses[0];
                var maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var arr = this.userResponses[i];
                    arr.forEach(el => {
                        if (modeMap[el] == null)
                            modeMap[el] = 1;
                        else
                            modeMap[el]++;
                        if (modeMap[el] > maxCount) {
                            maxEl = el;
                            maxCount = modeMap[el];
                        }
                    });
                }
                return maxEl;
            }
        }
    });


}

function spiritPicker() {
    var quiz = {
        title: 'Hey Ghibliean! Let’s see which Ghibli creature you are',

        questions: [{
                text: "Do you like to be friends with princesses?",
                responses: [{
                        text: 'Well, in fact, I AM A Princess!',
                        value: 'deer' 
                    },
                    {
                        text: 'I.. I mean my niece loves princesses',
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
    console.log("spirit picker success");
}



//EVENTS
    $(document).on("click", ".js-movie-button", function() {
        window.location.href='./reference.html';
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
        window.location.href = './pickaflick.html';
    })
    //Click of Spirit Quiz
    $(document).on("click", ".js-spirit-quiz-button", function() {
        window.location.href = './spiritquiz.html';
    })
    //Return to Main Menu
    $(document).on("click", ".js-resetDiv", function() {
        removeClass(recentlyAddedClass);
        window.location.href = './index.html';
    })
    $(document).on("click", ".js-toggle", function() {
        $(".js-box-ref").toggleClass("d-n")
    })
    if ($(".js-ref")) {
        renderMovieRef();
    }
    if($(".js-flick")){
        flickPicker();
    }
    if($(".js-spirit")) {
        spiritPicker();
    };