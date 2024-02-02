const tabs = [
  {
    name: "tokyo",
    text: [
      "Tokyo (/'toʊkioʊ/;[7] Japanese: 東京, Tōkyō, [to:kʲo:] ⓘ), officially the Tokyo Metropolis (東京都, Tōkyō-to), is the capital of Japan and one of the most populous cities in the world with a population of over 14 million residents as of 2023",
      "The Tokyo metropolitan area, which includes Tokyo and nearby prefectures, is the world's most-populous metropolitan area with 40.8 million residents as of 2023,[9] and is the second-largest metropolitan economy in the world after New York, with a 2023 gross metropolitan product estimated at US$2 trillion",
      "Located at the head of Tokyo Bay, Tokyo is part of the Kantō region on the central coast of Honshu, Japan's largest island. Tokyo serves as Japan's economic center and the seat of both the Japanese government and the Emperor of Japan. The Tokyo Metropolitan Government administers Tokyo's central 23 special wards (which formerly made up Tokyo City)",
      "various commuter towns and suburbs in its western area, and two outlying island chains known as the Tokyo Islands. Despite most of the world knowing Tokyo as a city, since 1943 its governing structure has been more akin to a prefecture, with an accompanying Governor and Assembly taking precedence over the smaller municipal governments which make up the metropolis",
    ],
    images: ["tokyo1", "tokyo2", "tokyo3", "tokyo4"],
  },

  {
    name: "london",
    text: [
      "London is the capital and largest city of England, and the United Kingdom, with a population of around 8.8 million,[1] and the largest city in Western Europe by metropolitan area, with a population of 14,800,000",
      "It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for nearly two millennia.[10] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries",
      'The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. Since the 19th century,[12] the name "London" also refers to the metropolis around this core, historically split among the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire',
      "which since 1965 has largely comprised Greater London,[14] which is governed by 33 local authorities and the Greater London Authority",
    ],
    images: ["london1", "london2", "london3", "london4"],
  },
  {
    name: "newYork",
    text: [
      "New York, often called New York City[b] or simply NYC, is the most populous city in the United States, located at the southern tip of New York State on one of the world's largest natural harbors. The city comprises five boroughs, each of which is coextensive with a respective county. It is a global city and a cultural, financial, high-tech",
      " entertainment, and media center with a significant influence on commerce, health care, scientific output, life sciences,[11][12] research, technology, education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy",
      "With an estimated population in 2022 of 8,335,897 distributed over 300.46 square miles (778.2 km2),[4] the city is the most densely populated major city in the United States. New York has more than double the population of Los Angeles",
      "he nation's second-most populous city.[18] New York is the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the U.S. by both population and urban area",
    ],
    images: ["newYork1", "newYork2", "newYork3", "newYork4"],
  },
];
const btns = document.querySelectorAll("button");
const text = document.querySelector(".text");
const img = document.querySelector(".img");
const next = document.querySelector("#next");
const last = document.querySelector("#last");

window.addEventListener("load", () => {
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains("active")) {
      let btnCity = btns[i].dataset.city;
      for (let x = 0; x < tabs.length; x++) {
        let counter = 0;

        if (tabs[x].name === btnCity) {
          let city = tabs[i];
          text.innerHTML = city.text[counter];
          img.src = `./assets/${city.name}/${city.images[counter]}.jpg`;
          next.addEventListener("click", () => {
            counter++;
            if (counter === 4) {
              counter = 0;
            }
            text.innerHTML = city.text[counter];
            img.src = `./assets/${city.name}/${city.images[counter]}.jpg`;
          });
          last.addEventListener("click", () => {
            counter--;
            if (counter === -1) {
              counter = 3;
            }
            text.innerHTML = city.text[counter];
            img.src = `./assets/${city.name}/${city.images[counter]}.jpg`;
          });
        }
      }
    }
  }
});
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    let city = btn.dataset.city;
    for (let x = 0; x < tabs.length; x++) {
      let counter = 0;

      if (tabs[x].name === city) {
        let cityClicked = tabs[x];
        text.innerHTML = cityClicked.text[counter];
        img.src = `./assets/${cityClicked.name}/${cityClicked.images[counter]}.jpg`;
        next.addEventListener("click", () => {
          counter++;
          if (counter === 4) {
            counter = 0;
          }
          text.innerHTML = cityClicked.text[counter];
          img.src = `./assets/${cityClicked.name}/${cityClicked.images[counter]}.jpg`;
        });
      }
    }
  });
});
