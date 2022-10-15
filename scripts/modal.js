var modal = document.getElementById("modal");
var span = document.getElementsByClassName("closeModal");

function showModal(){
    modal.style.display="block";
}
function closeModal(){
    modal.style.display="none";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}