let inputbox = document.querySelector(".input-box"),
    textarea = inputbox.querySelector("textarea"),
    signalnum = inputbox.querySelector(".signal-num");

textarea.addEventListener("keyup", () => {
    let valenght = textarea.value.length;
    signalnum.innerText = valenght;
    (valenght > 0) ? inputbox.classList.add("active") : inputbox.classList.remove("active")
    (valenght > 100) ? inputbox.classList.add("error") : inputbox.classList.remove("error")
    console.log(valenght);
});