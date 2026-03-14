const menuBtn = document.getElementById("menu");
const sushiMenu = document.getElementById("sushi_menu");

const cityBtn = document.getElementById("city");
const cityMenu = document.getElementById("city_but");

const zamBtn = document.getElementById("zam");

zamBtn.addEventListener("click", function() {
    sushiMenu.classList.toggle("active");

    if (cityMenu.classList.contains("active")) {
        cityMenu.classList.remove("active");
    }
})

menuBtn.addEventListener("click", function() {
    sushiMenu.classList.toggle("active");

    if (cityMenu.classList.contains("active")) {
        cityMenu.classList.remove("active");
    }
});

cityBtn.addEventListener("click", function() {
    cityMenu.classList.toggle("active");

    if (sushiMenu.classList.contains("active")) {
        sushiMenu.classList.remove("active");
    }
});

const textCity = document.getElementById('text_city');

cityMenu.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("city_button")) {
        const selectedCity = event.target.value;
        textCity.textContent = selectedCity;

        cityMenu.classList.remove("active");
    }
})

