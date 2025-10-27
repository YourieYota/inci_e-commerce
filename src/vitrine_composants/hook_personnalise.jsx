
import React, { useState, createContext, useContext } from "react";

const CommandeContext = createContext();

export function useCommande() {
    const context = useContext(CommandeContext);
    if (context === undefined) {
        throw new Error('useCommande must be used within a CommandeProvider');
    }
    return context;
}

export function CommandeProvider({ children }) {
    const [commande_tab, setCommande_tab] = useState([
  {
    nomComp: "Kouame Marie Claire",
    email: "marieclairekouame@test.com",
    tel: "+225 05 67 12 45 80",
    entreprise: "Particulier",
    idCom: "CA20082501CV",
    typeProd: "carte de visite",
    catCom: "Commande spéciale",
    qte: "150",
    statut: "terminé",
    date: "20/08/2025",
    prix: "3000 FCFA",
    caract: "Carte de visite 200x400; couleur noir et or; texte: 'Votre beauté, notre passion'; papier mat épais; logo en haut à gauche."
  },
  {
    nomComp: "Diabaté Fatou",
    email: "fatoudiabate@test.com",
    tel: "+225 07 11 33 77 29",
    entreprise: "Particulier",
    idCom: "BA21082502BD",
    typeProd: "banderole",
    catCom: "Commande spéciale",
    qte: "100",
    statut: "en attente",
    date: "21/08/2025",
    prix: "5000 FCFA",
    caract: "Banderole A1; texte: 'Rentrée scolaire 2025'; couleurs: rouge et blanc; taille: 3x1m; finition: œillets métalliques."
  },
  {
    nomComp: "Kouassi Emile",
    email: "emilekouassi@test.com",
    tel: "+225 01 22 48 93 77",
    entreprise: "Agence Lumière",
    idCom: "BR22082503BR",
    typeProd: "brochure",
    catCom: "Commande ordinaire",
    qte: "150",
    statut: "terminé",
    date: "22/08/2025",
    prix: "3000 FCFA",
    caract: "Brochure A4 12 pages; thème: catalogue publicitaire; couleur bleu marine et blanc; reliure agrafée; papier glacé."
  },
  {
    nomComp: "Soro Yannick",
    email: "yannicksoro@test.com",
    tel: "+225 05 59 88 10 22",
    entreprise: "Société Nova",
    idCom: "AF23082504AF",
    typeProd: "affiche",
    catCom: "Commande ordinaire",
    qte: "120",
    statut: "en cours",
    date: "23/08/2025",
    prix: "5000 FCFA",
    caract: "Affiches A3; campagne marketing; couleurs: vert et jaune; finition plastifiée; papier satiné épais."
  },
  {
    nomComp: "N'dri Solange",
    email: "solangen'dri@test.com",
    tel: "+225 07 38 41 99 64",
    entreprise: "Particulier",
    idCom: "CP24082505CP",
    typeProd: "carte professionnelle",
    catCom: "Commande spéciale",
    qte: "200",
    statut: "terminé",
    date: "24/08/2025",
    prix: "5000 FCFA",
    caract: "Cartes PVC 200x400; couleur argentée et blanche; logo centré; texte: 'Conseillère en assurance'; finition brillante."
  },
  {
    nomComp: "Bonsu Daniel",
    email: "danielbonsu@test.com",
    tel: "+225 01 74 20 88 11",
    entreprise: "ImportExport CI",
    idCom: "FL25082506FL",
    typeProd: "flyer",
    catCom: "Commande ordinaire",
    qte: "1000",
    statut: "terminé",
    date: "25/08/2025",
    prix: "2000 FCFA",
    caract: "Flyer w:500; promotion commerciale; couleur dominante: bleu clair; format A5; impression recto-verso."
  },
  {
    nomComp: "Adjé Michel",
    email: "micheladje@test.com",
    tel: "+225 07 32 56 40 13",
    entreprise: "Boutique Yota",
    idCom: "BA26082507BD",
    typeProd: "banderole",
    catCom: "Commande spéciale",
    qte: "150",
    statut: "terminé",
    date: "26/08/2025",
    prix: "5000 FCFA",
    caract: "Banderole A1; thème: ouverture de boutique; couleurs: bleu et doré; texte: 'Bienvenue chez Yota'; taille: 4x2m."
  },
  {
    nomComp: "Traoré Abdoulaye",
    email: "abdoulayetraore@test.com",
    tel: "+225 01 22 87 14 60",
    entreprise: "AgriTech SA",
    idCom: "BR27082508BR",
    typeProd: "brochure",
    catCom: "Commande ordinaire",
    qte: "120",
    statut: "terminé",
    date: "27/08/2025",
    prix: "3000 FCFA",
    caract: "Brochure A4; catalogue produits agricoles; couleurs: vert et marron; papier glacé; logo sur la couverture."
  },
  {
    nomComp: "Yapi Emmanuel",
    email: "emmanuelyapi@test.com",
    tel: "+225 05 84 36 90 47",
    entreprise: "EcoServices",
    idCom: "AF28082509AF",
    typeProd: "affiche",
    catCom: "Commande spéciale",
    qte: "150",
    statut: "en attente",
    date: "28/08/2025",
    prix: "5000 FCFA",
    caract: "Affiche A3; thème: campagne écologique; couleurs: vert et blanc; papier recyclé; texte: 'Nettoyons la planète'."
  },
  {
    nomComp: "Zongo Rita",
    email: "ritazongo@test.com",
    tel: "+225 07 28 10 45 92",
    entreprise: "Particulier",
    idCom: "CV29082510CV",
    typeProd: "carte de visite",
    catCom: "Commande ordinaire",
    qte: "200",
    statut: "terminé",
    date: "29/08/2025",
    prix: "3000 FCFA",
    caract: "Carte de visite 200x400; couleur rose et blanche; texte: 'Esthéticienne à domicile'; finition texturée."
  },
  {
    nomComp: "Mensah Rebecca",
    email: "rebecca.mensah@test.com",
    tel: "+225 05 73 99 61 05",
    entreprise: "Particulier",
    idCom: "FL30082511FL",
    typeProd: "flyer",
    catCom: "Commande spéciale",
    qte: "1000",
    statut: "en cours",
    date: "30/08/2025",
    prix: "2000 FCFA",
    caract: "Flyer w:500; annonce d'événement culturel; couleur jaune et noir; design moderne; recto-verso."
  },
  {
    nomComp: "Traoré Issa",
    email: "issa.traore@test.com",
    tel: "+225 07 44 70 55 02",
    entreprise: "LogiPro",
    idCom: "AF31082512AF",
    typeProd: "affiche",
    catCom: "Commande ordinaire",
    qte: "100",
    statut: "terminé",
    date: "31/08/2025",
    prix: "5000 FCFA",
    caract: "Affiche A3; thème: sécurité routière; couleurs: rouge et noir; finition brillante; papier 300g."
  },
  {
    nomComp: "Akonor Samuel",
    email: "samuelakonor@test.com",
    tel: "+225 01 56 63 24 81",
    entreprise: "Particulier",
    idCom: "BR01092513BR",
    typeProd: "brochure",
    catCom: "Commande spéciale",
    qte: "130",
    statut: "terminé",
    date: "01/09/2025",
    prix: "3000 FCFA",
    caract: "Brochure A4; contenu: projet personnel; couleur bleue et grise; reliure agrafée; format vertical."
  },
  {
    nomComp: "Assane Diarra",
    email: "assanediarra@test.com",
    tel: "+225 07 21 48 11 30",
    entreprise: "BuildTech CI",
    idCom: "BA02092514BD",
    typeProd: "banderole",
    catCom: "Commande spéciale",
    qte: "100",
    statut: "en cours",
    date: "02/09/2025",
    prix: "5000 FCFA",
    caract: "Banderole A1; projet immobilier; couleur dominante: bleue; taille: 3x1m; texte: 'Votre maison, notre fierté'."
  },
  {
    nomComp: "Ouattara Salimata",
    email: "salimataouattara@test.com",
    tel: "+225 01 45 69 84 72",
    entreprise: "Particulier",
    idCom: "CP03092515CP",
    typeProd: "carte professionnelle",
    catCom: "Commande spéciale",
    qte: "200",
    statut: "terminé",
    date: "03/09/2025",
    prix: "5000 FCFA",
    caract: "Carte pro 200x400; couleur: blanc et vert; logo à gauche; texte: 'Consultante RH'; finition brillante."
  },
  {
    nomComp: "Bamba Karim",
    email: "karimbamba@test.com",
    tel: "+225 07 55 60 90 33",
    entreprise: "TransLogistics",
    idCom: "CV04092516CV",
    typeProd: "carte de visite",
    catCom: "Commande ordinaire",
    qte: "250",
    statut: "en attente",
    date: "04/09/2025",
    prix: "3000 FCFA",
    caract: "Carte de visite 200x400; design professionnel; couleurs: bleu et argent; logo de l’entreprise en bas à droite."
  },
  {
    nomComp: "Dago Chantal",
    email: "chantaldago@test.com",
    tel: "+225 05 39 88 22 61",
    entreprise: "Particulier",
    idCom: "FL05092517FL",
    typeProd: "flyer",
    catCom: "Commande spéciale",
    qte: "1200",
    statut: "terminé",
    date: "05/09/2025",
    prix: "2000 FCFA",
    caract: "Flyer w:500; thème: promotion beauté; couleur rose et doré; texte: 'Offres exceptionnelles de la semaine'."
  },
  {
    nomComp: "Sanogo Mohamed",
    email: "mohamedsanogo@test.com",
    tel: "+225 01 11 75 68 24",
    entreprise: "AutoShop CI",
    idCom: "BA06092518BD",
    typeProd: "banderole",
    catCom: "Commande spéciale",
    qte: "150",
    statut: "terminé",
    date: "06/09/2025",
    prix: "5000 FCFA",
    caract: "Banderole A1; publicité AutoShop; couleur: rouge et noir; taille: 5x2m; logo centré."
  },
  {
    nomComp: "Doh Florence",
    email: "florencedoh@test.com",
    tel: "+225 07 30 55 64 48",
    entreprise: "Particulier",
    idCom: "AF07092519AF",
    typeProd: "affiche",
    catCom: "Commande ordinaire",
    qte: "100",
    statut: "terminé",
    date: "07/09/2025",
    prix: "5000 FCFA",
    caract: "Affiche A3; message publicitaire; couleur: violet et blanc; finition mate."
  },
  {
    nomComp: "Toure Ibrahim",
    email: "ibrahimtoure@test.com",
    tel: "+225 01 66 43 72 10",
    entreprise: "TechNova",
    idCom: "BR08092520BR",
    typeProd: "brochure",
    catCom: "Commande spéciale",
    qte: "120",
    statut: "en cours",
    date: "08/09/2025",
    prix: "3000 FCFA",
    caract: "Brochure A4; contenu: produits technologiques; couleur: bleu nuit; papier glacé; reliure agrafée."
  },
  {
    nomComp: "Ngoran Esther",
    email: "estherngoran@test.com",
    tel: "+225 07 50 99 18 65",
    entreprise: "Particulier",
    idCom: "FL09092521FL",
    typeProd: "flyer",
    catCom: "Commande ordinaire",
    qte: "1000",
    statut: "terminé",
    date: "09/09/2025",
    prix: "2000 FCFA",
    caract: "Flyer w:500; événement culturel; couleur: bleu et doré; papier satiné."
  },
  {
    nomComp: "Yourie Yota",
    email: "yourie@test.com",
    tel: "+225 07 45 89 21 36",
    entreprise: "Particulier",
    idCom: "CP10092522CP",
    typeProd: "carte professionnelle",
    catCom: "Commande spéciale",
    qte: "150",
    statut: "en attente",
    date: "10/09/2025",
    prix: "5000 FCFA",
    caract: "Carte PVC 200x400; couleur: bleu nuit et or; logo centré; coins arrondis."
  },
  {
    nomComp: "Koumako Aimée",
    email: "aimeekoumako@test.com",
    tel: "+225 01 93 74 52 08",
    entreprise: "Particulier",
    idCom: "BA11092523BD",
    typeProd: "banderole",
    catCom: "Commande spéciale",
    qte: "120",
    statut: "terminé",
    date: "11/09/2025",
    prix: "5000 FCFA",
    caract: "Banderole A1; thème: vente spéciale; couleur: jaune et noir; finition mate."
  },
  {
    nomComp: "Traoré Issa",
    email: "issa.traore@test.com",
    tel: "+225 07 44 70 55 02",
    entreprise: "LogiPro",
    idCom: "BR12092524BR",
    typeProd: "brochure",
    catCom: "Commande ordinaire",
    qte: "150",
    statut: "terminé",
    date: "12/09/2025",
    prix: "3000 FCFA",
    caract: "Brochure A4; design professionnel; couleurs: gris et bleu; 16 pages; reliure spirale."
  },
  {
    nomComp: "Koffi Jean Paul",
    email: "jeanpaulkoffi@test.com",
    tel: "+225 05 64 18 70 09",
    entreprise: "Mairie Aboisso",
    idCom: "CV13092525CV",
    typeProd: "carte de visite",
    catCom: "Commande spéciale",
    qte: "200",
    statut: "en attente",
    date: "13/09/2025",
    prix: "3000 FCFA",
    caract: "Carte de visite 200x400; couleur: bleu et blanc; texte: 'Ravi de vous rencontrer'; papier brillant."
  }
]

);

    return (
        <CommandeContext.Provider value={[commande_tab, setCommande_tab]}>
            {children}
        </CommandeContext.Provider>
    );
}

export default function HookPersonnalise(){

}
