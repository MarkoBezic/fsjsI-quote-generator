/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote:
      "'If you don't produce, you won't thrive-no matter how skilled or talented you are'",
    source: "Cal Newport",
  },
  {
    quote: "'You can't steer a parked car'",
    source: "unknown",
  },
  {
    quote:
      "'You wasted $150,000 on an education you coulda got for $1.50 in late fees at the public library.'",
    source: "Will Hunting",
    citation: "Van Sant, Gus. Good Will Hunting. Miramax, 1997.",
  },
  {
    quote: "'Do what you can, with what you have, where you are.'",
    source: "Theodore Roosevelt",
    year: "1913",
  },
  {
    quote:
      "'Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough. ",
    source: "Richard P. Feynman",
  },
  {
    quote:
      "'Failure is unimportant. It takes courage to make a fool of yourself.'",
    source: "Charlie Chaplin",
    tags:
      "#HUMOR #CHARLIECHAPLIN #THEATER #COMEDY #STAGE #FILM #MOVIES #HOLLYWOOD",
  },
  {
    quote:
      "'Someone's sitting in the shade today because someone planted a tree a long time ago'",
    source: "Warren Buffet",
  },
  {
    quote: "'Once I made a decision, I never thought about it again.'",
    source: "Michael Jordan",
  },
  {
    quote: "'We first make our habits, and then our habits make us.'",
    source: "John Dryden",
  },
  {
    quote: "'If you fight for your limitations, you get to keep them'",
    source: "Jim Kwik",
  },
  {
    quote: "'It does not matter how slowly you go as long as you do not stop'",
    source: "Confucius",
  },
];

/***
 * Get random rgb value for color
 ***/

function getRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${blue}, ${green})`;
}

/***
 * Update background color of body element
 ***/

function updateBodyBackgroundColor() {
  const bodyEl = document.querySelector("body");
  const randomColor = getRandomColor();
  bodyEl.style["background-color"] = `${randomColor}`;
}

/***
 * Function get a random quote from array of quotes
 ***/

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

/***
 * Function updates HTML with random quote
 ***/

function printQuote() {
  const randomQuote = getRandomQuote();
  let newString = `
    <p class="quote">${randomQuote.quote}</p>  
    <p class="source">${randomQuote.source} 
  `;
  if (randomQuote.citation) {
    newString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    newString += `<span class="year">${randomQuote.year}</span>`;
  }
  newString += `</p>`;
  if (randomQuote.tags) {
    newString += `<p>${randomQuote.tags}</p>`;
  }
  document.getElementById("quote-box").innerHTML = newString;

  updateBodyBackgroundColor();
}

/***
 * Quote automatically updates every 10 seconds
 ***/

setInterval(printQuote, 10000);

/***
 * Eventlistener prints random quote to webpage
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
