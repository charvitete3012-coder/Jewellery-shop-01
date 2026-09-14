// WISHLIST

// Get saved wishlist
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// PRODUCT HEART BUTTONS

let heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(function(button) {

    let productName = button.getAttribute("data-name");

    // Check if product is already liked
    let alreadyLiked = wishlist.some(function(item) {
        return item.name === productName;
    });

    if (alreadyLiked) {
        let heart = button.querySelector("i");

        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");

        heart.style.color = "red";
    }


    // When heart is clicked
    button.addEventListener("click", function() {

        let heart = button.querySelector("i");

        let name = button.getAttribute("data-name");
        let price = button.getAttribute("data-price");
        let image = button.getAttribute("data-image");


        // Check if already in wishlist
        let existingItem = wishlist.find(function(item) {
            return item.name === name;
        });


        if (existingItem) {

            // REMOVE FROM WISHLIST

            wishlist = wishlist.filter(function(item) {
                return item.name !== name;
            });

            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");

            heart.style.color = "black";

        } 
        
        else {

            // ADD TO WISHLIST

            wishlist.push({
                name: name,
                price: price,
                image: image
            });

            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");

            heart.style.color = "red";

        }

        // Save wishlist
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

    });

});