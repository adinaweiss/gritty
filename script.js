// Function to toggle full screen mode
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // Enter full screen mode
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    // Exit full screen mode
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Event listener for the spacebar
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    // ' ' is the key value for the spacebar
    event.preventDefault(); // Prevent the default spacebar action (page scroll)
    toggleFullScreen(); // Toggle full screen
  }
});

let tweets = {};

function getRandomItem(list) {
  // Generate a random index within the range of the list's length
  var randomIndex = Math.floor(Math.random() * list.length);
  // Return the item at the random index
  return list[randomIndex];
}

tweets.chaos = [
  "1620802560016941057",
  "1621147623749976064",
  "1621537586601725953",
];

tweets.popCulture = [
  "1616236066805284865",
  "1619777882540380160",
  "1624474164093505543",
];

document.addEventListener("keypress", function (event) {
  // Get the key code of the pressed key
  var keyCode = event.keyCode || event.which;

  // Check if the pressed key is in the range of 1 to 6
  if (keyCode >= 49 && keyCode <= 54) {
    // Display something based on the pressed key
    switch (keyCode) {
      case 49: // 1
        displayTweet("chaos");
        break;
      case 50: // 2
        displayTweet("popCulture");
        break;
      case 51:
        // displayMessage("You pressed 3");
        break;
      case 52:
        // displayMessage("You pressed 4");
        break;
      case 53:
        // displayMessage("You pressed 5");
        break;
      case 54:
        // displayMessage("You pressed 6");
        break;
      default:
        break;
    }
  }
});

function displayTweet(category) {
  let list = tweets[category];
  let id = getRandomItem(list);

  // Display the message on the page
  // document.getElementById('output').innerHTML = `
  // <blockquote class="twitter-tweet">
  //     <a href="${ url }"></a>
  // </blockquote>
  // `;

  document.getElementById("output").replaceChildren();

  twttr.widgets.createTweet(id, document.getElementById("output"), {
    theme: "dark",
  });

  // // Create a blockquote element
  // var blockquote = document.createElement('blockquote');
  // blockquote.setAttribute('class', 'twitter-tweet');
  // blockquote.innerHTML = `<a href="${url}">Tweet</a>`;

  // // Append the blockquote element to the output element
  // document.getElementById('output').appendChild(blockquote);

  // Create a script element for the Twitter widgets JavaScript
  // var script = document.createElement('script');
  // script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  // script.setAttribute('async', 'true');
  // script.setAttribute('charset', 'utf-8');

  // // Append the script element to the document body
  // document.body.appendChild(script);
}
