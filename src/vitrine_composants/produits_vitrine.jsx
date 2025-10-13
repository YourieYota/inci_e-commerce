import React, { useState, useRef, useEffect  } from "react";
import { useCommande } from "./hook_personnalise";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import '../CSS.css';
import carte_visite from "../img/produits/carte_de_visite.webp"
import banderole from "../img/produits/banderole.webp"
import brochure from "../img/produits/brochure.webp"
import affiche from "../img/produits/affiche.webp"
import carte_pro from "../img/produits/carte_pro.webp"
import flyer from "../img/produits/flyer.webp"
import { Link } from "react-router-dom";
import { Filtrer } from "./commande";


export function Produits_vitr({ active, setActive }){
  const [commande_tab, setCommande_tab] = useCommande();
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
  const [prod, setProd] = useState({})

  const handleCom = (e, produit)=>{

    e.preventDefault()
    setAfficheDiv((prev)=>!prev)
    setProd(produit)
     setInfos({
    typeProd: produit.nom,
    catCom: "Ordinaire",
    qte: "1",
    caract: "",
    date: "",
    DateFinProd: "",
  })
}

const handleChange = (e)=>{
  e.preventDefault()
  const {name, value} = e.target
  setInfos((prev)=> ({...prev, [name] : value}))
}
const [infos, setInfos] = useState({idCom :"",
            typeProd: "",
            catCom: "",
            qte: "",
            caract: "",
            date: "",
            DateFinProd : "",
            statut: ""})

useEffect(()=>{
  console.log(infos)
},[infos])

const handleClose = (e)=>{
  e.preventDefault()
  setAfficheDiv((prev)=>!prev)
}
const handleScrollTo = (e)=>{
  produitsRef.current?.scrollIntoView({ behavior: "smooth" })
}

const handleAddCom = (e, produit)=>{
   e.preventDefault()
    const date  = new Date()
    const fulldate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    const dateFin = new Date(date)
    dateFin.setDate(date.getDate() + 7)
    const fulldatefin = `${dateFin.getFullYear()}-${dateFin.getMonth()+1}-${dateFin.getDate()}`
    let statut =  date <= dateFin ? "en cours" : "terminé"
    console.log(produit)
    const idCom = produit.nom.slice(0, 2).toUpperCase() + date.getDate() + (date.getMonth()+1).toString().padStart(2, "0") + date.getFullYear().toString().padStart(2, "0")
    console.log(idCom)  
  
  const newCom = {
    ...infos, 
    idCom,
    date : fulldate,
    datefin : fulldatefin,
    statut
  }


    alert("commande ajoutée avec succès")
    setCommande_tab(prev => [...prev, newCom]);

    setAfficheDiv((prev)=>!prev)
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
          <Filtrer/>
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
                        <button className="flex border-1 rounded-xl p-2 bg-black text-white hover:cursor-pointer hover:opacity-80" onClick={(e)=>handleCom(e, index)}>
                          Ajouter au panier
                        </button>
                        </div>
                      </div>
                  </div>
                  
                )
                )
                }
                
                
            </div>
            <div className={`top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 fixed w-2/4 h-screen md:h-3/5  border-1 border-gray-200 rounded-xl bg-gray-100 shadow-2xl
              ${affichDiv ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}>
                <span className="border-1 rounded-full absolute top-0 bg-red-600 border-black text-white pb-1 right-0 px-3 hover:cursor-pointer" onClick={handleClose}>x</span>
                <div className="text-center pt-6 px-2 font-bold text-xl pb-2">
                  Valider votre commande 
                </div>
                <div className="">
                  <form action="">
                      <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 gap-4 p-4">
                        <div className="flex-col flex">
                        <label htmlFor="catprod">
                          Catégorie de la commande
                        </label>
                        <input name="typeDeCommande" type="text" className="rounded-lg p-2 border-1 bg-gray-200 pointer-events-none:" value={"Ordinaire"} disabled/>
                        </div>

                        <div className="flex-col flex">
                          <label htmlFor="">
                          Type de Produit
                        </label>
                        <input type="text" name="catCom" className="rounded-lg p-2 border-1 bg-gray-300" disabled placeholder={prod.nom} value={prod.nom || ""} />
                        </div>
                      </div>

                      
                      <div className="flex flex-col px-2 space-y-1 pb-5">
                        <label htmlFor="qte">
                          Quantité
                        </label>
                        <input id="qte" name="qte" type="number" className="rounded-lg p-2 mx-1 border-1" placeholder="01" value={infos.qte} onChange={handleChange}/>
                      </div>

                       <div className="flex flex-col px-2 space-y-1 pb-5">
                        <label htmlFor="desc">
                          Description
                        </label>
                        <textarea id="desc" name="caract" className=" border-1 rounded-lg p-2" onChange={handleChange}/>
                        
                      </div>

                      <div className="flex flex-row px-2 justify-between ">
                        <button className="bg-white hover:bg-red-600 rounded-lg p-2 px-8 border-1 border-gray-500" onClick={handleClose}>
                          Annuler
                        </button>

                        <button className="bg-green-600 rounded-lg p-2 px-8 border-1 border-gray-500 hover:bg-green-700" onClick={(e)=>handleAddCom(e, prod)}>
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
