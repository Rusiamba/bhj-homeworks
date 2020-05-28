let Tooltips = Array.from(document.getElementsByClassName("has-tooltip"));

Tooltips.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        let pst = item.getBoundingClientRect();
        let hint = `<div class='tooltip' style='left: ${pst.x}px; top: ${pst.y + 17}px; display: block;'>
        ${item.title}
      </div>`;

        item.insertAdjacentHTML("afterEnd", hint);
        let tool = Array.from(document.getElementsByClassName("tooltip"))
                
        tool.forEach(tip => {
            if(item.title !== tip.innerText){
                tip.remove()
            }
        });    
    });
});
