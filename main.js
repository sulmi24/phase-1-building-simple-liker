// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let model = document.getElementById("modal");
let heart = document.querySelector(".like-glyph");
let er = document.getElementById("modal-message");
let modal = document.querySelector(".hidden");

heart.addEventListener("click", () => {
  mimicServerCall()
    .then((res) => {
      if (res === "Pretend remote server notified of action!") {
        heart.innerHTML = FULL_HEART;
      }
    })
    .catch((erorr) => {
      er.textContent = erorr;
    });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
