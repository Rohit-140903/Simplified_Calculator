let inputBtn = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let selectTheme = document.querySelector("#btn");

let body = document.querySelector("body");
let colors = ['red','green','skyBlue','yellow'];

selectTheme.addEventListener("click",function(){
    
    // console.log(selectTheme);
    const colorIndex = parseInt(Math.random()*colors.length);
    let gradiantColor = "linear-gradient(45deg,#0a0a0a," + colors[colorIndex] + ")";
    // btnpress-color = colors[colorIndex];
    document.querySelector(":root").style.setProperty("--btnHover", colors[colorIndex]); // directing access css variable in js..
    // console.log(colorIndex);
    // body.style.background = colors[colorIndex];
    body.style.background = gradiantColor;

});


let string = "";

let arr = Array.from(buttons);
arr.forEach((button) => { // arrow back function call
    button.addEventListener("click",function(e){ // call back function call
        if(e.target.innerHTML == '='){
            try{
                string = eval(string);
                inputBtn.value = string;

            }
            catch(error){
               alert("Enter valid operations!");
            }
            
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            inputBtn.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
           string = string.substr(0,string.length-1);
           inputBtn.value = string;
        }

        else{
            string += e.target.innerHTML;
            inputBtn.value = string;
        }
        if(string.length > 12){
             alert("Digit Limit Exceeded! Digit Length <= 12");
             inputBtn.value = string.substr(0,string.length -1);
             string = string.substr(0,string.length -1);
        }

    });


});

document.addEventListener("keydown",function(event){ // call back function call
    if(event.key == 'Enter'){
        event.preventDefault();
        try{
            string = eval(string);
            inputBtn.value = string;
        }
        catch(error){
           alert("Enter valid operations!");
        }
        
    }
    else if(event.key == 'Backspace'){
       string = string.substr(0,string.length-1);
       inputBtn.value = string;
    }

    else{
        string += event.key;
        inputBtn.value = string;
    }
    if(string.length > 12){
         alert("Digit Limit Exceeded! Digit Length <= 12");
        inputBtn.value = string.substr(0,string.length-1);
        string = string.substr(0,string.length -1);
   }

});
