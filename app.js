// current day in the center
//const currentDay = $("#currentDay");

//let currentDay = moment().format("MMMM Do YYYY"); 

console.log("hoi");
$(document).ready(function(){
  //save btn click
  $(".saveButton").on("click", function(){

  let timeID = $(this).parent().attr("id")
  let value = $(this).siblings("textarea").val();


  // localstorage data saved
  localStorage.setItem(timeID, value);
    $(".notification").addClass("show");

  setTimeout(function(){
    $("notification").removeClass("show");


  }, 5000)
  
})
  // function that goes through past present and future
function hourUpdate(){
  let currentHour = moment().hour();

 console.log (currentHour);
 let el = $(".time.block")
  for(let i=0; i < el.length; i++){
    
    console.log(i);
   let hour = parseInt(el.get(i).getAttribute("id").split("-")[1])
   console.log (el.get(i));
   if(hour < currentHour) {
    el.get(i).addClass("past")
   } else if(hour === currentHour){
    el.get(i).addClass("past")
    el.get(i).removeClass("present") 
   } else {
     el.get(i).removeClass("past")
     el.get(i).removeClass("present")
     el.get(i).addClass("future")
   }
  }

}

hourUpdate();

// localstorage time date saved
let interval = setInterval(hourUpdate, 15000);

$("#hour-9 textarea").val(localStorage.getItem("hour-9"))
$("#hour-10 textarea").val(localStorage.getItem("hour-10"))
$("#hour-11 textarea").val(localStorage.getItem("hour-11"))
$("#hour-12 textarea").val(localStorage.getItem("hour-12"))
$("#hour-13 textarea").val(localStorage.getItem("hour-13"))
$("#hour-14 textarea").val(localStorage.getItem("hour-14"))
$("#hour-15 textarea").val(localStorage.getItem("hour-15"))
$("#hour-16 textarea").val(localStorage.getItem("hour-16"))
$("#hour-17 textarea").val(localStorage.getItem("hour-17"))
$("#hour-18 textarea").val(localStorage.getItem("hour-18"))

$("#currentDay").text(moment().format("dddd, MMMM, Do"))


});

