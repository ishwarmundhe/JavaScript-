const randomColor = () => {
    const hex = '0123456789ABCEDF';
    let colour = '#';
    for (i = 0; i < 6; i++) {
      colour += hex[Math.floor(Math.random() * 16)];
    }
    return colour;
  };
  
  let intervalId;
  const startChangingColour = () => {
    if (!intervalId) {
      intervalId = setInterval(changeBgColour, 1000);
    }
  
    function changeBgColour() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColour = () => {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  
  
    // console.log(intervalId)
  document.querySelector('#start').addEventListener('click', startChangingColour);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColour);
  