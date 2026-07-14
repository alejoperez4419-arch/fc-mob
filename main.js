const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

const userId = document.getElementById("userId");
const amountCoins = document.getElementById("amountCoins");
const amountGP = document.getElementById("amountGP");

const sendBtn = document.getElementById("sendBtn");
const resendBtn = document.getElementById("resendBtn");
const spinner = document.getElementById("spinner");

const displayCoins = document.getElementById("displayCoins");
const displayGP = document.getElementById("displayGP");

function showSection(section) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });

    section.classList.add("active");
}

function sendData() {

    const id = userId.value.trim();
    const coins = amountCoins.value.trim();
    const gp = amountGP.value.trim();

    if (!id || !coins || !gp) {
        alert("Please complete all fields.");
        return;
    }

    sendBtn.disabled = true;
    spinner.style.display = "block";

    setTimeout(() => {

        spinner.style.display = "none";
        sendBtn.disabled = false;

        displayCoins.textContent = Number(coins).toLocaleString();
        displayGP.textContent = Number(gp).toLocaleString();

        showSection(section2);

    }, 2000);
}

sendBtn.addEventListener("click", sendData);

resendBtn.addEventListener("click", () => {

    userId.value = "";
    amountCoins.value = "";
    amountGP.value = "";

    showSection(section1);

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && section1.classList.contains("active")) {
        sendData();
    }

});