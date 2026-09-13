let heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let heart = button.querySelector("i");

        if (heart.classList.contains("fa-regular")) {

            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");

            heart.style.color = "red";

        } else {

            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");

            heart.style.color = "black";
        }

    });

});