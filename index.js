import { CompteBancaire } from "./class/compte.js";

let personne = new CompteBancaire();

personne.déposer(100);
console.log(personne)

personne.retirer(30);
console.log(personne)

personne.afficherSolde();
console.log(personne)

//------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/todos", {
       method: 'GET',
})
.then((response) => response.json())
.then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos", {
     method: 'POST',
    body: JSON.stringify({
        title: '',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json));
    