const cards = document.querySelectorAll(".card");

window.onload = function(){
    cards.forEach((card) => {
        let seeMoreBtn = card.querySelector(".see-more-btn");
        let textContent = card.querySelector(".card-content .text");

        if(textContent.scrollHeight == textContent.clientHeight){
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content";
        }
        else{
            card.classList.add("gradient");
        }
    });
}

// Daha Çox ve Daha Az click etme funksiyası
cards.forEach((card) => {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text");

    seeMoreBtn.addEventListener("click", () => {
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if(card.classList.contains("active")){
            seeMoreBtn.innerHTML = "Daha az";
            textContent.style.height = textContent.scrollHeight + "px";
        }
        else{
            seeMoreBtn.innerHTML = "Daha çox";
            textContent.style.height = "100px";
        }
    });
});