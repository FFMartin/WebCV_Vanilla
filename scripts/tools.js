class Tool{
    constructor(code, name, icon,description){
        this.code = code;
        this.name = name;
        this.icon = icon;
        this.description = description;
    }
}

const tools =[
    new Tool("SQLSERVER", "SQL Server", "fa-solid fa-database",
            "<p>"
        +   "Microsoft SQL Server est un système de gestion de base de données (SGBD) en langage SQL. "
        +   "</p><p>"
        +   "SQL Server peut-être utilisé aussi bien pour réaliser des bases de données transactionnelles (OLTP) destinées à des outils de production "
        +   "que pour gérer des bases de données analytiques (OLAP) destinées à des reportings et tableaux de bord. "
        +   "</p><p>"
        +   "SQL Server utilise principalement le dialecte T-SQL qui permet la création de procédures stockées (stored procedures), "
        +   "de fonctions utilisateurs (UDF) et de déclencheurs (trigger). "
        +   "</p><p>"
        +   "SQL Server peut être utilisé sur site (On Premise) sur un serveur local ou depuis le cloud, notamment Azure qui propose "
        +   "des déploiements depuis des bases de données uniques jusqu'à des serveur virtuels complets."
        +   "</p><p>"
        +   "D'après Statista, il s'agit du 3ème SGBD le plus utilisé dans le monde, juste derrière Oracle et MySQL."
        +   "</p>"
    ),
        new Tool("OFFICE", "MS Office", "fa-brands fa-microsoft",
        "Blablablablabla"
    ),
    new Tool("SAS", "SAS / WPS", "fa-solid fa-magnifying-glass-chart",
        "Blablablablabla"
    ),
    new Tool("VISUALSTUDIO", "Visual Studio / VS Code", "fa-solid fa-code",
        "Blablablablabla"
    ),
    new Tool("AZURE", "MS Azure", "fa-solid fa-cloud",
        "Blablablablabla"
    ),
    new Tool("SHAREPOINT", "Sharepoint", "fa-solid fa-toilet-paper",
        "Blablablablabla"
    ),
    new Tool("POWERBI", "Power BI", "fa-solid fa-chart-column",
        "Blablablablabla"
    )
    ];

var element = document.getElementById("tools");
var parent = element.querySelector('ul')
for (let i = 0; i < tools.length; i++){
    var newTool = document.createElement('li');
    newTool.setAttribute('onClick','showToolModal("' + tools[i].code + '")')
    newTool.innerHTML = '<span class="' + tools[i].icon + ' fa-fw"></span>  ' + tools[i].name;
    parent.appendChild(newTool); 
}
function showToolModal(code){
    modal.style.display="block";
    var thisTool = tools.find(o => o.code == code);
    modalTitle.innerHTML=thisTool.name;
    modalContent.innerHTML=thisTool.description;
}