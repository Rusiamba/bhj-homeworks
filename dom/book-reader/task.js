let ShriftBTN = Array.from(document.getElementsByClassName("font-size"));

ShriftBTN.forEach(element => {
    element.addEventListener("click", function (event) {
        event.preventDefault();
        
        element.classList.add("font-size_active");
        ShriftBTN.forEach(item => {
            if(item.classList.contains("font-size_active") && item !== element){
                item.classList.toggle("font-size_active")
                
            }
        })
        
        if(element.classList.contains("font-size_big")){
            document.getElementById("book").classList.add("book_fs-big")
        }

        else if(element.classList.contains("font-size_small")){
            document.getElementById("book").classList.add("book_fs-small")
        }

        else {
            document.getElementById("book").className = "book"
        }
    });
});
