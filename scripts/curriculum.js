class Diploma{
    constructor(code, school, name, dates){
        this.code = code;
        this.school = school;
        this.name = name;
        this.dates = dates;
    }
}

const diplomas = [
    new Diploma("01","CNAM","Master 1 Analyse Financière","2012-2013"),
    new Diploma("02","Université de Poitiers","License d'Administration Publique","2003-2004"),
    new Diploma("03","Université de Poitiers","DUT Gestion des Entreprises et Administrations","2000-2002")
]

const diplomaSourceNode = document.getElementById("curriculum").querySelector('.diploma');
for (let i = 0; i < diplomas.length; i++){
    console.log(diplomas[i].diploma);
    var thisCurricula = diplomas[i];
    var clone = diplomaSourceNode.cloneNode(true);
    clone.querySelector('.dates').innerHTML = thisCurricula.dates;
    clone.querySelector('.name').innerHTML = thisCurricula.name;
    clone.querySelector('.school').innerHTML = thisCurricula.school; 
    document.getElementById("curriculum").querySelector('.block-content').appendChild(clone);
}
diplomaSourceNode.parentNode.removeChild(diplomaSourceNode);
