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

function changeCard() {
  if (idx > card.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = card.length - 1;
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
