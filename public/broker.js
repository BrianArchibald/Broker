const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");
const counter4 = document.getElementById("counter4");

counter1.textContent = "1";
counter2.textContent = "1";
counter3.textContent = "1";
counter4.textContent = "1";
  
let firstTimer = 0;
let secondTimer = 0;
let thirdTimer = 0;
let fourthTimer = 0;

function startCounting() {
  
    counter1.textContent = firstTimer;
    let brokerTimer = setInterval(function(){
      if(firstTimer <= 550) {
        counter1.textContent = firstTimer;
        firstTimer+=3;
      } else {
        clearInterval(firstTimer);
      }
    }, 140);

    counter2.textContent = secondTimer;
    let transactionsTimer = setInterval(function(){
      if(secondTimer <= 91720) {
        counter2.textContent = secondTimer;
        secondTimer+=287;
      } else {
        clearInterval(secondTimer);
      }
    }, 140);

     counter3.textContent = thirdTimer;
    let clientsTimer = setInterval(function(){
      if(thirdTimer <= 3350) {
        counter3.textContent = thirdTimer;
        thirdTimer+=11;
      } else {
        clearInterval(thirdTimer);
      }
    }, 140);

     counter4.textContent = fourthTimer;
    let citiesTimer = setInterval(function(){
      if(fourthTimer <= 320) {
        counter4.textContent = fourthTimer;
        fourthTimer+=2;
      } else {
        clearInterval(fourthTimer);
      }
    }, 140);
  }

window.addEventListener("scroll", startCounting);
  
  

