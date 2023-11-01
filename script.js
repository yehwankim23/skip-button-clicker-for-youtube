// new MutationObserver((_records, _observer) => {
//   document.querySelector("button.ytp-ad-skip-button-modern")?.click();
// }).observe(document.body, { childList: true });

let intervalID = 0;

function setNewInterval() {
  clearInterval(intervalID);

  intervalID = setInterval(() => {
    document.querySelector("button.ytp-ad-skip-button-modern")?.click();
  }, 1000);
}

window.addEventListener("focus", () => {
  setNewInterval();
});

// window.addEventListener("blur", () => {
//   clearInterval(intervalID);
// });

if (document.hasFocus()) {
  setNewInterval();
}
