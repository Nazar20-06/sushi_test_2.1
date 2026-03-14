

import { zakaz } from "./zakaz.js";

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

import { count } from "./zakaz.js";

const menuList = [
    shef,
    set,
    filadelfia,
    dracon,
    california,
    futomaki,
    maki,
    nagiri,
    sushi_bur,
    sushi_shaur,
    drinck,
    zapech
];

menu_div.addEventListener("click", function(event) {
    if (event.target.classList.contains("add_button")) {
        const id_poz = event.target.value;

        for (let i_old = 0; i_old < menuList.length; i_old++) {
            for (let i = 0; i < menuList[i_old].length; i++) {
                if (id_poz == menuList[i_old][i].value) {
                    
                    let check_poz = ""

                    for (let iii = 0; iii < zakaz.length; iii++) {
                        
                        if (zakaz[iii] != undefined) {
                            if (zakaz[iii].value_poz === menuList[i_old][i].value) {
                                zakaz[iii].number_poz++;

                                    if (zakaz[i].number_poz >10)
                                        zakaz[i].number_poz--;
                                check_poz = "check"

                            }
                        }  
                    } 
                    
                    if (check_poz != "check") {
                        const add_poz = {
                            name_poz: menuList[i_old][i].name,
                            prise_poz: menuList[i_old][i].prise,
                            photo_poz: menuList[i_old][i].photo,
                            number_poz: 1,
                            value_poz: menuList[i_old][i].value
                        };
                        zakaz.unshift(add_poz);
                    }

                    count_appd()

                    
                    
                }   
            }
        }
    }
});

function count_appd() {
    const count_el = document.getElementById("count");
    if (count_el) {
        count_el.textContent = count(zakaz);
    }
}