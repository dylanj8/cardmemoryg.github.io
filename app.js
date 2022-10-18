let clickedCard = null;
let tracker = 0;

const suites = [
  "ten",
  "jack",
  "queen",
  "king",
  "ace",
  "joker",
  "ten",
  "jack",
  "queen",
  "king",
  "ace",
  "joker",
];

const cards = [...document.querySelectorAll(".card")];
console.log(cards);

let cardsCopy = [].concat(suites);
suites.sort(() => {
  return 0.5 - Math.random();
});
console.log(cardsCopy);

for (let i = 0; i < cards.length; i++) {
  cards[i].classList += cardsCopy[i];
  cards[i].setAttribute("data", cardsCopy[i]);
}

const onClicked = (e) => {
  const target = e.currentTarget;
  target.className = target.className.replace("bg-hidden", "").trim();
  console.log(target.getAttribute("data"));
  target.className += " done";

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
    if (clickedCard.getAttribute("data") === target.getAttribute("data")) {
      //   clickedCard.className += " done";
      //   target.className += " done";
      tracker++;
      if (tracker === 6) {
        alert("YOU WIN!");
      }
      console.log("cards are equal");
      clickedCard = null;
    } else {
      console.log("cards are not equal");
      setTimeout(() => {
        clickedCard.className =
          clickedCard.className.replace(" done", "").trim() + "bg-hidden";
        target.className =
          target.className.replace(" done", "").trim() + "bg-hidden";
        clickedCard = null;
      }, 500);
    }
  }
};
