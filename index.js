function scuberGreetingForFeet(x) {

  if (x > 2500) {
    return "No can do.";
  } else if (x > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (x >= 400 && x <= 2000) {
    return "That will be twenty bucks.";
  } else if (x <= 400) {
    return "This one is on me!";
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
  
  // Write your code here!
}

function switchOnCharmFromTip(y){
  switch(y) {
    case "generous" :
      return "Thank you so much."
    case "not as generous" :
      return "Thank you."
    default :
      return "Bye."
  }

  
  // Write your code here!
}

scuberGreetingForFeet (600);