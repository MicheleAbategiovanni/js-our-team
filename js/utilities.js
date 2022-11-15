function generateCard(row, listaUtenti) {

    for (let i = 0; i < utentiTeam.length; i++) {

        const colEl = document.createElement("div");
        const cardEl = document.createElement("div");
        const imgEl = document.createElement("img");
        const divEl = document.createElement("div");
        const utente = utentiTeam[i];

        colEl.classList.add("col");
        cardEl.classList.add("card");

        divEl.innerHTML = `${utente.nome} ${utente.cognome}`;

        row.append(colEl);
        colEl.append(cardEl);
        cardEl.append(divEl);

    }


}