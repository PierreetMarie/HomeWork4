//Let the game Begin!!!! :D TUU, TUUUUU, TUU, TUUUUUUU...

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//Setters
//Getters

var resetAndStart = function () {

    $(".crystals").empty();

    var images = ['https://img00.deviantart.net/4872/i/2017/307/4/2/ice_crystal_by_deltared12-dbso6iz.jpg',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov4NPEueEyI3c98jhnQSOahVwXd3p3xZY6_hlj6s3pjoB6wkeYQ',
                  'http://cache.desktopnexus.com/thumbseg/2081/2081311-bigthumbnail.jpg',
                  'https://vignette.wikia.nocookie.net/yugioh/images/5/58/BariaCrystal.png/revision/latest?cb=20121120012656'];


    random_result = Math.floor(Math.random() * 69) + 30;
        //console.log(random_result);

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);


        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
                
            });

            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });
         
        $(".crystals").append(crystal);

        
    }

    $("#previous").html("Total Score: " + previous);
}



resetAndStart();


//Event Delegation
$(document).on('click', ".crystal", function (){

    var num = parseInt($(this).attr('data-random'));
    previous += num;

    $("#previous").html("Total Score:" + previous);

    console.log(previous);
        

    if(previous > random_result){
        //console.log("You Lost!!!:(");
        lost++;
        $("#lost").html("You Lost:" + lost);

        previous = 0;

       
        resetAndStart();
    }
    else if(previous === random_result){
        //console.log("You Win!!!");
        win++;
        $("#win").html("You Win:" + win);

        previous = 0;


        resetAndStart();
    }
    //console.log(previous);

    
});


// game with 4 different crystals at random results

//Every crystal must contain a random number from 1-12

//A new random number should be generated every single time we win or loose

//When "click" crystal it should add with the previous result

//until it equals the total score

//If it is greater than the Random result, we decrement a lost counter

//If it is equal. then we increment a win counter