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

//Centimeters to Inches Convert
let convertInches = document.querySelector(".incnvrt");
convertInches.addEventListener("click", () => {
  let centimeterInput = document.querySelector("#cmip").value;
  let inchesOutput = centimeterInput * 0.393701;

  document.querySelector("#inop").value = inchesOutput.toFixed(3) + " Inches";
});

//Inches to Centimeter Convert
let convertCentimeter = document.querySelector(".cmcnvrt");
convertCentimeter.addEventListener("click", () => {
  let inchesInput = document.querySelector("#inip").value;
  let centimeterOutput = inchesInput * 2.54;

  document.querySelector("#cmop").value =
    centimeterOutput.toFixed(2) + " Centimeters";
});
