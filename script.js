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
  "1621586065399205888",
  "1621912676589772805",
  "1622273932169453569",
  "1642314668847890433",
  "1680925415139864576",
  "1704220583796281679",
  "1706349517669351750",
  "1709231691066147128",
  "1709231691066147128",
  "1711444597291848186",
  "1711758684672459102",
  "1711819004019376226",
  "1714692974901121147",
  "1715768306169221248",
  "1717699970298511548",
  "1719143030421098849",
  "1726419866410725723",
  "1727037082990768629",
  "1732553009995878451",
  "1735726406116504024",
  "1736109201196253571",
  "1737999931972207027",
];

tweets.popCulture = [
  "1616236066805284865",
  "1619777882540380160",
  "1624474164093505543",
  "1643689329141719058",
  "1674417937615306754",
  "1679241224136409089",
  "1682048326517104640",
  "1683231235286482944",
  "1683231244581052417",
  "1683231253590319104",
  "1689048952362917888",
  "1708265573547679907",
  "1708268991909670916",
];

tweets.holidays = [
    "1625556184676573185",
    "1636876032253784064",
    "1645195518652325888",
    "1645456554903187460",
    "1645456696351809539",
    "1645482633332240387",
    "1645501165818511360",
    "1645515806875238402",
    "1645578747288977417",
    "1657772225481564161",
    "1665719773525680131",
    "1675877568828915712",
    "1705945839913275729",
    "1705945850487222765",
    "1705945852890546255",
    "1705945854912213213",
    "1705945856539578759",
    "1705945866975015072",
    "1705945870217232856",
    "1705945871987171726",
    "1705945873799151729",
    "1705990593724260680",
    "1705990603194896434",
    "1705990605153726752",
    "1705990607036907528",
    "1705990615568167051",
    "1705990618722320487",
    "1705990620613923156",
    "1705990622438461825",
    "1705990624254595436",
    "1706035857986044330",
    "1706036006074417519",
    "1706036019731001798",
    "1706036022289502361",
    "1706036025305251936",
    "1706036051536379908",
    "1718325609711972723",
    "1719447521955619300",
    "1719504490024374700",
    "1719504168358903860",
    "1730664947149840878",
    "1738017085962195099",
    "1738984234516205631",
    "1739316451138265447",
  ];

tweets.currentEvents = [
    "1618062336685912065",
    "1624885805847138309",
    "1624904386383167492",
    "1624935586787106816",
    "1624943699485507585",
    "1641507342721187841",
    "1666813172307857409",
    "1666824544986750976",
    "1700951525357420918",
  ];

tweets.work = [
    "1611175925160329221",
    "1615511212699123712",
    "1657091985742651399",
    "1665144238525538310",
    "1671130150275014657",
    "1686099755435175941",
    "1686099761911230464",
    "1712597778524680424",
    "1714393432104321337",
    "1724824481699340400",
    "1727388455045644707",
    "1731867368983322789",
    "1732141918908215734",
    "1735494997514854769",
    "1735496607192240358",
  ];

tweets.lifeUpdates = [
    "1656039320560492545",
    "1656039340605046789",
    "1678419701569912835",
    "1681035248228872192",
    "1681035302415093762",
    "1681035405594951681",
    "1683558117693353985",
    "1688633743076945921",
    "1688633805655961600",
    "1696227135168401760",
    "1696227137731145772",
    "1696237972163620943",
    "1696247996696969349",
    "1696270378220298627",
    "1696293926288720016",
    "1696307942788616680",
    "1696308438991548751",
    "1696309538801000552",
    "1696310277573050786",
    "1696310723851264278",
    "1698841253876527413",
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
      case 51: // 3
        displayTweet("holidays");
        break;
      case 52: // 4
        displayTweet("currentEvents");
        break;
      case 53: // 5
        displayTweet("work");
        break;
      case 54: // 6
        displayTweet("lifeUpdates");
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
