var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
  document.body.className = 'body-state'+state;
  clearInterval(timer);
  countdownNumber = 10;
  document.getElementById('countdown').innerHTML = countdownNumber;

  //countdown
  if (state == 2) {
    timer = setInterval(function () {
      countdownNumber = countdownNumber-1;
      document.getElementById('countdown').innerHTML = countdownNumber;

  if (countdownNumber > 4 && countdownNumber <= 7) {
    //croak
    document.getElementById('croak').className = 'croak show';
  } else {
    document.getElementById('croak').className = 'croak';
  }

  if (countdownNumber > 1 && countdownNumber <= 4) {
    //ribbit
    document.getElementById('ribbit').className = 'ribbit show';
  } else {
    document.getElementById('ribbit').className = 'ribbit';
}

  if (countdownNumber <= 0) {
    changeState(3);
  };
}, 500);
} else if (state == 3) {
  var success = setTimeout(function () {
                  var randomNumber = Math.round(Math.random()*10);

                  console.log('randomNumber:', randomNumber)

                  //success
                  if (randomNumber > 2) {
                            changeState(4);

                  } else {
                          changeState(5); //oh no!
                  }
  }, 2000);
  };
}
