import { zakaz } from "./zakaz.js";

import { total } from "./zakaz.js";

import { count } from "./zakaz.js";

menu_div.addEventListener("click", function(event) {
    

    if (event.target.classList.contains("button_plus")) {

        const id_poz = event.target.value;

        for (let i = 0; i < zakaz.length; i++) {
            if (zakaz[i].value_poz == id_poz) {

                zakaz[i].number_poz++;
                

                if (zakaz[i].number_poz >10)
                    zakaz[i].number_poz--;

                event.target.closest("#number_div").querySelector("#number").textContent = zakaz[i].number_poz

                count_appd()
                updateTotal();
            }
        }

    }

    if (event.target.classList.contains("button_minus")) {

        const id_poz = event.target.value;

        for (let i = zakaz.length - 1; i >= 0; i--) {
            if (zakaz[i].value_poz == id_poz) {
                zakaz[i].number_poz--;

                

                const numberDiv = event.target.closest("#number_div");
                numberDiv.querySelector("#number").textContent = zakaz[i].number_poz;

                if (zakaz[i].number_poz === 0) {
                    numberDiv.closest("#card_a_b").remove();
                    zakaz.splice(i, 1);
                }

                count_appd()
                updateTotal();
            }
        }
    }

});

menu_div.addEventListener("click", function(event) {
    if (event.target.classList.contains("delat")) {
        const id_poz = event.target.value;
        for (let i = zakaz.length - 1; i >= 0; i--) {
            if (zakaz[i].value_poz == id_poz) {
                zakaz.splice(i, 1);
                event.target.closest("#card_a_b").remove();

                count_appd()
                updateTotal()
                break;
                
            }
        }
    }
});

function updateTotal() {
    const prise_tot = document.getElementById("prise_tot");
    if (prise_tot) {
        prise_tot.textContent = "Всього: " + total(zakaz) + " грн.";
    }
}



function count_appd() {
    const count_el = document.getElementById("count");
    if (count_el) {
        count_el.textContent = count(zakaz);
    }
}