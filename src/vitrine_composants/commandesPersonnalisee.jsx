import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import '../CSS.css';
import { Tab_com } from '../vitrine_composants/acuueil_vitr';

  
const cat_prod = [
  {
    nom : "dépliants",
    valeur : "dépliants"
  },
  {
    nom : "cartes",
    valeur : "cartes"
  },
  {
    nom : "brochures",
    valeur : "brochures"
  },
  {
    nom : "affiche",
    valeur : "affiche"
  },
  {
    nom : "flyer",
    valeur : "flyer"
  },
  {
    nom : "banderoles",
    valeur : "banderoles"
  },
  {
    nom : "cartes pro",
    valeur : "cartes pro"
  }
]

 

export function Custom_prod({active, setActive}){

  const [typeprod, setTypeprod] = useState("")
const [date_now, setDate_now] = useState("")

const handleChangeTypeProd = (e) => {
  setTypeprod(e.target.value)

}

const handleSubmit = (e) => {
  e.preventDefault()
  const date  = new Date()
  const fulldate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  const dateFin = new Date(date)
  dateFin.setDate(date.getDate() + 7)
  const fulldatefin = `${dateFin.getFullYear()}-${dateFin.getMonth()+1}-${dateFin.getDate()}`
  let statut =  date <= dateFin ? "en cours" : "terminé"

  Tab_com.push({
    TypeDeProduits : typeprod,
    DateDebProd : fulldate,
    DateFinProd : fulldatefin,
    Statut : statut
  })
}
   const [file, setFile] = React.useState(null)
   const handleChange = (e) => {
    setFile(e.target.files[0]);
  }
    return (
        <>
    <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>

    <div className="relative mx-auto">
        <section className="bg-gray-200 py-20 pt-35 px-50">
            <div className="flex flex-col max-w-[685px] min-h-auto">
              <div className="container mb-5">
                <h1 className="text-7xl mb-10 font-bold">
              Créez Quelque Chose d'Unique
              </h1>
              <p className="text-xl text-gray-500">
              Notre équipe d'experts transforme vos idées en impressions exceptionnelles. Partagez votre vision et nous la concrétiserons.
              </p>
              </div>
              
      </div>
        </section>
        <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="h-[980px] border-1 p-6 rounded-2xl border-gray-300 shadow-lg col-span-2">
                <div className="grid grid-rows-[auto,auto] gap-1 items-start pb-6">
                    <div className="font-bold text-xl">
                      Formulaire de Commande Personnalisée
                    </div>
                    <div className="text-gray-500 text-xs">
                      Remplissez les détails de votre projet et nous vous contacterons sous 24h
                    </div>
                </div>
                <div className="px-6">
                  <form action="" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="grid grid-rows-2 space-y-2 h-20">
                        <label htmlFor="">
                        Nom Complet *
                      </label>  
                      <input type="text" className="border-1 rounded-lg px-4" placeholder="Koffi jean"/>
                      </div>
                      <div className="grid grid-rows-2 space-y-2 h-20">
                        <label htmlFor="">
                        Email *
                      </label>
                      <input type="text" className="border-1 rounded-lg px-4" placeholder="jean@email.com"/>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="grid grid-rows-2 space-y-2 h-20">
                        <label htmlFor="">
                        Téléphone *
                      </label>  
                      <input type="text" className="border-1 rounded-lg px-4" placeholder="0101010101"/>
                      </div>
                      <div className="grid grid-rows-2 space-y-2 h-20">
                        <label htmlFor="">
                        Entreprise *
                      </label>
                      <input type="text" className="border-1 rounded-lg px-4 " placeholder="sp bouaké"/>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="">
                        Type d'impression *
                      </label>  
                      <select name="" id="" className="border-1 w-80 h-10 rounded-lg" onChange={handleChangeTypeProd}>
                          {cat_prod.map((index, id)=>{
                          return <option value={index.valeur} key={id}>
                            {index.nom}
                        </option>
                      })}
                      </select>

                      </div>
                      <div className="flex flex-col space-y-2 py-2">
                        <label htmlFor="">
                        Quantité Estimée *
                      </label>
                      <input type="number" className="border-1 rounded-lg px-4 py-2" placeholder="100"/>
                      </div>

                      <div className="flex flex-col space-y-2 ">
                        <label htmlFor="">
                          Description du projet *
                        </label>
                      <textarea className="border-1 rounded-lg px-4 h-32 py-2" placeholder="décrivez votre projet en detail : Dimensions, Couleurs, Finitions souhaitées, délais..."/>
                      </div>
                     
                     <div className="flex flex-col space-y-2">
                        <label htmlFor="">
                        Fichier de Design (Optionnel) *
                      </label>
                      <div className="flex flex-col space-y-2">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-40 cursor-pointer hover:bg-gray-50"
      >
        <svg
          className="w-10 h-10 text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <span className="text-gray-600">
          Cliquez pour télécharger ou glissez-déposez
        </span>
        <span className="text-xs text-gray-500">
          PDF, AI, PSD, PNG, JPG (max. 50MB)
        </span>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </div>
    </div>
    <button className="border-1 bg-blue-500 p-2 rounded-xl text-white hover:bg-blue-700 hover:cursor-pointer" onClick={handleSubmit}>
      Envoyer la demande
    </button>
    </form>
  </div>
            </div>

              <div className="col-span-1 space-y-6 flex flex-col justify-start">
                  <div className=" rounded-2xl border-gray-300 shadow-lg border-1 h-[364px] py-6 px-4 space-y-4 flex flex-col">
                      <span className="text-md font-bold pb-2">Pourquoi Choisir le Sur-Mesure ?</span>

                      <div className="">
                      <span className="text-md font-bold">Qualité Premium</span>
                      <p className="text-gray-500 text-[14px] pt-2">Matériaux haut de gamme et finitions professionnelles</p>
                      </div>

                      <div className="">
                      <span className="text-md font-bold">Accompagnement Expert</span>
                      <p className="text-gray-500 text-[14px] pt-2">Notre équipe vous guide à chaque étape du projet</p>
                      </div>

                      <div className="">
                      <span className="text-md font-bold pb-">Flexibilité Totale</span>
                      <p className="text-gray-500 text-[14px] pt-2">Formats, quantités et délais adaptés à vos besoins</p>
                      </div>

                       <div className="">
                      <span className="text-md font-bold">Devis Gratuit</span>
                      <p className="text-gray-500 text-[14px] pt-2">Recevez une estimation détaillée sous 24h</p>
                      </div>
                      
                      
                  </div>
                  
                  <div className=" rounded-2xl border-gray-300 shadow-lg border-1 h-[211px] py-6 bg-gray-200 px-4 space-y-4 flex flex-col">
                        <span className="text-md font-bold pb-2">Besoin d'Aide ?</span>
                        <span className="text-xs pb-2">Notre équipe est disponible pour répondre à toutes vos questions</span>

                        <div>
                          <p>
                            exemple@eemple.ci
                          </p>
                          <p>
                             +225 01 02 03 04 05
                          </p>
                          <p>
                            Lun-Ven: 7h30-16h30
                          </p>
                        </div>

                  </div>
              </div>
                      
            </div>
        </section>
        </div>
      </>    
    )
}

function CommandesPersonnalisees(){
    const [active, setActive] = useState("COMMANDES PERSONNALISEES");
    return(
        <Custom_prod active={active} setActive={setActive}/>
    )
}

export default CommandesPersonnalisees;
