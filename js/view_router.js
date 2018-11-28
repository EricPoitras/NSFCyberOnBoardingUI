// Views
console.log("Views");
var instruction = document.getElementById("instruction");
console.log(instruction);
var problem = document.getElementById("problem");
console.log(problem);
var talkturn1 = document.getElementById("talkturn1");
console.log(talkturn1);
var talkturn2 = document.getElementById("talkturn2");
console.log(talkturn2);
var solution = document.getElementById("solution");
console.log(solution);
var feedback = document.getElementById("feedback");
console.log(feedback);
var selfexplanation = document.getElementById("selfexplanation");
console.log(selfexplanation);
var response = document.getElementById("response");
console.log(response);
var responsetime = document.getElementById("responsetime");
console.log(responsetime);
var hintmessage = document.getElementById("hintmessage");
console.log(hintmessage);
var validationmessage = document.getElementById("validationmessage");
console.log(validationmessage);
var feedbackturn1 = document.getElementById("feedbackturn1");
console.log(feedbackturn1);
var selfexplainturn1 = document.getElementById("selfexplainturn1");
console.log(selfexplainturn1);
var multichoiceresponse = document.getElementById("multichoiceresponse");
console.log(multichoiceresponse);
var feedbackpos1 = document.getElementById("feedbackpos1");
console.log(feedbackpos1);
var feedbackneg1 = document.getElementById("feedbackneg1");
console.log(feedbackneg1);
var selfexplain1 = document.getElementById("selfexplain1");
console.log(selfexplain1);

// View Controller Functions
function hideallviews(){
    instruction.style.display = "none";
    problem.style.display = "none";
    talkturn1.style.display = "none";
    talkturn2.style.display = "none";
    selfexplanation.style.display = "none";
    responsetime.style.display = "none";
    solution.style.display = "none";
    feedback.style.display = "none";
    hintmessage.style.display = "none";
    validationmessage.style.display = "none";
    feedbackturn1.style.display = "none";
    selfexplainturn1.style.display = "none";
    multichoiceresponse.style.display = "none";
    response.style.display = "none";
    selfexplain1.style.display = "none";
}

function togglebuttonset1(){
    attemptbtn.style.display = "none";
    explanationsubmitbtn.style.display = "none";
    responsesubmitbtn.style.display = "block";
    pausebtn.style.display = "block";
    hintbtn.style.display = "block";
}

function togglebuttonset2(){
    attemptbtn.style.display = "block";
    explanationsubmitbtn.style.display = "block";
    responsesubmitbtn.style.display = "none";
    pausebtn.style.display = "none";
    hintbtn.style.display = "none";
}

// View Main Controller
function viewcontroller(view){
    // Hide all views
    hideallviews();
    // Show specific views
    switch(view){
    case "instruction":
        instruction.style.display = "block";
        break;
    case "problem":
        problem.style.display = "block";
        readycountdown.textContent = "Ready";
        break;
    case "practice":
        talkturn1.style.display = "block";
        solution.style.display = "block";
        if(inputformat == "multichoice4items"){
            // Multi choice input
            multichoiceresponse.style.display = "block";
        }else{
            // Text area input
            response.style.display = "block";
            problemsolution.disabled = false;
            problemsolution.value = "";
        }
        problemtimevalue.textContent = responsetimeleft;
        responsetime.style.display = "block";
        togglebuttonset1();
        break;
    case "selfexplanation":
        talkturn1.style.display = "block";
        talkturn2.style.display = "block";

        solution.style.display = "block";
        //response.style.display = "block";
        problemsolution.disabled = true;
        selfexplanation.style.display = "block";
        explanationsolution.value = "";
        togglebuttonset2();
        break;        
    case "feedback":
        selfexplain1.style.display = "block";
        talkturn1.style.display = "block";
        talkturn2.style.display = "block";
        feedback.style.display = "block";
        break;
    }
}