const cards = document.getElementById("cards");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const card = document.querySelectorAll("#cards #card");

console.log(card);

let idx = 0;

// Intervalo, caso você queira que o carousel rode automáticamente
// let interval = setInterval(run, 2000);

function run() {
  idx++;

  changeCard();
}

// Eu alterei a function changeCard para que o carrossel travasse na última e na primeira card.
// Assim, a tela fica sempre cheia de cards... Se você rola pra menos que 0, o index trava no 0. Se você rola pra mais que a última card, o index para na última.
function changeCard() {
  if (idx > card.length - 4) {
    idx = card.length - 4;
  } else if (idx < 0) {
    idx = 0;
  }

  cards.style.transform = `translateX(${-idx * 290}px)`;
}

// Reset interval é só se você quiser usar o carousel automático. Ele vai mudar automático, daí quando você clicar, o tempo da mudança automática reseta!
// function resetInterval() {
//   clearInterval(interval);
//   interval = setInterval(run, 2000);
// }

rightBtn.addEventListener("click", () => {
  idx++;

  changeCard();
  //   resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;

  changeCard();
  //   resetInterval();
});
