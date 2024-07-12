const popupOne = document.querySelector(".popupOneWrapper");
const popupTwo = document.querySelector(".popupTwoWrapper");
const closePopupOne = document.querySelector(".popupOneClose");
const closePopupTwo = document.querySelector(".popupTwoClose");
const openPopupOne = document.querySelector(".openPopup1");
const openPopupTwo = document.querySelector(".openPopup2");


openPopupOne.addEventListener("click", () => {
  popupOne.style.display = "flex"
})
openPopupTwo.addEventListener("click", () => {
  popupTwo.style.display = "flex"
})
closePopupOne.addEventListener("click", () => {
  popupOne.style.display = "none"
})
closePopupTwo.addEventListener("click", () => {
  popupTwo.style.display = "none"
})
