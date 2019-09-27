function checkValue() {
  var text;
  var lang = document.getElementById("inputValue").value;

  switch(lang) {
    case "JavaScript":
      text = "Yay!";
      break;
    case "HTML":
      text = "Ok";
    case "CSS":
        text = "Right";
        break;


  //add case

        default:
          text = "You should choose one of the following 3";
  }
  document.getElementById("displayText").innerHTML = text;
}
