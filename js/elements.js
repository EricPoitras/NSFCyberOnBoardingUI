// Content
console.log("Content");
var instructionalcontent = document.getElementById("instructionalcontent");
console.log(instructionalcontent);
var therapistpic = document.getElementById("therapistpic");
console.log(therapistpic);
var therapisttalkturn1 = document.getElementById("therapisttalkturn1");
console.log(therapisttalkturn1);
var clientpic = document.getElementById("clientpic");
console.log(clientpic);
var clienttalkturn1 = document.getElementById("clienttalkturn1");
console.log(clienttalkturn1);
var probleminstruction = document.getElementById("probleminstruction");
console.log(probleminstruction);
var problemtime = document.getElementById("problemtime");
console.log(problemtime);
var problemtimevalue = document.getElementById("problemtimevalue");
console.log(problemtimevalue);
var feedbackmessageturn1 = document.getElementById("feedbackmessageturn1");
console.log(feedbackmessageturn1);
var readycountdown = document.getElementById("readycountdown");
console.log(readycountdown);
var problemdescription = document.getElementById("problemdescription");
console.log(problemdescription);
var feedbackstyleturn1 = document.getElementById("feedbackstyleturn1");
console.log(feedbackstyleturn1);
var feedbackmessageturn1 = document.getElementById("feedbackmessageturn1");
console.log(feedbackmessageturn1);
var selfexplainmessageturn1 = document.getElementById("selfexplainmessageturn1");
console.log(selfexplainmessageturn1);

// Buttons
console.log("Buttons");
var startpracticebtn = document.getElementById("startpracticebtn");
console.log(startpracticebtn);
var readybtn = document.getElementById("readybtn");
console.log(readybtn);
var hintbtn = document.getElementById("hintbtn");
console.log(hintbtn);
var pausebtn = document.getElementById("pausebtn");
console.log(pausebtn);
var attemptbtn = document.getElementById("attemptbtn");
console.log(attemptbtn);
var responsesubmitbtn = document.getElementById("responsesubmitbtn");
console.log(responsesubmitbtn);
var explanationsubmitbtn = document.getElementById("explanationsubmitbtn");
console.log(explanationsubmitbtn);
var nextbtn = document.getElementById("nextbtn");
console.log(nextbtn);
var feedbackpos1btn = document.getElementById("feedbackpos1btn");
console.log(feedbackpos1btn);
var feedbackneg1btn = document.getElementById("feedbackneg1btn");
console.log(feedbackneg1btn);
var selfexplainbtn1 = document.getElementById("selfexplainbtn1");
console.log(selfexplainbtn1);

// Input
console.log("Inputs");
var problemsolution = document.getElementById("problemsolution");
console.log(problemsolution);
var explanationsolution = document.getElementById("explanationsolution");
console.log(explanationsolution);
var multichoiceitem1 = document.getElementById("multichoiceitem1");
console.log(multichoiceitem1);
var multichoiceitem2 = document.getElementById("multichoiceitem2");
console.log(multichoiceitem2);
var multichoiceitem3 = document.getElementById("multichoiceitem3");
console.log(multichoiceitem3);
var multichoiceitem4 = document.getElementById("multichoiceitem4");
console.log(multichoiceitem4);

// Data Get Function - to get the JS object from JSON

// Content Controller - Data Set Function - to set the HTML content based on JS object
function setdata(moduleid){
    var id = moduleid;
    //console.log(id);
    //console.log(Object.entries(modules)[id][1].instructionalcontent);
    instructionalcontent.innerHTML = Object.entries(modules)[id][1].instructionalcontent;
    therapistpic.setAttribute("src",Object.entries(modules)[id][1].therapistpic);
    therapisttalkturn1.innerHTML = Object.entries(modules)[id][1].therapisttalkturn1;
    clientpic.setAttribute("src",Object.entries(modules)[id][1].clientpic);
    clienttalkturn1.innerHTML = Object.entries(modules)[id][1].clienttalkturn1;
    problemdescription.innerHTML = Object.entries(modules)[id][1].problemdescription;
    probleminstruction.innerHTML = Object.entries(modules)[id][1].probleminstruction;
    responsetimeleft = Object.entries(modules)[id][1].problemtimevalue;
    responsetimeleftvar = responsetimeleft;
    feedbackmessageturn1.innerHTML = Object.entries(modules)[id][1].feedbackcontent;
    hintmessage.innerHTML = Object.entries(modules)[id][1].hintcontent;
    readytimeleft = Object.entries(modules)[id][1].readycountdown;
    readytimeleftvar = readytimeleft;
    inputformat = Object.entries(modules)[id][1].inputformat;
    correctturn1 = Object.entries(modules)[id][1].correctanswerturn1;
    correctturn2 = Object.entries(modules)[id][1].correctanswerturn2;
    multichoiceitem1.innerHTML = Object.entries(modules)[id][1].turn1item1;
    multichoiceitem2.innerHTML = Object.entries(modules)[id][1].turn1item2;
    multichoiceitem3.innerHTML = Object.entries(modules)[id][1].turn1item3;
    multichoiceitem4.innerHTML = Object.entries(modules)[id][1].turn1item4;
    validationmessage.innerHTML = Object.entries(modules)[id][1].validationcontent;
}