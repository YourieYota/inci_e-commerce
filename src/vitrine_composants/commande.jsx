import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import img_banniere from '../img/banniere_compressee.webp';
import '../CSS.css';
import Carousel from '../carousel';


export function Filtrer(){
    const [filtre, setFiltre] = useState("Catégorie")
const [displayFiltre, setDisplayFiltre] = useState(false)
const handleFiltre = (e)=>{
    e.preventDefault()
    setDisplayFiltre((prev)=>!prev)
    setFiltre(e.target.textContent)

}



    const tab_filtre = ["Tout", "Catégorie", "Nom", "Type de commande", "Date"]
    return(
    
    <section className="">
                <div className="flex flex-col gap-5 ">
                <div className="justify-start flex pl-5 flex-row gap-2 space-x-4">
                    <span className="text-xl font-bold pt-1">Filtre</span>
                    <div className="flex align-center justify-start w-full space-x-3 ">
                        {tab_filtre.map((items, index)=>{
                            if(displayFiltre === false){
                                return(
                                    filtre === items ? <button onClick={handleFiltre} key={index} className="bg-white hover:bg-gray-200 cursor-pointer rounded-3xl border-3 px-3 py-1 text-xl">{items}</button> : ""
                                )}
                                else{
                                    return(
                                        <button onClick={handleFiltre} key={index} className="bg-white hover:bg-gray-200 cursor-pointer rounded-3xl border-3 px-3 py-1 text-xl">{items}</button>
                                    )
                                }
                        
                         })}
                    </div>
                </div>
                </div>
            </section>)
}

export function Commande({active, setActive}){


    const handleActive = (e, item)=>{
        console.log(item)
        e.preventDefault()
        setIsActive((prev)=>!prev)
        
    }
    

    const [isActive, setIsActive] = useState(false)
    const commande_tab =[
        {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            statut : "en attente",
            date : "20/08/2025",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
        {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "en cours"
        },
                {
            idCom : "CA08102501VI",
            typeProd :"carte de visite",
            catCom :"Commande spéciale",
            qte : "50",
            caract : "bordernom = koffi; \n prenom = jean-paul \n entreprise = mairie aboisso \n couleur = bleu et blanc \n autre texte = ravie de vous rencontrer \n autre spécificité = non",
            date : "20/08/2025",
            statut : "terminé"
        }


    ]
    return (
        <>
            <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>
            <section className="container pt-20">

            </section>
            <Filtrer/>

            <section className=" flex items-center mt-10 mx-auto">
                <div className="grid grid-cols-5 gap-5 mx-10 items-center">
                   {commande_tab.map((item, id)=>(

                        <div onClick={(e)=>handleActive(e, item)} key={id} className={`flex flex-col border rounded-xl p-5 shadow-xl hover:cursor-pointer hover:scale-105 ${item.statut === "terminé" ? "bg-green-300" : item.statut === "en cours" ? "bg-yellow-100" : "bg-red-300"} ${isActive ? "opacity-30 pointer-events-none" : "opacity-100"}` }>
                            <span className="flexw gap-2 mx-auto pb-5 underline">
                                <p>
                                    N° commande : {item.idCom}   
                                </p>
                            </span>
                            <span className="flex flex-row gap-2">
                                <p>
                                    Type de produit : 
                                </p>
                                <p>
                                    {item.typeProd}   
                                </p>
                            </span>
                            <span className="flex flex-row gap-2">
                                <p>
                                    Catégorie de commande : 
                                </p>
                                <p>
                                    {item.catCom}   
                                </p>
                            </span>
                            <span className="flex flex-row gap-2">
                                <p>
                                    Quantité : 
                                </p>
                                <p>
                                    {item.qte}   
                                </p>
                            </span>

                              <span className="flex flex-row gap-2">
                                <p>
                                    date : 
                                </p>
                                <p>
                                    {item.date}   
                                </p>
                            </span>
                            <span className="flex flex-row gap-2">
                                <p>
                                    statut : 
                                </p>
                                <p>
                                    {item.statut}   
                                </p>
                            </span>
                          
                            <span className="flex flex-col gap-2">
                                <p>
                                    Caractéristiques : 
                                </p>
                                <p>
                                    {item.caract}   
                                </p>
                            </span>
                        </div>
                   )
                   
                )}
                
                </div>           
                </section>
                <form action="">
                
                <div className={`flex-col gap-5 mt-10 fixed w-[41%] bg-white top-1/2 left-1/2 transform -translate-x-1/2 min-h-120 -translate-y-1/2 p-5 py-10 rounded-2xl shadow-2xl ${isActive ? "flex" : "hidden"}`}>
                <span className="mx-auto text-xl font-bold text-red-700 flex-col"> <p>Commande N°</p> <p className="text-black font-normal">Statut</p> </span>
                    <div className="grid grid-cols-2  space-y-5">

                        <div className="flex flex-col gap-3 justify-start items-start">
                            <label htmlFor="">
                                Type de produit :
                            </label>
                            <input type="text" className="border rounded-lg p-2 w-7/8" placeholder={"" || null} />
                        </div>

                        <div className="flex flex-col gap-3 justify-start items-start">
                            <label htmlFor="">
                                Catégorie commande :
                            </label>
                            <input type="text" className="border rounded-lg p-2 w-7/8" placeholder={"" || null} />
                        </div>

                        <div className="flex flex-col gap-2 justify-start items-start">
                            <label htmlFor="">
                                Quantité :
                            </label>
                            <input type="text" className="border rounded-lg p-2 w-7/8" placeholder={"" || null} />
                        </div>

                        <div className="flex flex-col gap-2 justify-start items-start">
                            <label htmlFor="">
                                Date :
                            </label>
                            <input type="text" className="border rounded-lg p-2 w-7/8" placeholder={"" || null} />
                        </div>

                        
                        <div className="flex flex-col col-span-2 gap-2 justify-start items-start">
                            <label htmlFor="">
                                Caractéristiques :
                            </label>
                            <textarea className="border rounded-lg p-2 w-full min-h-30" placeholder={"" || null} />
                        </div>
                        </div>

                        <div className="flex flex-row justify-between">
                            <button onClick={handleActive} className="border rounded-lg p-2 w-40 hover:bg-gray-100 cursor-pointer">
                                Annuler
                            </button>
                            <button className="border rounded-lg p-2 w-40 hover:bg-gray-100 cursor-pointer">
                                Modifier
                            </button>
                        </div>
                    
                </div>
                </form>

        </>
    )
}

function Commandes_user(){
    const [active, setActive] = useState("MES COMMANDES");
    return(
        <Commande active={active} setActive={setActive}/>
    )
}
export default Commandes_user;
