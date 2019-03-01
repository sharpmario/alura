
let tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    let target = event.target;
    target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        target.parentNode.remove();    
    },500);
    
});
