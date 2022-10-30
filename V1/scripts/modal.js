var modal = document.getElementById("modal");
var modalContent = modal.querySelector(".modal-content");
var modalTitle = modal.querySelector(".modal-title");
var span = document.getElementsByClassName("modal-close");
function closeModal(){
    modal.style.display="none";
    modalContent.innerHTML='';
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
        modalContent.innerHTML='';
    }
}