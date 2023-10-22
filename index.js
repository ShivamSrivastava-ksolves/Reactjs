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


// var let const variables

var x = 10;
let y = 20;
const z = 30;

// const z = 40;
// console.log(z);    it will show error


// loops

// for(i=x+1;i<=20;i++){
//     console.log(i);  
// }

// while(x<20){
//     console.log(x);
//     x++;
// }



//functions

function callfunct(){

    alert("You called a function");  
    console.log("function called")
}

//  array

var array1=["shivam","raj","sumit"];

function arrays(){
    for(i=0;i<=array1.length;i++){
        console.log(array1[i]);
    }
}

// objects

emp={id:112,name:"shivam",salary:"20000"};

function objects(){
    
        console.log(emp.id+" "+emp.name+" "+emp.salary);

}

// rest api is fetched















