class Job {
    constructor(code, title, company, dates, duration, comment){
        this.code = code;
        this.title = title;
        this.company = company;
        this.dates = dates;
        this.duration = duration;
        this.comment = comment;
    }
}

const jobs =[
    new Job("01", 
        "Data Analyst",     "Sogarep (Groupe AXA)", 
        "2019-2022", "3 ans",
        "Pas de but avec des collègues peu motivés..."
    ),
    new Job("02", 
        "Chargé de projet", "Sogarep (Groupe AXA)", 
        "2016-2019", "3 ans",
        "Au début c'était sympa... Puis c'est parti en vrille."
    ),
    new Job("03",
        "Responsable Statistiques et Planification", "CCA International", 
        "2015-2016", "1 an et demi", 
        "Super boulot mais très mal payé."
    ),
    new Job("04",
        "Statisticien", "CCA International", 
        "2013-2015", "1 an et demi", 
        "Super boulot mais très mal payé."
    )
];

class Task {
    constructor(code, jobCode, label, description, components){
        this.code = code;
        this.jobCode = jobCode;
        this.label = label;
        this.description = description;
        this.components = components;
    }
    get donutStyle() {
        var maxAngle = 0;
        for(let i =0; i<this.components.length; i++){
            maxAngle = maxAngle + this.components[i].part;    
        }
        console.log(maxAngle);
        var startAngle = 0;
        var endAngle = 0;
        var style = "background: conic-gradient( ";
        for(let i =0; i<this.components.length; i++){
            var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            endAngle = startAngle + Math.floor(this.components[i].part * 360 / maxAngle);  
            style = style + " " + randomColor + " " + startAngle + "deg " + endAngle + "deg, ";   
            startAngle = endAngle       
        } 
        style = style.substring(0,style.length-2);
        style = style + " )";
        return style;  
    }
   
}
class Component {
    constructor(label, part){
        this.label = label;
        this.part = part;
    }
}

const tasks=[
    new Task("01","02","Statistiques de Consommations Médicales","Blablabla",
        [new Component("Data",33),new Component("Design",25),new Component("Documentation",42)]
    ),
    new Task("02","02","Tableaux de Bord des Services Digitaux","Blablabla"),
    new Task("03","02","SAGA","Blablabla"),
    new Task("04","02","Suivi des Services Digitaux","Blablabla"),
    new Task("05","01","Statistiques de Gestion","Blablabla"),
    new Task("06","01","Pilotage du Portefeuille","Blablabla"),
    new Task("07","01","Rationnalisation des Indicateurs","Blablabla"),
    new Task("08","01","Refonte des Reportings","Blablabla"),
    new Task("09","01","Synthèses Quotidiennes","Blablabla"),
    new Task("10","01","Tableaux de Bord de Production","Blablabla"),
    new Task("11","03","Automatisation des Reportings et Tableaux de Bord","Blablabla"),
    new Task("12","03","Rationnalisation de la planification","Blablabla"),
    new Task("13","04","Gestion des Reportings","Blablabla")
]

const sourceNode = document.getElementById("jobs").querySelector('.job');
for (let i = 0; i < jobs.length; i++){
    var thisJob = jobs[i];
    var clone = sourceNode.cloneNode(true);
    clone.querySelector('.job-dates').innerHTML = thisJob.dates;
    clone.querySelector('.job-duration').innerHTML = thisJob.duration;
    clone.querySelector('.job-company').innerHTML = thisJob.company;
    clone.querySelector('.job-title').innerHTML = thisJob.title; 
    document.getElementById("jobs").querySelector('.block-content').appendChild(clone);
    const sourceRow = clone.querySelector('.task');  
    const parentTable = clone.querySelector(".job-taskslist");
    let jobTasks = tasks.filter(t => t.jobCode == thisJob.code)
    for (let r = 0; r < jobTasks.length; r++){
        var thisTask = jobTasks[r];
        var newTask = sourceRow.cloneNode(true);
        newTask.querySelector('.job-task-text').innerHTML =  thisTask.label;
        newTask.setAttribute('onClick','showTaskModal("' + thisTask.code + '")');
        parentTable.appendChild(newTask);
    }
    sourceRow.parentNode.removeChild(sourceRow);
}
sourceNode.parentNode.removeChild(sourceNode);

function showTaskModal(code){
    modal.style.display="block";
    var thisTask = tasks.find(o => o.code == code);
    modalTitle.innerHTML=thisTask.label;
    var donut = "<div class=\"donut\" style=\"" + thisTask.donutStyle +"\"><div class=\"donut-hole\"></div></div>";
    var legend = "<div>Légende</div>";
    var chart = "<div class=\"chart\">" + donut + legend + "</div>";
    var text = "<div>" + thisTask.description + "</div>";
    var content = "<div>" + chart + text + "</div>";
    modalContent.innerHTML = content;
}