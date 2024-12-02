import { CompteBancaire } from "./class/compte.js";

let personne = new CompteBancaire();

personne.déposer(100);
console.log(personne)

personne.retirer(30);
console.log(personne)

personne.afficherSolde();
console.log(personne)
