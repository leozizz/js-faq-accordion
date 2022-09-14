const questionAndReplyItems = document.querySelectorAll(".item")

//execute the function for each item, removing and adding ".active" class to the right items
questionAndReplyItems.forEach(function(item){
    item.addEventListener("click", function() {

        const actualActiveItem = document.querySelector(".active")

        //check if there is any item with ".active" class, then remove it
        if (actualActiveItem) {
            actualActiveItem.classList.remove("active")
        }

        item.classList.add("active")
    })
})