let subLists = document.getElementsByClassName("menu_sub");
subLists = Array.from(subLists);                            

let links = document.getElementsByClassName("menu__link");
links = Array.from(links);                                 

links.forEach(function (element) {       
    element.addEventListener("click", function(event){ 
        let dropDownList = element.parentElement.getElementsByTagName("ul").item(0);
        
        if(dropDownList.className.includes("menu menu_sub")){           
            event.preventDefault(); 
            
            if(dropDownList.className === "menu menu_sub menu_active"){  
                dropDownList.className = "menu menu_sub"
            }
            else {
                dropDownList.className = "menu menu_sub menu_active"
            }
            
            subLists.forEach((item) => {                            
                if(item !== dropDownList){                          
                    item.className = "menu menu_sub"
                }
            });
       }
    });        
}
);
