const zapechBtn = document.getElementById("zapech");
const setuBtn = document.getElementById("setu");
const shefBtn = document.getElementById("shef");
const filadelfiaBtn = document.getElementById("filadelfia");
const drackonBtn = document.getElementById("drackon");
const californyaBtn = document.getElementById("californya");
const futomakiBtn = document.getElementById("futomaki");
const makiBtn = document.getElementById("maki");
const nayriBtn = document.getElementById("nayri");
const sushiBurBtn = document.getElementById("sushi_bur");
const sushiShaurBtn = document.getElementById("sushi_shaur");
const drinckBtn = document.getElementById("drinck");

const sushiMenu = document.getElementById("sushi_menu");

const menu_div = document.getElementById("menu_div");

import { shef } from "./menu.js";
import { set } from "./menu.js";
import {filadelfia} from "./menu.js";
import {dracon} from "./menu.js";
import {california} from "./menu.js";
import {futomaki} from "./menu.js";
import {maki} from "./menu.js";
import {nagiri} from "./menu.js";
import {sushi_bur} from "./menu.js";
import {sushi_shaur} from "./menu.js";
import {drinck} from "./menu.js";
import {zapech} from "./menu.js";


const main_text = document.getElementById("main_text")

setuBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(set);

    sushiMenu.classList.remove("active");

});

shefBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(shef);

    sushiMenu.classList.remove("active");

});

filadelfiaBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(filadelfia);

    sushiMenu.classList.remove("active");

});

drackonBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(dracon);

    sushiMenu.classList.remove("active");

});

californyaBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(california);

    sushiMenu.classList.remove("active");

});

futomakiBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(futomaki);

    sushiMenu.classList.remove("active");

});

makiBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(maki);

    sushiMenu.classList.remove("active");

});

nayriBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(nagiri);

    sushiMenu.classList.remove("active");

});

sushiBurBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(sushi_bur);

    sushiMenu.classList.remove("active");

});

sushiShaurBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(sushi_shaur);

    sushiMenu.classList.remove("active");

});

zapechBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor(zapech);

    sushiMenu.classList.remove("active");

});

drinckBtn.addEventListener("click", function() {
    main_text.classList.add("active");

    menu_div.innerHTML = "";
    construcktor_drinck(drinck);

    sushiMenu.classList.remove("active");

});

function construcktor(list) {
    
    menu_div.classList.add("active");
        
    for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.id = "card_a";

    const text_el = document.createElement("div");
    text_el.id = "card_text_a";

    const img = document.createElement("img");
    img.src = list[i].photo;
    img.id = "photo_sushi"

    const name = document.createElement("div");
    name.textContent = list[i].name;
    name.id = "name";

    const masa = document.createElement("div");
    masa.textContent = "Вага: " + list[i].masa + "г."
    masa.id = "masa"

    const prise = document.createElement("div");
    prise.id = "prise";
    prise.textContent = "Ціна: " + list[i].prise + "грн.";

    const text = document.createElement("div");
    text.id = "text";
    text.textContent = list[i].text;

    const button = document.createElement("button");
    button.classList.add("add_button");
    button.textContent = "Хочу";
    button.value = list[i].value;
    menu_div.append(button);

    text_el.append(name, masa, text, button, prise);
    card.append(img, text_el);
    menu_div.append(card);
    
    }
}

function construcktor_drinck(list) {
    
    menu_div.classList.add("active");
        
    for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.id = "card_a";

    const text_el = document.createElement("div");
    text_el.id = "card_text_a";

    const img = document.createElement("img");
    img.src = list[i].photo;
    img.id = "photo_sushi"

    const name = document.createElement("div");
    name.textContent = list[i].name;
    name.id = "name";

    const masa = document.createElement("div");
    masa.textContent = "Об'єм: " + list[i].masa + " л."
    masa.id = "masa"

    const prise = document.createElement("div");
    prise.id = "prise";
    prise.textContent = "Ціна: " + list[i].prise + "грн.";

    const button = document.createElement("button");
    button.classList.add("add_button");
    button.textContent = "Хочу";
    button.value = list[i].value;
    menu_div.append(button);

    const text = document.createElement("div");
    text.id = "text";
    text.textContent = list[i].text;

    text_el.append(name, masa, text, button, prise);
    card.append(img, text_el);
    menu_div.append(card);
    
    }
}