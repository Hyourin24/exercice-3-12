export class CompteBancaire {
    #solde = 0
    déposer = (montant) => {
        return this.#solde += montant
    }
    retirer = (montant) => {
        if (this.#solde > 0) {
            return this.#solde -= montant
        } else {
            console.log("Vous ne pouvez pas retirer autant d'argent. Sad.")
        }
    }
    afficherSolde = () => {
        console.log("Solde actuel: " + this.#solde + " euros")
    }
}