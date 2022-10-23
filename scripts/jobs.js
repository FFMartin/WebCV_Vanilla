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

class Project {
    constructor(code, jobCode, label){
        this.code = code;
        this.jobCode = jobCode;
        this.label = label;
    }
}

const projects=[
    new Project("01","02","Statistiques de Consommations Médicales"),
    new Project("02","02","Tableaux de Bord des Services Digitaux"),
    new Project("03","02","SAGA"),
    new Project("04","02","Suivi des Services Digitaux"),
    new Project("05","01","Statistiques de Gestion"),
    new Project("06","01","Pilotage du Portefeuille"),
    new Project("07","01","Rationnalisation des Indicateurs"),
    new Project("08","01","Refonte des Reportings"),
    new Project("09","01","Synthèses Quotidiennes"),
    new Project("10","01","Tableaux de Bord de Production")
]

const sourceNode = document.getElementById("jobs").querySelector('.job');
for (let i = 0; i < jobs.length; i++){
    console.log(jobs[i].title);
    var clone = sourceNode.cloneNode(true);
    clone.querySelector('.job-dates').innerHTML =  jobs[i].dates;
    clone.querySelector('.job-duration').innerHTML =  jobs[i].duration;
    clone.querySelector('.job-company').innerHTML = jobs[i].company;
    clone.querySelector('.job-title').innerHTML =   jobs[i].title; 
    document.getElementById("jobs").querySelector('.block-content').appendChild(clone);
    const sourceRow = clone.querySelector('.job-task');  
    const parentTable = clone.querySelector(".job-tasks");
    for (let r = 0; r < projects.length; r++){
        if(projects[r].jobCode == jobs[i].code){
        var cloneRow = sourceRow.cloneNode(true);
         cloneRow.querySelector('.job-task-label-text').innerHTML =  projects[r].label;
        parentTable.appendChild(cloneRow);
        }
    }
    sourceRow.parentNode.removeChild(sourceRow);
}
sourceNode.parentNode.removeChild(sourceNode);