// current day in the center
//const currentDay = $("#currentDay");

//let currentDay = moment().format("MMMM Do YYYY"); 


$(document).ready(function(){
  //save btn click
  $(".saveButton").on("click", function(){

  let timeID = $(this).parent().attr("id")
  let value = $(this).siblings(".description").val();


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

 
  for(let i=0; i < $(".time-block").lenght; i++){
   let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
   if(hour < currentHour) {
    $(".time-block")[i].classlist.add("past")
   } else if(hour === currentHour){
    $(".time-block")[i].classlist.add("past")
    $(".time-block")[i].classlist.remove("present") 
   } else {
     $(".time-block")[i].classlist.remove("past")
     $(".time-block")[i].classlist.remove("present")
     $(".time-block")[i].classlist.add("future")
   }
  }

}

hourUpdate();

// localstorage time date saved
let interval = setInterval(hourUpdate, 15000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
$("#hour-18 .description").val(localStorage.getItem("hour-18"))

$("#currentDay").text(moment().format("dddd, MMMM, Do"))


});

