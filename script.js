function realTime() {
    var dateTime = moment().format("LLLL");
    console.log(dateTime);
    $("#currentDay").append(dateTime);
  }
  realTime();
  console.log(realTime);
  
  var timeHour;
  var hour;
  
  
  
  $("button:submit").on("click", function() {

    var userInput = $(this)
      .closest("tr")
      .find("input:text")
      .val();
  
    var hour = $(this).data("hour");
  
    timeHour = $(this).attr("data-hour");
  
    localStorage.setItem(timeHour, userInput);
  
    console.log(userInput);
    console.log(hour);
  });
  
  var storageVariable = localStorage.getItem("userArray");
  storageVariable = JSON.parse(storageVariable);
  
  if (!storageVariable) {
    storageVariable = [];
  }
  console.log("this is a log" + storageVariable);
  
  //This function isnt working for me
  function displaySavedText() {
    for (var i = 0; i < storageVariable.length; i++) {
      var savedText = storageVariable[i].text;
      console.log("this is text:", savedText);
    }
  }
  displaySavedText();
  
  
  var currentTime = moment().format("H");
  console.log(currentTime);
  
  
  var trArray = $(".hour").get();
  
  for (var i = 0; i < trArray.length; i++) {
    var trId = parseInt(trArray[i].id);
    if (trId < parseInt(currentTime)) {
      console.log("this is trid: ", trId);
      trArray[i].classList.add("past");
      console.log(trArray[i]);
  
      var savedHour = trArray[i].id;
      var savedText = localStorage.getItem(hour);
      trArray[i].val = savedText;
      console.log("this is hour: ", savedHour);
      console.log(savedText);
    } else if (trId > parseInt(currentTime)) {
      console.log("this is trid: ", trId);
      trArray[i].classList.add("future");
      console.log(trArray[i]);
  
      var savedHour = trArray[i].id;
      var savedText = localStorage.getItem(hour);
      trArray[i].val = savedText;
      console.log("this is hour: ", savedHour);
      console.log(savedText);
    } else {
      trArray[i].classList.add("present");
      console.log(trArray[i]);
  
      var savedHour = trArray[i].id;
      var savedText = localStorage.getItem(hour);
      trArray[i].val = savedText;
      console.log("this is hour: ", savedHour);
      console.log(savedText);
    }
  }
  