"use strict";

// Defining 2 empty arrays for string and scores...
let scores = [];
let scoresString = [];

const displayScores = (scores, scoresString) => {

    //Defining a variable to calculate total of all elements inside scores array...
	let sum = 0;

    //For in loop for adding each score...
    for(let value in scores)
    {
       sum += scores[value];
    }

    //Calculating average and displaying it...
    $("#avr_score").text(sum/scores.length);
    
    //Displaying string...
    $("#scores").val(scoresString.join("\n"));

};

$(document).ready( () => {
    $("#add_button").click( () => {
        
        //Taking values from input boxes...
        let first_name = $("#first_name").val().trim();
        let last_name = $("#last_name").val().trim();
        let score = $("#score").val().trim();

        //Checking if user has left anything blank...
        if(!first_name || !last_name || !score)
        {
            alert("Please Enter All The Values...");
        }
        else if(isNaN(score))  //Checking if there is any alphabet in score input...
        {
            alert("No Alphabets Allowed In Scores...")
        }
        else
        {
            //Adding values to both arrays...
            scores.push(parseFloat(score));

            scoresString.push(last_name + ", " + first_name + ": " + score);

            //Calling display function to display array and average...
            displayScores(scores,scoresString);

            // get the add form ready for next entry
            $("#first_name").val( "" );
            $("#last_name").val( "" );
            $("#score").val( "" );
            $("#first_name").focus();
        }
        
    }); // end click()
    
    $("#clear_button").click( () => {
        // remove the score data from the web page
        $("#avr_score").text( "" );
        $("#scores").val( "" );

        //Making both arrays empty...
        scores = [];
        scoresString = [];

        $("#first_name").focus();

    }); // end click()
       
    $("#sort_button").click( () => {
        
        //Sorting scoresString array and sending it to displayScores function...
        displayScores(scores,scoresString.sort());
        
    }); // end click()
    
    $("#first_name").focus();
    
}); // end ready()