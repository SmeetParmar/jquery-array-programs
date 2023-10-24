"use strict";

$(document).ready( () => {
    //Declaring array...
    var tasks = [];

    $("#add_task").click( () => {   

        //Getting value from inputs...
        var textval = $("#task").val().trim();

        //Spliting the value by ","...
        var value = textval.split(",");

        //Checking if value is empty or not...
        if (textval === "")
        {
            alert("Please enter a task.");
            $("#task").focus();
        } 
        else 
        {
            //For in loop for adding each comma "," seperated value into the array 
            for(let singleElement in value)
            {
                tasks.push(value[singleElement].trim());
            }

            // clear task text val and re-display tasks
            $("#task").val("");
            $("#task_list").val(tasks.join("\n"));
            $("#task").focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        tasks.length = 0;
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    $("#task").focus();
});