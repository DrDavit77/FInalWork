let scrollContainer = document.querySelector(".productscards");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 900;
});
