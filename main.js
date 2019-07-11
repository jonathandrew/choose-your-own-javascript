const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();
  
  const inputBox = document.querySelector('.user-input');
  const userInput = inputBox.value;
  
  if (userInput .includes ('east')){
    window.location = './east.html';  
  }
  if (userInput .includes('west')){
    window.location = './west.html  ';
  }
  
  if (userInput .includes('north')){
    window.location = './north.html';
  }
  
  if (userInput .includes('south')){
    window.location = './south.html';
  }
  
  if (userInput .includes('north') && userInput .includes('west')){
    window.location = './north-west.html';
  }
  
  
  if (userInput .includes('north') &&  userInput  .includes('east')){
    window.location = './north-east.html';
  }
  
  if (userInput .includes('south') && userInput .includes('west')){
    window.location = './south-west.html';
  }

  if (userInput .includes('south') && userInput .includes('east')){
    window.location = './south-east.html';
  }
  
  if (userInput .includes(Number)){
    window.location = './numbers.html'
  }
  if (userInput .includes('up')){
    window.location = './up.html'
  }
  if (userInput .includes('down')){
    window.location = './down.html'
  }
  
  if (userInput .includes('no') || userInput .includes('where')){
    window.location = './nowhere.html'
  }

  if (userInput .includes ('how')){
    window.location = './how.html'
  }
  
 if(userInput .includes ('plane')){
   window.location = './plane.html'
 }
 if( userInput .includes('boat')){
   window.location = './boat.html'
 }


}
