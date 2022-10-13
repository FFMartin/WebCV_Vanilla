class Job {
    constructor(code, title, company, period, comment){
        this.code = code;
        this.title = title;
        this.company = company;
        this.period = period;
        this.comment = comment;
    }
}

const jobs =[
    new Job("01", "Data Analyst",     "Sogarep", "2019-2022", "Pas de but avec des collègues peu motivés..."),
    new Job("02", "Chargé de projet", "Sogarep", "2016-2019", "Au début c'était sympa... Puis c'est parti en vrille."),
    new Job("03","Responsable Statistiques et Planification", "CCA International", "2015-2016", "Super boulot mais très mal payé.")
];

class Project {
    constructor(code, jobCode, label){
        this.code = code;
        this.jobCode = jobCode;
        this.label = label;
    }
}

const projects=[
    new Project("01","02","Statistiques de consommations médicales"),
    new Project("02","02","SAGA")
]

const sourceNode = document.getElementById("jobs").querySelector('.job');
for (let i = 0; i < jobs.length; i++){
    var clone = sourceNode.cloneNode(true);
    clone.querySelector('.job-period').innerHTML =  jobs[i].period;
    clone.querySelector('.job-company').innerHTML = jobs[i].company;
    clone.querySelector('.job-title').innerHTML =   jobs[i].title;    
    clone.querySelector('.job-body').innerHTML =    jobs[i].comment;  
    for (let r = 0; r < projects.length; r++){
        if(projects[r].jobCode == jobs[i].code){
           var tag = document.createElement("li");
           var text = document.createTextNode(projects[r].label);
           tag.appendChild(text);
           var element = clone.querySelector('.job-tasks-list');
           element.appendChild(tag);
        }
    }
    document.getElementById("jobs").appendChild(clone);
}
sourceNode.parentNode.removeChild(sourceNode);