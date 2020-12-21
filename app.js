let Vehicule = function(couleur,roues,marque){
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;
}

Vehicule.prototype.demarer = function (){
    console.log("voiture démarée");
}

Vehicule.prototype.arreter = function (){
    console.log("voiture arreté");
}

let Velo = function(couleur,roues,marque,rayonRoues,typePeinture){
    Vehicule.call(this,couleur,roues,marque)
    this.rayon = rayonRoues;
    this.peinture = typePeinture;
}

Velo.prototype.monter = function (){
    console.log("je monte sur mon velo");
}

Velo.prototype = Object.create(Vehicule.prototype);

let Voiture = function (couleur,roues,marque,assurance,proprietaire){
    Vehicule.call(this,couleur,roues,marque);
    this.assurance = assurance;
    this.proprietaire = proprietaire;
    this.passerAuCarWas = function (){
        console.log("care Wash");
    }
}

Voiture.prototype = Object.create(Vehicule.prototype);

let maVoiture = new Voiture("rouge",4,"Citroen","oui","yann");
maVoiture.demarer()

let monVelo = new Velo("rouge",2,"Scott",32,"acrylique");
console.log("mon velo a " + monVelo.roues + " roues")