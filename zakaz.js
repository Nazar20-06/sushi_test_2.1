export let zakaz = [
    {
        name_poz: "Набір: палички та соус",
        prise_poz: 30,
        photo_poz: "foto/soeviu.png",
        number_poz: 1,
        value_poz: "soeviu" 
    },

    {
        name_poz: "Васабі та імбир",
        prise_poz: 40,
        photo_poz: "foto/vasabi.png",
        number_poz: 1,
        value_poz: "vasabi" 
    }
];

export function total(zakaz) {
    let result = 0;

    for (let i = 0; i < zakaz.length; i++) {
        result += zakaz[i].prise_poz * zakaz[i].number_poz;
    }

    return result;
}

export function count(zakaz){
    let result = 0

    for (let i = 0; i < zakaz.length; i++) {
        if (zakaz[i].value_poz === "vasabi" ||  zakaz[i].value_poz === "soeviu" ) {
            
        } else {
            result += zakaz[i].number_poz;
        }
    }

    return result;
}