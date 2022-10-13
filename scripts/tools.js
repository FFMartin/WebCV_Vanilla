const tools =[
    "SQL server",
     "MS Office",
     "SAS / WPS",
     "Visual Studio / VS Code",
     "MS Azure",
     "Sharepoint",
     "Power BI / Power Query"
    ];
for (let i = 0; i < tools.length; i++){
    var newTool = document.createElement('li');
    var text = document.createTextNode(tools[i]);
    newTool.appendChild(text);
    var element = document.getElementById("outils");
    element.appendChild(newTool); 
}
