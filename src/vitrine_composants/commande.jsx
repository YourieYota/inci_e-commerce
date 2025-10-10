import React, { useEffect, useState } from "react";
import { useCommande } from "./hook_personnalise";
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
                                    filtre === items ? <button onClick={handleFiltre} key={index} className="bg-white hover:bg-gray-200 cursor-pointer rounded-3xl border-2 px-3 py-1 text-xl">{items}</button> : ""
                                )}
                                else{
                                    return(
                                        <button onClick={handleFiltre} key={index} className="bg-white hover:bg-gray-200 cursor-pointer rounded-3xl border-2 px-3 py-1 text-xl">{items}</button>
                                    )
                                }
                        
                         })}
                    </div>
                </div>
                </div>
            </section>)
}

export function Commande({active, setActive}){

const [infos, setInfos] = useState({})
    const handleActive = (e, item)=>{
        setInfos(item)
        e.preventDefault()
        setIsActive((prev)=>!prev)
    }

    useEffect(()=>{
        console.log(infos)
    }, [infos])
    

    const [isActive, setIsActive] = useState(false)
    const [commande_tab, setCommande_tab] = useCommande();

const handleChange = (e) => {
  const {name, value} = e.target
    setInfos({...infos, [name] : value})
  
}

const handleModif = (e, id) => {
  e.preventDefault()
  setCommande_tab((prev)=> prev.map((item)=>
    item.idCom === id ? {...infos} : item
  ))
  alert("commande modifiée avec succès")
  setIsActive(false)
  }


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
                {infos?.idCom && (
                        <span className="mx-auto text-xl font-bold text-red-700 flex-col">
                            <p>Commande N° {infos.idCom}</p>
                            <p className="text-black font-normal text-center">{infos.statut}</p>
                        </span>
                        )}
                    <div className={`grid grid-cols-2  space-y-5`}>

                   
                        <div className="flex flex-col gap-3 justify-start items-start">
                            <label htmlFor="">
                                Type de produit : 
                            </label>
                            <input name="typeProd" disabled={infos?.statut === "en attente" ? false : true} type="text" className="border rounded-lg p-2 w-7/8" placeholder={"" || null} value={infos?.typeProd || ""} onChange={handleChange}/>
                        </div>

                         <div className="flex flex-col gap-3 justify-start items-start">
                            <label htmlFor="">
                                Catégorie commande :
                            </label>
                            <input name="catCom" type="text" disabled={infos?.statut === "en attente" ? false : true} className="border rounded-lg p-2 w-7/8" placeholder={"" || null}  value={infos?.catCom || ""} onChange={handleChange}/>
                        </div>

                       <div className="flex flex-col gap-2 justify-start items-start">
                            <label htmlFor="">
                                Quantité :
                            </label>
                            <input name="qte" type="text" disabled={infos?.statut === "en attente" ? false : true} className="border rounded-lg p-2 w-7/8" placeholder={"" || null} value={infos?.qte || ""} onChange={handleChange}/>
                        </div>

                       <div className="flex flex-col gap-2 justify-start items-start">
                            <label htmlFor="">
                                Date :
                            </label>
                            <input name="date" type="text" disabled className="border rounded-lg p-2 w-7/8 bg-gray-200" placeholder={"" || null} value={infos?.date || ""} onChange={handleChange}/>
                        </div>

                        
                       <div className="flex flex-col col-span-2 gap-2 justify-start items-start">
                            <label htmlFor="">
                                Caractéristiques :
                            </label>
                            <textarea name="caract" disabled={infos?.statut === "en attente" ? false : true} className="border rounded-lg p-2 w-full min-h-30" placeholder={"" || null} value={infos?.caract || ""} onChange={handleChange}/>
                        </div>
                        </div>

                        {infos?.statut !=="en attente" && 
                            <p className="text-red-600 "> Vous ne pouvez plus apporter de modification</p>
                        }
                        <div className="flex flex-row justify-between" >
                            <button onClick={handleActive} className="border rounded-lg p-2 w-40 hover:bg-gray-100 cursor-pointer">
                                Annuler
                            </button>
                            <button className="border rounded-lg p-2 w-40 hover:bg-gray-100 cursor-pointer disabled:bg-gray-300" disabled={infos?.statut !=="en attente" ? true : false} onClick={(e)=>handleModif(e, infos.idCom)}>
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
