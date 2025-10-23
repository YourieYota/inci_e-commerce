import React, {useContext, createContext, useState, useEffect} from "react";

const compteContext = createContext()

export function useCompte(){
    const context = useContext(compteContext)
    if(context === undefined){
        throw new Error('useCompte must be used within a ProduitProvider');
    }
    return(context)
}

export function CompteProvider({children}){
    const [compte, setCompte] = useState([
    {
        id : 1,
        Nom : "koffi jean paul",
        Email : "jeanpaulkoffi@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Actif",
        inscription : "10/02/2025",
        Photo : "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id : 2,
        Nom : "kouame marie claire",
        Email : "marieclairekouame@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Actif",
        inscription : "22/01/2025",
        Photo : "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id : 3,
        Nom : "traoré abdoulaye",
        Email : "abdoulayetraore@test.com",
        Entreprise : "AgriTech SA",
        Role : "Client",
        Statut : "Actif",
        inscription : "05/03/2025",
        Photo : "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id : 4,
        Nom : "diabaté fatou",
        Email : "fatoudiabate@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Inactif",
        inscription : "18/04/2025",
        Photo : "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id : 5,
        Nom : "yapi emmanuel",
        Email : "emmanuelyapi@test.com",
        Entreprise : "EcoServices",
        Role : "Client",
        Statut : "Actif",
        inscription : "30/05/2025",
        Photo : "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        id : 6,
        Nom : "adjé michel",
        Email : "micheladje@test.com",
        Entreprise : "Boutique Yota",
        Role : "Client",
        Statut : "Actif",
        inscription : "12/06/2025",
        Photo : "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
        id : 7,
        Nom : "n'dri solange",
        Email : "solangen'dri@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Actif",
        inscription : "03/07/2025",
        Photo : "https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
        id : 8,
        Nom : "soro yannick",
        Email : "yannicksoro@test.com",
        Entreprise : "Société Nova",
        Role : "Client",
        Statut : "Inactif",
        inscription : "25/07/2025",
        Photo : "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
        id : 9,
        Nom : "koulibaly aminata",
        Email : "aminatakoulibaly@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Actif",
        inscription : "14/08/2025",
        Photo : "https://randomuser.me/api/portraits/women/9.jpg"
    },
    {
        id : 10,
        Nom : "traoré issa",
        Email : "issa.traore@test.com",
        Entreprise : "LogiPro",
        Role : "Client",
        Statut : "Actif",
        inscription : "01/09/2025",
        Photo : "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
        id : 11,
        Nom : "mensah rebecca",
        Email : "rebecca.mensah@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Inactif",
        inscription : "09/09/2025",
        Photo : "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
        id : 12,
        Nom : "kouassi emile",
        Email : "emilekouassi@test.com",
        Entreprise : "Agence Lumière",
        Role : "Client",
        Statut : "Actif",
        inscription : "21/09/2025",
        Photo : "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        id : 13,
        Nom : "akonor samuel",
        Email : "samuelakonor@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Actif",
        inscription : "04/10/2025",
        Photo : "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        id : 14,
        Nom : "zongo rita",
        Email : "ritazongo@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Actif",
        inscription : "10/10/2025",
        Photo : "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
        id : 15,
        Nom : "bonsu daniel",
        Email : "danielbonsu@test.com",
        Entreprise : "ImportExport CI",
        Role : "Client",
        Statut : "Actif",
        inscription : "16/10/2025",
        Photo : "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        id : 16,
        Nom : "koumako aimee",
        Email : "aimeekoumako@test.com",
        Entreprise : "Particulier",
        Role : "Client",
        Statut : "Inactif",
        inscription : "20/10/2025",
        Photo : "https://randomuser.me/api/portraits/women/16.jpg"
    }
]
)

    {return(<compteContext.Provider value={[compte, setCompte]}>
        {children}
    </compteContext.Provider>)
}
    }