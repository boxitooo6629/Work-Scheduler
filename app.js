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


});

