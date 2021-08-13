var screen = document.querySelector("#out-scn");
var numArr = [];



  function display(num) {
screen.value += num;
}; 



  function calculate(value){
  try{
    screen.value = eval(screen.value);
  }
  catch(err){
    alert("Invaid Calculation"); 
  }
}



  function clr(value) {
  screen.value = "";
}



  function del() {
  screen.value = screen.value.slice(0, -1);
}


  
function MPlus(){
    let myVal = screen.value;
  localStorage.setItem("myValue", myVal);
   let storage = localStorage.getItem("myValue");
 screen.value= "";
    var memoryPlus = document.querySelector(".mPlus")
  memoryPlus.addEventListener("click", function (){
   screen.value = +screen.value + +storage;
  })
 
}

 function MMinus(){
  let myVal = screen.value;
  localStorage.setItem("myValue2", myVal);
 let storage = localStorage.getItem("myValue2");
 screen.value= "";
 var memoryMinus = document.querySelector(".mMinus")
  memoryMinus.addEventListener("click", function (){
    screen.value = -(+screen.value)-(+storage);
  });
 }



function MClear(){
  window.localStorage.clear();
  screen.value= "";
  location.reload();
}
  


var number = document.querySelectorAll(".cal")


for(i=0; i<number.length; i++){
 let numVal= (number[i].innerText);
 
 function insert(numArr, ...items) {
  numArr.push(...items);
}

insert(numArr, numVal);


  
}


document.addEventListener("keydown", function(event){


   if(event.key === numArr.includes("event.key")){
    display(event.key);
   }
    else if(event.key === "Enter"){
      calculate(event.key);
    }
    else if(event.key === "Delete"){
       clr(event.key);
    }
     
  
});



  