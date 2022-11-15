const utentiTeam = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },
];

const rowEl = document.querySelector(".row");



for (let i = 0; i < utentiTeam.length; i++) {

    const utente = utentiTeam[i];

    console.log("Utente: " + utente.nome + " " + utente.cognome);
    console.log("Ruolo: " + utente.ruolo);
    console.log("IMG: " + utente.img);
    console.log("\n\n");

}