// declare variable
const whiteButtons = document.querySelectorAll(".piano-keys");

const audio = document.createElement("audio");
function utility(button) {
  function pressKeys(e) {
    if (
      e.target.getAttribute("class") === "piano-keys" ||
      e.target.getAttribute("class").includes("piano-black")
    ) {
      e.target.classList.add("grey-color");
      audio.src = `./asset/${e.target.dataset.audio}.mp3`;
      audio.play();
    }
  }
  function releaseKeys(e) {
    e.target.classList.remove("grey-color");
  }
  button.addEventListener("mousedown", pressKeys);
  button.addEventListener("touchstart", pressKeys);
  button.addEventListener("mouseup", releaseKeys);
  button.addEventListener("touchend", releaseKeys);
}
whiteButtons.forEach(utility);
