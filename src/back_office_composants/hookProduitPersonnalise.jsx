
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
      id : 1,
      src : carte_visite ,
      nom : "Carte de visite 200x400",
      prix : "3000 FCFA",
      description : "petite description du modèle cité",
      cat : "Carte de visite",
      qte_min : "100",
      dur_prod : "7",
      format : [{
        Nom : "A5",
        Largeur : "148",
        Hauteur : "210",
        unit : "mm"
      },{
        Nom : "A6",
        Largeur : "105",
        Hauteur : "148",
        unit : "mm"
      }
    
    ],
      pop :  "oui",
      finition : ["Mat", "Brillant"]
    },

    {
      id : 2,
      src : banderole,
      nom : "Banderole A1",
      prix : "5000 FCFA",
      description : "petite description du modèle cité",
      cat : "Banderole",
      qte_min : "100",
      dur_prod : "7",
      format : [{
        Nom : "A5",
        Largeur : "148",
        Hauteur : "210",
        unit : "mm"
      },{
        Nom : "A6",
        Largeur : "105",
        Hauteur : "148",
        unit : "mm"
      }
    
    ],
      pop :  "oui",
      finition : ["Mat", "Brillant", "Soft Touch", "Plastifié"]
    },
    {id : 3,
      src : brochure,
      nom : "Brochure A4",
      prix : "3000 FCFA",
      description : "petite description du modèle cité",
      cat : "Brochure",
      qte_min : "100",
      dur_prod : "7",
      format : [{
        Nom : "A5",
        Largeur : "148",
        Hauteur : "210",
        unit : "mm"
      },{
        Nom : "A6",
        Largeur : "105",
        Hauteur : "148",
        unit : "mm"
      }
    
    ],
      pop :  "oui",
      finition : ["Mat", "Brillant", "Soft Touch", "Plastifié"]
    },
    {id : 4,
      src : affiche,
      nom : "Affiche A3",
      prix : "5000 FCFA",
      description : "petite description du modèle cité",
      cat : "Affiche",
      qte_min : "100",
      dur_prod : "7",
      format : [{
        Nom : "A5",
        Largeur : "148",
        Hauteur : "210",
        unit : "mm"
      },{
        Nom : "A6",
        Largeur : "105",
        Hauteur : "148",
        unit : "mm"
      }
    
    ],
      pop :  "Non",
      finition : ["Mat", "Brillant", "Soft Touch", "Plastifié"]
    },
    {id : 5,
      src : carte_pro,
      nom : "Carte pro 200x400",
      prix : "5000 FCFA",
      description : "petite description du modèle cité",
      cat : "Carte professionnelle",
      qte_min : "100",
      dur_prod : "7",
      format : [{
        Nom : "A5",
        Largeur : "148",
        Hauteur : "210",
        unit : "mm"
      },{
        Nom : "A6",
        Largeur : "105",
        Hauteur : "148",
        unit : "mm"
      }
    
    ],
      pop :  "Non",
      finition : ["Mat", "Brillant", "Soft Touch", "Plastifié"]
    },
    {id : 6,
      src : flyer,
      nom : "Flyer w:500",
      prix : "2000 FCFA",
      description : "petite description du modèle cité",
      cat : "Flyer",
      qte_min : "100",
      dur_prod : "7",
      format : [{
        Nom : "A5",
        Largeur : "148",
        Hauteur : "210",
        unit : "mm"
      },{
        Nom : "A6",
        Largeur : "105",
        Hauteur : "148",
        unit : "mm"
      }
    
    ],
      pop :  "oui",
      finition : ["Mat", "Brillant", "Soft Touch", "Plastifié"]
    }
  ]
    );

    return (
        <ProduitContext.Provider value={[prod_tab, setProd_tab]}>
            {children}
        </ProduitContext.Provider>
    );
}
