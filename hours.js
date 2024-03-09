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

// Hours to Seconds Convert
const convertSeconds = document.querySelector(".seccnvrt");
convertSeconds.addEventListener("click", () => {
  let hoursInput = document.querySelector("#hrip").value;
  let secondsOutput = hoursInput * 3600;

  document.querySelector("#secop").value = secondsOutput + " Seconds";
});
//Seconds to Hours Convert
const convertHours = document.querySelector(".hrcnvrt");
convertHours.addEventListener("click", () => {
  let secondsInput = document.querySelector("#secip").value;
  let hoursOutput = secondsInput * 0.000277778;

  document.querySelector("#hrop").value = hoursOutput + " Hours";
});
