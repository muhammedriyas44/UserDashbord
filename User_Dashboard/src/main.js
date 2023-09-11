import { setupEventListeners } from './eventListeners.js';

document.addEventListener("DOMContentLoaded", function () {
  setupEventListeners()
  setupPageFunction();
});

function setupPageFunction() {
  
  const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");

const submenuItems = document.querySelectorAll(".submenu_item");

const editButton = document.getElementById('edit-button');
const updateButton = document.getElementById('update-button');
const editableFields = document.querySelectorAll('.editable-field');
const inputFields = document.querySelectorAll('.form-control');
const profileLink = document.getElementById("profileLink");
const profileContainer = document.getElementById("profileContainer");
const orderLink = document.getElementById("orderLink");
const orderContainer = document.getElementById("orderContainer");
const bankAccountsLink = document.getElementById("bankAccountsLink");
const cardDetailsContainer = document.getElementById("c-card");
const passwordLink = document.getElementById("passwordLink");
const passwordContainer = document.getElementById("passwordContainer");
const updateButtonCard = document.getElementById("updateButtonCard");
updateButtonCard.addEventListener('click', () => {
  const cardNumber = document.getElementById("cardNumber").value;
  const cardholderName = document.getElementById("cardholderName").value;
  const expiryDate = document.getElementById("expiryDate").value;
  const cvv = document.getElementById("cvv").value;

  const cardNumberElement = document.querySelector(".card-number");
  const cardholderNameElement = document.querySelector(".cardholder-name");
  const expiryDateElement = document.querySelector(".expiry-date");
  const cvvElement = document.querySelector(".cvv");

  cardNumberElement.textContent = cardNumber;
  cardholderNameElement.textContent = cardholderName;
  expiryDateElement.textContent = expiryDate;
  cvvElement.textContent = "CVV: " + cvv;
});
profileLink.addEventListener("click", function (event) {
  event.preventDefault();
  profileContainer.style.display = "block";
  orderContainer.style.display = "none";
  cardDetailsContainer.style.display = "none";
  passwordContainer.style.display = "none";
});

orderLink.addEventListener("click", function (event) {
  event.preventDefault();
  profileContainer.style.display = "none";
  orderContainer.style.display = "block";
  cardDetailsContainer.style.display = "none";
  passwordContainer.style.display = "none";
});
bankAccountsLink.addEventListener("click", function (event) {
  event.preventDefault();
  profileContainer.style.display = "none";
  orderContainer.style.display = "none";
  cardDetailsContainer.style.display = "block";
  passwordContainer.style.display = "none";
});
passwordLink.addEventListener("click", function (event) {
  event.preventDefault();
  profileContainer.style.display = "none";
  orderContainer.style.display = "none";
  cardDetailsContainer.style.display = "none";
  passwordContainer.style.display = "block";
});


editButton.addEventListener('click', () => {
  editButton.classList.add('d-none');
  updateButton.classList.remove('d-none');

  editableFields.forEach((field, index) => {
    field.classList.add('d-none');
    inputFields[index].classList.remove('d-none');
    inputFields[index].value = field.innerText;
  });
});

updateButton.addEventListener('click', () => {
  editButton.classList.remove('d-none');
  updateButton.classList.add('d-none');

  editableFields.forEach((field, index) => {
    field.classList.remove('d-none');
    inputFields[index].classList.add('d-none');
    field.innerText = inputFields[index].value;
  });
});


darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});


  



setupEventListeners();
  setupEventListeners();
}
