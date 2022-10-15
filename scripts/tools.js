class Tool{
    constructor(code, name, icon){
        this.code = code;
        this.name = name;
        this.icon = icon;
    }
}

const tools =[
    new Tool("SQLSERVER", "SQL Server", "fa-solid fa-database"),
    new Tool("OFFICE", "MS Office", "fa-brands fa-microsoft"),
    new Tool("SAS", "SAS / WPS", "fa-solid fa-magnifying-glass-chart"),
    new Tool("VISUALSTUDIO", "Visual Studio / VS Code", "fa-solid fa-code"),
    new Tool("AZURE", "MS Azure", "fa-solid fa-cloud"),
    new Tool("SHAREPOINT", "Sharepoint", "fa-solid fa-toilet-paper"),
    new Tool("POWERBI", "Power BI", "fa-solid fa-chart-column")
    ];


var element = document.getElementById("tools");
var parent = element.querySelector('ul')
for (let i = 0; i < tools.length; i++){
    var newTool = document.createElement('li');
    newTool.setAttribute('onClick','showToolModal("' + tools[i].name + '")')
    newTool.innerHTML = '<span class="' + tools[i].icon + ' fa-fw"></span>  ' + tools[i].name;
    parent.appendChild(newTool); 
}

var modal = document.getElementById("modal");
var modalContent = modal.querySelector(".modal-content");
var modalTitle = modal.querySelector(".modal-title");
var span = document.getElementsByClassName("closeModal");
function showToolModal(name){
    modal.style.display="block";
    var newName = document.createElement('p');
    newName.innerHTML = name;
    modalContent.appendChild(newName);
}
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