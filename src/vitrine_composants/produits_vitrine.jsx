import React, { useState, useRef  } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import '../CSS.css';
import carte_visite from "../img/produits/carte_de_visite.webp"
import banderole from "../img/produits/banderole.webp"
import brochure from "../img/produits/brochure.webp"
import affiche from "../img/produits/affiche.webp"
import carte_pro from "../img/produits/carte_pro.webp"
import flyer from "../img/produits/flyer.webp"
import { Tab_com } from "./acuueil_vitr";
import { Link } from "react-router-dom";

export function Produits_vitr({ active, setActive }){

  const tab_prod =[
    {
      src : carte_visite,
      nom : "carte de visite",
      prix : "3000 FCFA",
      description : "petite description du modèle cité"
    },

    {
      src : banderole,
      nom : "banderole",
      prix : "5000 FCFA",
      description : "petite description du modèle cité"
    },
    {
      src : brochure,
      nom : "brochure",
      prix : "3000 FCFA",
      description : "petite description du modèle cité"
    },
    {
      src : affiche,
      nom : "affiche",
      prix : "5000 FCFA",
      description : "petite description du modèle cité"
    },
    {
      src : carte_pro,
      nom : "carte pro",
      prix : "5000 FCFA",
      description : "petite description du modèle cité"
    },
    {
      src : flyer,
      nom : "flyer",
      prix : "2000 FCFA",
      description : "petite description du modèle cité"
    }
  ]
  const produitsRef = useRef(null)
  const [affichDiv, setAfficheDiv] = useState(false)
  const [prodNom, setProdNom] = useState(null)

  const handleCom = (e, produit)=>{
    e.preventDefault()
    setAfficheDiv((prev)=>!prev)
    setProdNom(produit || null)

}
const handleScrollTo = (e)=>{
  produitsRef.current?.scrollIntoView({ behavior: "smooth" })
}

const handleAddCom = (e)=>{
  e.preventDefault()
    const date = new Date()
    const dateFormat = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

    const dateFutur = new Date(date)
    dateFutur.setDate(date.getDate() + 7)
    const dateFuturFormat = `${dateFutur.getDate()}/${dateFutur.getMonth()}/${dateFutur.getFullYear()}`

    let statut = date < dateFutur ? "en cours" : "terminé"


    Tab_com.push(
      {TypeDeProduits : prodNom ,
        DateDebProd : dateFormat,
        DateFinProd : dateFuturFormat,
        Statut : statut
      }
    )

}
        return(
      <>
      <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>
      <div className="mx-auto">
        <section className="bg-gray-100 py-40 px-50">
            <div className="flex flex-col max-w-[685px] min-h-auto">
              <div className="container mb-5">
                <h1 className="text-7xl mb-10 font-bold">
              Maîtrisez votre production
              </h1>
              <p className="text-xl text-gray-500">
              Impression professionnelle de haute qualité pour tous vos besoins. Des cartes de visite aux grandes banderoles.
              </p>
              </div>
              <div className="container grid grid-cols-2 justify-between w-lg gap-10">
                  <button className="bg-blue-500 rounded-xl py-3 mt-2 text-white border-1 hover: cursor-pointer gap-2" onClick={handleScrollTo}>
                    Voir les produits
                  </button>
                  <Link to="/commandesPersonnalisee"><button className="bg-white rounded-xl py-3 mt-2 border-1 border-gray-300 text-black hover: cursor-pointer w-70 mr-5">
                    Commandes personnalisés
                  </button></Link>
              </div>
      </div>
        </section>

        <section ref={produitsRef} className="bg-white pt-25 px-50 ">
            <div>
              <h1 className="text-5xl mb-5 font-bold">
              Nos produits
              </h1>
              <p className="text-xl text-gray-500">
              Découvrez notre gamme complète de produits d'impression professionnelle
              </p>
            </div>
            {/*division pour les cadres*/}

            <div className="grid grid-cols-3 gap-5 align-middle justify-center pt-10 mb-5">
                {tab_prod.map((index, id)=>(
                  <div className="flex flex-col border-1 rounded-xl justify-center " key={id}>
                      <div className="flex justify-center p-2">
                          <img src={index.src} alt={`illustration de ${index.nom}`} className="rounded-xl w-[312] h-[439px] hover:scale-102" />
                      </div>
                      <div className="px-10">
                        <h1 className="text-2xl py-2">
                          {index.nom}
                        </h1>
                        <p className="text-xl pb-5">
                          {index.description}
                        </p>
                        <div className="flex flex-row pb-4 items-center justify-between">
                          <p className="text-xl font-bold">
                          {index.prix}
                        </p>
                        <button className="flex border-1 rounded-xl p-2 bg-black text-white hover:cursor-pointer hover:opacity-80" onClick={(e)=>handleCom(e, index.nom)}>
                          Ajouter au panier
                        </button>
                        </div>
                      </div>
                  </div>
                  
                )
                )
                }
                
                
            </div>
            <div className={`top-1/5 right-1/3 fixed w-110 h-120 border-1 border-gray-200 rounded-xl bg-gray-100 shadow-2xl
              ${affichDiv ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}>
                <span className="border-1 rounded-full absolute top-0 bg-red-600 border-black text-white pb-1 right-0 px-3 hover:cursor-pointer" onClick={handleCom}>x</span>
                <div className="text-center pt-6 px-2 font-bold text-xl pb-2">
                  Valider votre commande 
                </div>
                <div className="">
                  <form action="">
                      <div className="grid grid-cols-2 space-y-2 gap-4 p-4">
                        <div>
                        <label htmlFor="">
                          Nom
                        </label>
                        <input type="text" className="rounded-lg p-2 border-1" />
                        </div>

                        <div>
                          <label htmlFor="">
                          Produit
                        </label>
                        <input type="text" className="rounded-lg p-2 border-1 bg-gray-300" disabled placeholder={prodNom} value={prodNom || ""} />
                        </div>
                      </div>
                      <div className="flex flex-col px-2 space-y-1 pb-5">
                        <label htmlFor="">
                          Quantité
                        </label>
                        <input type="number" className="rounded-lg p-2 mx-1 border-1" placeholder="100"/>
                      </div>

                       <div className="flex flex-col px-2 space-y-1 pb-5">
                        <label htmlFor="">
                          Description
                        </label>
                        <textarea name="" id="" className="h-25 border-1 rounded-lg">
                        </textarea>
                      </div>

                      <div className="flex flex-row px-2 justify-between ">
                        <button className="bg-white hover:bg-red-600 rounded-lg p-2 px-8 border-1 border-gray-500" onClick={handleCom}>
                          Annuler
                        </button>

                        <button className="bg-green-600 rounded-lg p-2 px-8 border-1 border-gray-500 hover:bg-green-700" onClick={handleAddCom}>
                          Ajouter au panier
                        </button>

                      </div>
                  </form>
                </div>
              </div>
            
        </section>
      
      </div>
      
      </>)
    }
function Produit_vitrine(){
    const [active, setActive] = useState("PRODUITS");
    return(
        <Produits_vitr active={active} setActive={setActive}/>
    )
}
export default Produit_vitrine;
