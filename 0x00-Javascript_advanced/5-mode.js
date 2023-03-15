window.onload = function() {
  function changeMode(size, weight, transform, background, color) {
    // Get the body element of the page
    const body = document.body;
  
    // Set the style properties of the body element
    body.style.fontSize = `${size}px`;
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
  }
  
  function main() {
    spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    // get the body element
    const body = document.body;
  
    // create a new paragraph element
    const paragraph = document.createElement('p');
  
    // set the text of the paragraph
    paragraph.textContent = 'Welcome Holberton!';
  
    // add the paragraph to the body
    body.appendChild(paragraph);
    const spookyButton = document.createElement('button');
    spookyButton.innerHTML = 'Spooky';
    spookyButton.onclick = function() {
      changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    };
  
    const darkButton = document.createElement('button');
    darkButton.innerHTML = 'Dark mode';
    darkButton.onclick = function() {
      changeMode(12, 'bold', 'capitalize', 'black', 'white');
    };
  
    const screamButton = document.createElement('button');
    screamButton.innerHTML = 'Scream mode';
    screamButton.onclick = function() {
      changeMode(12, 'normal', 'lowercase', 'white', 'black');
    };
  
    document.body.appendChild(spookyButton);
    document.body.appendChild(darkButton);
    document.body.appendChild(screamButton);
  }
  main();
};
