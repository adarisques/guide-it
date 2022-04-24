"use strict";

var genKey = async function () {
    let cryptoKey = await window.crypto.subtle.generateKey({name: "AES-GCM", length: 256}, true, ["encrypt"]);
    let arrayBuffer = await window.crypto.subtle.exportKey("raw", cryptoKey);
    return btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
}

var toast = function (target, text) {
    let el = document.querySelector(target);
    if (el == null) return;
    el.innerText = text;
    el.classList.remove('invisible');
    el.parentElement.classList.remove('d-none');
    setTimeout(() => {
        el.classList.add('invisible');
        el.parentElement.classList.add('d-none');
    }, 3000);
}

window.addEventListener('load', function() {
    document.querySelector('.generate-password').addEventListener('click', async (evt) => {
        var password = (await genKey()).substring(0, 30).replaceAll('+', '4').replaceAll('/','7');
        toast("#password-notification", "Mot de passe copié dans le presse-papier");
        navigator.clipboard.writeText(password);
    });
});