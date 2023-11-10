const filterButtons = document.querySelectorAll(".allcategory button");
const filterableCards = document.querySelectorAll(".product_list .productcards");


const filterCards = e => {
    document.querySelector(".Activebtn").classList.remove("Activebtn")
    e.target.classList.add("Activebtn");

    filterableCards.forEach(productcards => {
        productcards.classList.add("hide");
        if (productcards.dataset.name === e.target.dataset.name || e.target.dataset.name === "All") {
            productcards.classList.remove("hide");
        }
    });
};


filterButtons.forEach(button => button.addEventListener("click", filterCards));