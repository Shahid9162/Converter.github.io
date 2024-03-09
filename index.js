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

//Kilometer to Miles Convert
let convertMiles = document.querySelector(".mlcnvrt");
convertMiles.addEventListener("click", () => {
  let kilometerInput = document.querySelector("#kmsip").value;
  let milesOutput = kilometerInput * 0.621371;

  document.querySelector("#mlop").value = milesOutput.toFixed(3) + " Miles";
});
//Miles to Kilometer Convert
let convertKilometers = document.querySelector(".kmcnvrt");
convertKilometers.addEventListener("click", () => {
  let milesInput = document.querySelector("#mlip").value;
  let kilometerOutput = milesInput * 1.609;

  document.querySelector("#kmsop").value =
    kilometerOutput.toFixed(3) + " Kilometers";
});
