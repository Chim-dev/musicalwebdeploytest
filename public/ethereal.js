const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("Soothing");
const mameko = document.getElementById("mameko");
const play = document.getElementById("mamekobtn");
const majogari = document.getElementById("majogari");
const majogariBtn = document.getElementById("majogaribtn");
const fila = document.getElementById("fila");
const filaBtn = document.getElementById("filabtn");
const rose = document.getElementById("rose");
const roseBtn = document.getElementById("rosebtn");
const pas = document.getElementById("pas");
const pasBtn = document.getElementById("pasbtn");
const btns = [
  { audio: pas, button: pasBtn },
  { audio: audio, button: playPauseBtn },
  { audio: mameko, button: play },
  { audio: majogari, button: majogariBtn },
  { audio: fila, button: filaBtn },
  { audio: rose, button: roseBtn },
];

function toggleAudio(audio, button) {
  if (audio.paused) {
    audio.play();
    button.textContent = "⏸ Pause";
  } else {
    audio.pause();
    button.textContent = "▶ Play";
  }
}


btns.forEach(({ audio, button }) => {
  button.addEventListener("click", () => toggleAudio(audio, button));
});
