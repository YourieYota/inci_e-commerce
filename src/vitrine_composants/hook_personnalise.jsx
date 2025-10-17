
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
        /*{idCom :"",
            nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            typeProd: "",
            catCom: "",
            qte: "",
            caract: "",
            date: "",
            DateFinProd : "",
            
            image : ""},*/
        {
            nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102501VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102502VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102503VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            statut: "en attente",
            date: "20/08/2025",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non"
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102504VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102505VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102506VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102507VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102508VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102509VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
            nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102510VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102511VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "en cours",
            DateFinProd : "",
            image : ""
        },
        {
             nomComp :"",
            email : "",
            tel :"",
            entreprise :"",
            idCom: "CA08102512VI",
            typeProd: "carte de visite",
            catCom: "Commande spéciale",
            qte: "50",
            caract: "nom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date: "20/08/2025",
            statut: "terminé",
            DateFinProd : "",
            image : ""
        }
    ]);

    return (
        <CommandeContext.Provider value={[commande_tab, setCommande_tab]}>
            {children}
        </CommandeContext.Provider>
    );
}

export default function HookPersonnalise(){

}
