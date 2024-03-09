const card = document.querySelector(".card__inner");
let switchh = document.querySelector(".frntbtn");
switchh.addEventListener("click", () => {
  card.classList.add("is-flipped");
});

let switchh2 = document.querySelector(".bkbtn");
switchh2.addEventListener("click", () => {
  card.classList.remove("is-flipped");
});

//Menu icon
let hamIcon = document.querySelector("#ham");
let sideBar = document.querySelector(".sidebar");
hamIcon.addEventListener("click", () => {
  sideBar.style.display = "flex";
});
//Cross Icon
let crossIcon = document.querySelector("#cross");
crossIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
});

//Dollar to Rupee Convert
let convertRupee = document.querySelector(".rupcnvrt");
convertRupee.addEventListener("click", () => {
  let dollarInput = document.querySelector("#dolip").value;
  let rupeeOutput = dollarInput * 83.12;

  document.querySelector("#rupop").value = rupeeOutput.toFixed(3) + " Rupees";
});

//Rupee to Dollar Convert
let convertDollar = document.querySelector(".dolcnvrt");
convertDollar.addEventListener("click", () => {
  let rupeeInput = document.querySelector("#rupip").value;
  let dollarOutput = rupeeInput * 0.012;

  document.querySelector("#dolop").value = dollarOutput.toFixed(3) + " Dollars";
});
