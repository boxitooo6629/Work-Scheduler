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

});

