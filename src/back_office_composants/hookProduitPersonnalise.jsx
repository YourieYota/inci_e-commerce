
import React, { useState, createContext, useContext } from "react";
import carte_visite from "../img/produits/carte_de_visite.webp";
import banderole from "../img/produits/banderole.webp";
import brochure from "../img/produits/brochure.webp";
import affiche from "../img/produits/affiche.webp";
import carte_pro from "../img/produits/carte_pro.webp";
import flyer from "../img/produits/flyer.webp";

const ProduitContext = createContext();

export function useProduit() {
    const context = useContext(ProduitContext);
    if (context === undefined) {
        throw new Error('useProduit must be used within a ProduitProvider');
    }
    return context;
}

export function ProduitProvider({ children }) {
    const [prod_tab, setProd_tab] = useState(
        [
    {
      src : carte_visite,
      nom : "carte de visite",
      prix : "3000 FCFA",
      description : "petite description du modèle cité",
      pop :  "oui"
    },

    {
      src : banderole,
      nom : "banderole",
      prix : "5000 FCFA",
      description : "petite description du modèle cité",
      pop :  "oui"
    },
    {
      src : brochure,
      nom : "brochure",
      prix : "3000 FCFA",
      description : "petite description du modèle cité",
      pop :  "oui"
    },
    {
      src : affiche,
      nom : "affiche",
      prix : "5000 FCFA",
      description : "petite description du modèle cité",
      pop :  "Non"
    },
    {
      src : carte_pro,
      nom : "carte pro",
      prix : "5000 FCFA",
      description : "petite description du modèle cité",
      pop :  "Non"
    },
    {
      src : flyer,
      nom : "flyer",
      prix : "2000 FCFA",
      description : "petite description du modèle cité",
      pop :  "oui"
    }
  ]
    );

    return (
        <ProduitContext.Provider value={[prod_tab, setProd_tab]}>
            {children}
        </ProduitContext.Provider>
    );
}
