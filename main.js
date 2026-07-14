// ==========================================
// GENERADOR
// main.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ELEMENTOS
    // ==========================

    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    const userId = document.getElementById("userId");
    const amountCoins = document.getElementById("amountCoins");
    const amountDraft = document.getElementById("amountGP");
    const amountGems = document.getElementById("amountGems");

    const displayCoins = document.getElementById("displayCoins");
    const displayDraft = document.getElementById("displayDraft");
    const displayGems = document.getElementById("displayGems");

    const sendBtn = document.getElementById("sendBtn");
    const resendBtn = document.getElementById("resendBtn");

    const spinner = document.getElementById("spinner");

    // ==========================
    // CONFIGURACIÓN
    // ==========================

    const LOADING_TIME = 1800;

    // ==========================
    // FUNCIONES
    // ==========================

    function formatNumber(number) {

        return Number(number).toLocaleString("en-US");

    }

    function showSpinner() {

        spinner.style.display = "block";

        sendBtn.disabled = true;

        sendBtn.style.opacity = ".6";

        sendBtn.style.cursor = "not-allowed";

    }

    function hideSpinner() {

        spinner.style.display = "none";

        sendBtn.disabled = false;

        sendBtn.style.opacity = "1";

        sendBtn.style.cursor = "pointer";

    }

    function changeSection() {

        section1.classList.remove("active");

        section2.classList.add("active");

    }

    function backToStart() {

        section2.classList.remove("active");

        section1.classList.add("active");

        hideSpinner();

    }

    function validateInputs() {

        const id = userId.value.trim();

        const coins = amountCoins.value.trim();

        const draft = amountDraft.value.trim();
        const gems = amountGems.value.trim();

        if (id === "") {

            alert("Please enter your ID.");

            userId.focus();

            return false;

        }

        if (coins === "" || Number(coins) <= 0) {

            alert("Please enter valid FC Points.");

            amountCoins.focus();

            return false;

        }

        if (draft === "" || Number(draft) <= 0) {

            alert("Please enter valid Draft.");

            amountDraft.focus();

            return false;

        }

        if (gems === "" || Number(gems) <= 0) {

            alert("Please enter valid Gems.");

            amountGems.focus();

            return false;

        }

        return true;

    }

    function generateReward() {

        if (!validateInputs()) return;

        showSpinner();

        setTimeout(() => {

            displayCoins.textContent = formatNumber(amountCoins.value);

            displayDraft.textContent = formatNumber(amountDraft.value);
            displayGems.textContent = formatNumber(amountGems.value);

            hideSpinner();

            changeSection();

        }, LOADING_TIME);

    }

    // ==========================
    // EVENTOS
    // ==========================

    sendBtn.addEventListener("click", generateReward);

    resendBtn.addEventListener("click", backToStart);

    // Enter para enviar

    document.addEventListener("keydown", (event) => {

        if (event.key === "Enter" && section1.classList.contains("active")) {

            generateReward();

        }

    });

    // ==========================
    // SOLO NÚMEROS POSITIVOS
    // ==========================

    const numericInputs = [

        amountCoins,

        amountDraft,

        amountGems

    ];

    numericInputs.forEach(input => {

        input.addEventListener("input", () => {

            if (Number(input.value) < 0) {

                input.value = "";

            }

        });

    });

    // ==========================
    // ANIMACIÓN BOTÓN
    // ==========================

    sendBtn.addEventListener("mouseenter", () => {

        sendBtn.style.transform = "translateY(-3px)";

    });

    sendBtn.addEventListener("mouseleave", () => {

        sendBtn.style.transform = "translateY(0px)";

    });

    resendBtn.addEventListener("mouseenter", () => {

        resendBtn.style.transform = "translateY(-3px)";

    });

    resendBtn.addEventListener("mouseleave", () => {

        resendBtn.style.transform = "translateY(0px)";

    });

});