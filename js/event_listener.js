// Event Listeners
startpracticebtn.addEventListener("click",startpractice);
readybtn.addEventListener("click", ready);
hintbtn.addEventListener("click", hint);
pausebtn.addEventListener("click", pause);
attemptbtn.addEventListener("click", attempt);
responsesubmitbtn.addEventListener("click", responsesubmit);
explanationsubmitbtn.addEventListener("click", explanationsubmit);
nextbtn.addEventListener("click", next);
feedbackpos1btn.addEventListener("click", feedbackpos_one_show);
feedbackneg1btn.addEventListener("click", feedbackneg_one_show);
selfexplainbtn1.addEventListener("click", selfexplain_one_show);
multichoiceitem1.addEventListener("click", multichoiceitem_one_select);
multichoiceitem2.addEventListener("click", multichoiceitem_two_select);
multichoiceitem3.addEventListener("click", multichoiceitem_three_select);
multichoiceitem4.addEventListener("click", multichoiceitem_four_select);

// Event Controller Functions
function stylefeedback(htmlelement, classvalue){
    htmlelement.classList.remove("alert-success");
    htmlelement.classList.remove("alert-danger");
    htmlelement.classList.add(classvalue);
}

function getselecteditem(){
    var responsevalue;
    if(multichoiceitem1.classList.contains("itemselectcus")){
       responsevalue = "item1selected";
        textresponsetoclient = multichoiceitem1.textContent;
    }else if(multichoiceitem2.classList.contains("itemselectcus")){
       responsevalue = "item2selected";
       textresponsetoclient = multichoiceitem2.textContent;
    }else if(multichoiceitem3.classList.contains("itemselectcus")){
       responsevalue = "item3selected";
       textresponsetoclient = multichoiceitem3.textContent;
    }else if(multichoiceitem4.classList.contains("itemselectcus")){
       responsevalue = "item4selected";
       textresponsetoclient = multichoiceitem4.textContent;
    }else{
        responsevalue = "";
    }
    itemresponsetoclient = responsevalue;
    console.log("Response is stored in variable...");
}

function getresponse(){
    var responsevalue = problemsolution.value;
    console.log(responsevalue);
    textresponsetoclient = responsevalue;
    console.log("Response is stored in variable...");
}

function getexplanation(){
    var explanationvalue = explanationsolution.value;
    console.log(explanationvalue);
    textexplanation = explanationvalue;
    console.log("Explanation is stored in variable...");
}

function setexplanation(){
    selfexplainmessageturn1.textContent = textexplanation;
}

function setresponse(responsevalue, element){
    console.log(responsevalue);
    console.log(element);
    element.textContent = responsevalue;
    console.log("Response is set in UI...");
}

function decrementreadytime(value){
    readytimeleftvar = --value;
    console.log(readytimeleftvar);
    readycountdown.textContent = readytimeleftvar;
}

function readytimelefttimer(){
    var Timer1 = setInterval(function(){
        //readytimeleftvar = readytimeleft;
        decrementreadytime(readytimeleftvar);
        if(readytimeleftvar <= 1){
            clearInterval(Timer1);
        }
    },1000);
} 

function decrementresponsetime(value){
    responsetimeleftvar = -- value;
    console.log(responsetimeleftvar);
    problemtimevalue.textContent = responsetimeleftvar;
}

function responsetimelefttimer(){
    var Timer2 = setInterval(function(){
        //responsetimeleftvar = responsetimeleft;
        decrementresponsetime(responsetimeleftvar);
        if(responsetimeleftvar <= 1 || pausestate == true){
            clearInterval(Timer2);
        }
    },1000)
}

// Event Controllers
function startpractice(){
    console.log("Event Controller: startpratice()...");
    readytimeleftvar = readytimeleft;
    console.log("Reset Timer1...");
    viewcontroller("problem");
}
function ready(){
    console.log("Event Controller: ready()...");
    readytimelefttimer();
    setTimeout(function(){
        console.log("Reset Timer2...");
        pausestate = false;
        responsetimeleftvar = responsetimeleft;
        viewcontroller("practice");
        responsetimelefttimer();
    },4000);
}
function hint(){
    console.log("Event Controller: hint()...");
    hintmessage.style.display = "block";
}
function pause(){
    console.log("Event Controller: pause()...");
    if(pausestate==false){
        console.log("Pause was "+pausestate);
        pausestate = true;
        console.log("Pause is "+pausestate);
        problemsolution.disabled = true;
        multichoiceitem1.disabled = true;
        multichoiceitem2.disabled = true;
        multichoiceitem3.disabled = true;
        multichoiceitem4.disabled = true;
        pausebtn.innerHTML = "Play";
    }else{
        console.log("Pause was "+pausestate);
        pausestate = false;
        console.log("Pause is "+pausestate);
        problemsolution.disabled = false;
        multichoiceitem1.disabled = false;
        multichoiceitem2.disabled = false;
        multichoiceitem3.disabled = false;
        multichoiceitem4.disabled = false;
        responsetimelefttimer();
        pausebtn.innerHTML = "Pause";
    }
}
function attempt(){
    console.log("Event Controller: attempt()...");
    readytimeleftvar = 0;
    startpractice();
}
function responsesubmit(){
    console.log("Event Controller: responsesubmit()...");
    if(inputformat == "multichoice4items"){
        console.log("The format of input is multiple choice with 4 items, 1 selected...");
        getselecteditem();

        if(itemresponsetoclient == ""){
            validationmessage.style.display = "block";
        }else if(itemresponsetoclient == correctturn1 || itemresponsetoclient == correctturn2){
            feedbackpos1.style.display = "block";
            feedbackneg1.style.display = "none";
            pausestate = true;
            responsetimeleftvar = 0;
            viewcontroller("selfexplanation");
            setresponse(textresponsetoclient,therapisttalkturn1);
        }else{
            feedbackpos1.style.display = "none";
            feedbackneg1.style.display = "block";
            pausestate = true;
            responsetimeleftvar = 0;
            viewcontroller("selfexplanation");
            setresponse(textresponsetoclient,therapisttalkturn1);
        }
        // Display selected item value in move and show feedback

    }else{
        console.log("The format of input is textarea with a value...");
        getresponse();
        if(textresponsetoclient == ""){
            validationmessage.style.display = "block";
        }else{
            pausestate = true;
            responsetimeleftvar = 0;
            viewcontroller("selfexplanation");
            setresponse(textresponsetoclient,therapisttalkturn1);
        }
    }                
}
function explanationsubmit(){
    console.log("Event Controller: explanationsubmit()...");
    getexplanation();
    viewcontroller("feedback");
    setexplanation();
}
function next(){
    console.log("Event Controller: next()...");
    console.log("Set module sequence id...");
    ++modulesequence;
    setdata(modulesequence);
    viewcontroller("instruction");
}
function feedbackpos_one_show(){
    console.log("Toggle visibility of positive feedback...");
    if(feedbackturn1.style.display == "block" || feedbackturn1.style.display == ""){
        feedbackturn1.style.display = "none";
    }else{
        feedbackturn1.style.display = "block";
    }
    stylefeedback(feedbackstyleturn1,"alert-success");
}
function feedbackneg_one_show(){
    console.log("Toggle visibility of negative feedback...");
    if(feedbackturn1.style.display == "block" || feedbackturn1.style.display == ""){
        feedbackturn1.style.display = "none";
    }else{
        feedbackturn1.style.display = "block";
    }
    stylefeedback(feedbackstyleturn1,"alert-danger");
}
function selfexplain_one_show(){
    console.log("Toggle visibility of self explanation...");
    if(selfexplainturn1.style.display == "block" || selfexplainturn1.style.display == ""){
        selfexplainturn1.style.display = "none";
    }else{
        selfexplainturn1.style.display = "block";
    }
}
function removestylemultiitems(){
    multichoiceitem1.classList.remove("itemselectcus");
    multichoiceitem2.classList.remove("itemselectcus");
    multichoiceitem3.classList.remove("itemselectcus");
    multichoiceitem4.classList.remove("itemselectcus");
    multichoiceitem1.classList.add("alert-secondary");
    multichoiceitem2.classList.add("alert-secondary");
    multichoiceitem3.classList.add("alert-secondary");
    multichoiceitem4.classList.add("alert-secondary");
}
function multichoiceitem_one_select(){
    console.log("User selected multi choice item 1");
    if(pausestate == false){
        removestylemultiitems();
        multichoiceitem1.classList.remove("alert-secondary");
        multichoiceitem1.classList.add("itemselectcus");
    }else{

    }
}
function multichoiceitem_two_select(){
    console.log("User selected multi choice item 2");
    if(pausestate == false){
        removestylemultiitems();
        multichoiceitem2.classList.remove("alert-secondary");
        multichoiceitem2.classList.add("itemselectcus");
    }else{

    }
}
function multichoiceitem_three_select(){
    console.log("User selected multi choice item 3");
    if(pausestate == false){
        removestylemultiitems();
        multichoiceitem3.classList.remove("alert-secondary");
        multichoiceitem3.classList.add("itemselectcus");
    }else{

    }
}
function multichoiceitem_four_select(){
    console.log("User selected multi choice item 4");
    if(pausestate == false){
        removestylemultiitems();
        multichoiceitem4.classList.remove("alert-secondary");
        multichoiceitem4.classList.add("itemselectcus");
    }else{

    }
}