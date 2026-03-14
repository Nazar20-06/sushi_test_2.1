
const basket = document.getElementById("basket");

const sushiMenu = document.getElementById("sushi_menu");

const menu_div = document.getElementById("menu_div");

import { zakaz } from "./zakaz.js";

import { total } from "./zakaz.js";


basket.addEventListener("click", function() {
    main_text.classList.add("active");
    
    menu_div.innerHTML = "";
    
    menu_div.classList.add("active");


        
    for (let i = 0; i < zakaz.length; i++) {
        const card = document.createElement("div");
        card.id = "card_a_b";


        const text_el = document.createElement("div");
        text_el.id = "card_text_a_b";

        const img = document.createElement("img");
        img.src = zakaz[i].photo_poz;
        img.id = "photo_sushi_b";

        const name = document.createElement("div");
        name.textContent = zakaz[i].name_poz;
        name.id = "name_b";

        const prise = document.createElement("div");
        prise.id = "prise_b";
        prise.textContent = "Ціна: " + zakaz[i].prise_poz + "грн.";

        const number_div = document.createElement("div");
        number_div.id = "number_div";

        const button_plas = document.createElement("button");
        const button_mins = document.createElement("button");

        button_plas.classList.add("button_plus");
        button_mins.classList.add("button_minus");

        button_plas.id = "plas";
        button_mins.id = "mins";

        button_plas.value = zakaz[i].value_poz;
        button_mins.value = zakaz[i].value_poz;

        button_plas.textContent = "+";
        button_mins.textContent = "-";

        const number = document.createElement("div")
        number.id = "number";
        number.textContent = zakaz[i].number_poz


        number_div.append(button_mins, number, button_plas)


        const delat = document.createElement("button");
        delat.classList.add("delat");
        delat.value = zakaz[i].value_poz;
        delat.textContent = "Видалити";



        text_el.append(name, prise, number_div, delat);
        card.append(img, text_el);
        menu_div.append(card);
    }

        const card_b = document.createElement("div");
        card_b.id = "card_a_z";

        const prise_b = document.createElement("div");
        prise_b.textContent = "Всього: " + total(zakaz) + " грн.";
        prise_b.id = "prise_tot";

        const button = document.createElement("button");
        button.id = "zak_button";
        button.textContent = "Підтвердити";

        card_b.append(prise_b, button);
        menu_div.append(card_b);

});

const zakButton = document.getElementById("zak_button");

menu_div.addEventListener("click", function(e) {
    if (e.target && e.target.id === "zak_button") {
        location.reload();
    }
});
