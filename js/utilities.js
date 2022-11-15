function generateCard(row, listaUtenti, img) {

    for (let i = 0; i < utentiTeam.length; i++) {

        const colEl = document.createElement("div");
        const cardEl = document.createElement("div");
        const imgEl = document.createElement("img");
        const divNameEl = document.createElement("div");
        const divRolEl = document.createElement("div");

        const utente = utentiTeam[i];

        colEl.classList.add("col", "text-center");
        cardEl.classList.add("card");

        imgEl.src = img[i] ;

        divNameEl.innerHTML = `${utente.nome} ${utente.cognome}`;
        divNameEl.classList.add("fs-3");
        
        divRolEl.innerHTML = `${utente.ruolo}`;


        row.append(colEl);
        colEl.append(cardEl);
        cardEl.append(imgEl, divNameEl, divRolEl);
        

    }


}