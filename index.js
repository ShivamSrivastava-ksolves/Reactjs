console.log("First day of training");
 
// adding two numbers
// let c = addnumber(1,2,3);
// console.log(c);

// function addnumber(a,b,d){

//     return a + b + d;

// }

//get element by id
const testElement = document.getElementById("test");
const changeTextButton = document.getElementById("changeTextButton");
changeTextButton.addEventListener("click", function(){
    testElement.textContent = "ById";
  });


//get element by class

const testElements1 = document.getElementsByClassName("classname1");
 const changeTextButton2 = document.getElementById("changeTextButton1");
 changeTextButton2.addEventListener("click", function() {

 if (testElements1.length > 0) {

 testElements1[0].textContent = "ByClassName";
 } else {
 console.log("No elements with class 'classname1' found.");
 }
});


// get element by tag name

const testElement3 = document.getElementsByTagName("p");
const changeTextButton3 = document.getElementById("changeTextButton2");
changeTextButton3.addEventListener("click", function(){
    testElement3[2].style.color = "red";
  });


  // get element by query selector


  const testElement4 = document.querySelector(".classname1");
  const changeTextButton4 = document.getElementById("changeTextButton3");
  changeTextButton4.addEventListener("click", function(){
      console.log(testElement4)
    });

    // query selector all

    const testElement5 = document.querySelectorAll(".classname1");
  const changeTextButton5 = document.getElementById("changeTextButton4");
  changeTextButton5.addEventListener("click", function(){
      console.log(testElement5)
    });










