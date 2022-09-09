let button = document.querySelector(".dash"),
    links= document.querySelector("nav ul");

    button.addEventListener("click",()=>{
        links.classList.toggle("show");
        button.children[0].classList.toggle("toggle1");
        button.children[1].classList.toggle("toggle2");
        button.children[2].classList.toggle("toggle3");
    })

    