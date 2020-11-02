//  Define main variables
var header =  document.querySelector(".header");

var leftPanel = document.querySelector(".left-panel");

var footer = document.querySelector(".footer");

var colorRangeRed = document.querySelector(".color-range-red");


var colorRangeGreen = document.querySelector(".color-range-green");

var colorRangeBlue = document.querySelector(".color-range-blue");

var redValue = document.querySelector("#red-value");

var greenValue = document.querySelector("#green-value");

var blueValue = document.querySelector("#blue-value");

var but = document.querySelector("button");

// define variable for number of color
var r = 0;
var g = 0 ;
var b = 0 ;

var colors = [];  // no need after test 


colorRangeRed.addEventListener("input" , function () {
        redValue.value = colorRangeRed.value;
        r = redValue.value
        applySelectedColor()
      
});



colorRangeGreen.addEventListener("input" , function(){
    greenValue.value = colorRangeGreen.value;
    g = greenValue.value;
    applySelectedColor()
    
})



colorRangeBlue.addEventListener("input" , function () {
    blueValue.value = colorRangeBlue.value;
    b = blueValue.value
    applySelectedColor()
  
});

function createColor () {
    colors = [ r , g , b];
    return colors;
}



function applySelectedColor() {

    createColor();
    
   header.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ") ";
   leftPanel.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ") ";
   footer.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ") ";
}

// function for write the number insted of slider range


function writeDown(){
    r = redValue.value;
    g = greenValue.value;
    b = blueValue.value;
    colorRangeRed.value = redValue.value;
     colorRangeGreen.value = greenValue.value ;
     colorRangeBlue.value= blueValue.value ;
    applySelectedColor()

}


but.addEventListener("click" , function(){
    writeDown()
});

   





