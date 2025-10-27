import React, {useContext, createContext, useState, useEffect} from "react";
import gojo from "./img/gojo.jpeg"
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
    id: 1,
    Nom: "Yourie Yota",
    Email: "yourie@test.com",
    Login: "yourie",
    Entreprise: "Particulier",
    Role: "Admin",
    Statut: "Actif",
    inscription: "20/10/2025",
    Photo: gojo,
    MotDePasse: "Yota@2025!"
  },
  {
    id: 2,
    Nom: "kouame marie claire",
    Email: "marieclairekouame@test.com",
    Login: "marieclaire",
    Entreprise: "Particulier",
    Role: "Client",
    Statut: "Actif",
    inscription: "22/01/2025",
    Photo: "https://randomuser.me/api/portraits/women/2.jpg",
    MotDePasse: "Marie2025#"
  },
  {
    id: 3,
    Nom: "diabaté fatou",
    Email: "fatoudiabate@test.com",
    Login: "fatoudiabate",
    Entreprise: "Particulier",
    Role: "Client",
    Statut: "Inactif",
    inscription: "18/04/2025",
    Photo: "https://randomuser.me/api/portraits/women/4.jpg",
    MotDePasse: "Fatou@123"
  },
  {
    id: 4,
    Nom: "kouassi emile",
    Email: "emilekouassi@test.com",
    Login: "emilekouassi",
    Entreprise: "Agence Lumière",
    Role: "Client",
    Statut: "Actif",
    inscription: "21/09/2025",
    Photo: "https://randomuser.me/api/portraits/men/12.jpg",
    MotDePasse: "Emile#456"
  },
  {
    id: 5,
    Nom: "soro yannick",
    Email: "yannicksoro@test.com",
    Login: "yannicksoro",
    Entreprise: "Société Nova",
    Role: "Client",
    Statut: "Inactif",
    inscription: "25/07/2025",
    Photo: "https://randomuser.me/api/portraits/men/8.jpg",
    MotDePasse: "Soro!2025"
  },
  {
    id: 6,
    Nom: "n'dri solange",
    Email: "solangen'dri@test.com",
    Login: "solange_ndri",
    Entreprise: "Particulier",
    Role: "Client",
    Statut: "Actif",
    inscription: "03/07/2025",
    Photo: "https://randomuser.me/api/portraits/women/7.jpg",
    MotDePasse: "Solange@07"
  },
  {
    id: 7,
    Nom: "bonsu daniel",
    Email: "danielbonsu@test.com",
    Login: "danielbonsu",
    Entreprise: "ImportExport CI",
    Role: "Client",
    Statut: "Actif",
    inscription: "16/10/2025",
    Photo: "https://randomuser.me/api/portraits/men/15.jpg",
    MotDePasse: "Bonsu#321"
  },
  {
    id: 8,
    Nom: "koulibaly aminata",
    Email: "aminatakoulibaly@test.com",
    Login: "aminatakoulibaly",
    Entreprise: "Particulier",
    Role: "Invité",
    Statut: "Actif",
    inscription: "14/08/2025",
    Photo: "https://randomuser.me/api/portraits/women/9.jpg",
    MotDePasse: "Amina*2025"
  },
  {
    id: 9,
    Nom: "adjé michel",
    Email: "micheladje@test.com",
    Login: "micheladje",
    Entreprise: "Boutique Yota",
    Role: "Client",
    Statut: "Actif",
    inscription: "12/06/2025",
    Photo: "https://randomuser.me/api/portraits/men/6.jpg",
    MotDePasse: "Adje@ci"
  },
  {
    id: 10,
    Nom: "koumako aimee",
    Email: "aimeekoumako@test.com",
    Login: "aimeekoumako",
    Entreprise: "Particulier",
    Role: "Client",
    Statut: "Inactif",
    inscription: "20/10/2025",
    Photo: "https://randomuser.me/api/portraits/women/16.jpg",
    MotDePasse: "Aimee123!"
  },
  {
    id: 11,
    Nom: "zongo rita",
    Email: "ritazongo@test.com",
    Login: "ritazongo",
    Entreprise: "Particulier",
    Role: "Client",
    Statut: "Actif",
    inscription: "10/10/2025",
    Photo: "https://randomuser.me/api/portraits/women/14.jpg",
    MotDePasse: "Rita@zongo"
  },
  {
    id: 12,
    Nom: "mensah rebecca",
    Email: "rebecca.mensah@test.com",
    Login: "rebeccamensah",
    Entreprise: "Particulier",
    Role: "Invité",
    Statut: "Inactif",
    inscription: "09/09/2025",
    Photo: "https://randomuser.me/api/portraits/women/11.jpg",
    MotDePasse: "Rebecca#CI"
  },
  {
    id: 13,
    Nom: "traoré abdoulaye",
    Email: "abdoulayetraore@test.com",
    Login: "abdoulayetraore",
    Entreprise: "AgriTech SA",
    Role: "Client",
    Statut: "Actif",
    inscription: "05/03/2025",
    Photo: "https://randomuser.me/api/portraits/men/3.jpg",
    MotDePasse: "Traore@03"
  },
  {
    id: 14,
    Nom: "yapi emmanuel",
    Email: "emmanuelyapi@test.com",
    Login: "emmanuelyapi",
    Entreprise: "EcoServices",
    Role: "Client",
    Statut: "Actif",
    inscription: "30/05/2025",
    Photo: "https://randomuser.me/api/portraits/men/5.jpg",
    MotDePasse: "YapiEco2025"
  },
  {
    id: 15,
    Nom: "traoré issa",
    Email: "issa.traore@test.com",
    Login: "issa.traore",
    Entreprise: "LogiPro",
    Role: "Invité",
    Statut: "Suspendu",
    inscription: "01/09/2025",
    Photo: "https://randomuser.me/api/portraits/men/10.jpg",
    MotDePasse: "Issa#999"
  },
  {
    id: 16,
    Nom: "akonor samuel",
    Email: "samuelakonor@test.com",
    Login: "samuelakonor",
    Entreprise: "Particulier",
    Role: "Client",
    Statut: "Actif",
    inscription: "04/10/2025",
    Photo: "https://randomuser.me/api/portraits/men/13.jpg",
    MotDePasse: "Akonor@sam"
  },
  {
    id: 17,
    Nom: "koffi jean paul",
    Email: "jeanpaulkoffi@test.com",
    Login: "jeanpaulkoffi",
    Entreprise: "Particulier",
    Role: "Client",
    Statut: "Suspendu",
    inscription: "10/02/2025",
    Photo: "https://randomuser.me/api/portraits/men/1.jpg",
    MotDePasse: "Koffi123!"
  },
  {
    id: 18,
    Nom: "assane diarra",
    Email: "assanediarra@test.com",
    Login: "assanediarra",
    Entreprise: "BuildTech CI",
    Role: "Client",
    Statut: "Actif",
    inscription: "19/10/2025",
    Photo: "https://randomuser.me/api/portraits/men/18.jpg",
    MotDePasse: "Assane@BT"
  },
  {
    id: 19,
    Nom: "ouattara salimata",
    Email: "salimataouattara@test.com",
    Login: "salimataouattara",
    Entreprise: "Particulier",
    Role: "Invité",
    Statut: "Actif",
    inscription: "21/09/2025",
    Photo: "https://randomuser.me/api/portraits/women/19.jpg",
    MotDePasse: "Salima@21"
  },
  {
    id: 20,
    Nom: "bamba karim",
    Email: "karimbamba@test.com",
    Login: "karimbamba",
    Entreprise: "TransLogistics",
    Role: "Client",
    Statut: "Suspendu",
    inscription: "12/08/2025",
    Photo: "https://randomuser.me/api/portraits/men/20.jpg",
    MotDePasse: "Bamba@TLCI"
  },
  {
    id: 21,
    Nom: "dago chantal",
    Email: "chantaldago@test.com",
    Login: "chantaldago",
    Entreprise: "Particulier",
    Role: "Invité",
    Statut: "Inactif",
    inscription: "05/10/2025",
    Photo: "https://randomuser.me/api/portraits/women/21.jpg",
    MotDePasse: "Chantal05!"
  },
  {
    id: 22,
    Nom: "sanogo mohamed",
    Email: "mohamedsanogo@test.com",
    Login: "mohamedsanogo",
    Entreprise: "AutoShop CI",
    Role: "Admin",
    Statut: "Actif",
    inscription: "11/06/2025",
    Photo: "https://randomuser.me/api/portraits/men/22.jpg",
    MotDePasse: "Sanogo@Admin"
  },
  {
    id: 23,
    Nom: "doh florence",
    Email: "florencedoh@test.com",
    Login: "florencedoh",
    Entreprise: "Particulier",
    Role: "Client",
    Statut: "Actif",
    inscription: "09/07/2025",
    Photo: "https://randomuser.me/api/portraits/women/23.jpg",
    MotDePasse: "Florence09!"
  },
  {
    id: 24,
    Nom: "toure ibrahim",
    Email: "ibrahimtoure@test.com",
    Login: "ibrahimtoure",
    Entreprise: "TechNova",
    Role: "Admin",
    Statut: "Suspendu",
    inscription: "10/03/2025",
    Photo: "https://randomuser.me/api/portraits/men/24.jpg",
    MotDePasse: "Ibrahim@2025"
  },
  {
    id: 25,
    Nom: "ngoran esther",
    Email: "estherngoran@test.com",
    Login: "estherngoran",
    Entreprise: "Particulier",
    Role: "Invité",
    Statut: "Actif",
    inscription: "17/10/2025",
    Photo: "https://randomuser.me/api/portraits/women/25.jpg",
    MotDePasse: "Esther@ok"
  }
]
)

    {return(<compteContext.Provider value={[compte, setCompte]}>
        {children}
    </compteContext.Provider>)
}
    }