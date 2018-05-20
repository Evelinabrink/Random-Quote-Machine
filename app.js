let quote = document.getElementById('newQuote');
let body = document.querySelector('body');

// function to get random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// event listener for button
quote.addEventListener('click', function (){

    // get random quote from api
    fetch('https://random-quote-generator.herokuapp.com/api/quotes/random')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        // output quote and author
        document.querySelector('blockquote').textContent = '"' + data.quote + '"';
        document.querySelector('h3').textContent = data.author;
        // change background-color
        body.style.backgroundColor = getRandomColor();

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
})