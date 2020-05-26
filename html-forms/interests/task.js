const elemI = Array.from(document.getElementsByClassName("interest__check"));

elemI.forEach(element => {
    element.addEventListener('change', function(){       
        if( (element === elemI[0] && element.checked) || (element === elemI[3] && element.checked) ){
           for(item of element.closest(".interest").getElementsByClassName("interest__check")){
               item.checked = true
           } 
        }

        else if( (element === elemI[0] && element.checked === false) || (element === elemI[3] && element.checked === false) ){
            for(item of element.closest(".interest").getElementsByClassName("interest__check")){
                item.checked = false
            } 
         }
    });
});
