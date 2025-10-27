import React, {useEffect, useState} from "react";
import { Nav_bar, Nav_bar_with_searchbar } from "../../composants";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Switch } from 'antd'
import { useProduit } from "../hookProduitPersonnalise";

function Modif_prod(){

    const [prod_tab, setProd_tab] = useProduit()
    const naviguate = useNavigate()
    const del_format = (item, tab_format)=>{
       const newTab_format = tab_format.filter((_, index) => item !== index)
       /*const {format, ...rest} = produit;
       setProduit({...rest, format: newTab_format})*/
       setProduit((prev)=>  ({...prev, format : newTab_format}))
    }
    const [ajour, setAjour]=useState(false)
    const handleUpdate = (e)=>{
        e.preventDefault()
        setProduit((prev)=>({...prev, prix : (produit.prix + "FCFA")}))
        setProd_tab((prev)=>
            prev.map((item)=>
                item.id === produit.id ? produit : item
            )
        )
        setAjour(true)
    }
    
    const [error, setError] = useState(null)
    
    const [Nom_format, setNom_format] = useState("")
    const [Largeur_format, setLargeur_format] = useState("")
    const [Hauteur_format, setHauteur_format] = useState("")
    const [unit_format, setUnit_format] = useState("mm")

    const onChangeFormat = (e)=>{
        const [name, value] = [e.target.name, e.target.value]
        if(name === "nomForm"){
            setNom_format(value)
        }
        else if(name === "LargeurForm"){
            setLargeur_format(value)
        }
        else if(name === "HauteurForm"){
            setHauteur_format(value)
        }
        else if(name === "unitForm"){
            setUnit_format(value)
        }
    }
    const handleChecked =(finition) => {
            setCheck((prev)=> {
                const newFinitions = prev.includes(finition) ? prev.filter((item)=> item !== finition) : [...prev, finition]
            setProduit((p) => ({ ...p, finition: newFinitions }))
            return newFinitions
            }
        )}
    const addformat = ()=>{
        if(Nom_format && Largeur_format && Hauteur_format && unit_format){
            const new_format = {
            Nom : Nom_format,
            Largeur : Largeur_format,
            Hauteur : Hauteur_format,
            unit : unit_format
        }
        setProduit((prev)=>  ({...prev, format : [...prev.format, new_format]}))
        setNom_format("")
        setLargeur_format("")
        setHauteur_format("")
        setUnit_format("mm")
        setError(null)
        }else{
            setError("Veuillez remplir tous les champs")
        }
        
    }

    const [checked_switch, setChecked_switch] = useState(false);
    const onChange = (checked) => {
        setChecked_switch(checked)
        setProduit((prev)=> ({...prev, pop : checked }))
      };

    const tab_cat = ["Flyers", "Carte de visite", "Carte Professionnelle", "Banderolle", "Affiche", "Brochure"]
    const prod = useLocation().state || {}
    const [produit,setProduit] = useState(prod)
    const handleChange = (e)=>{
        const [name, value] = [e.target.name, e.target.value]
        if (e.target.type === "file"){
            const file = e.target.files[0]
            if (file) {
                setProduit({ ...produit, [name]: URL.createObjectURL(file), file })
            }
        }
        else {
        setProduit({...produit, [name]: value})}
    }
    const tab_format = produit.format
    const tab_finition = ["Mat", "Brillant", "Soft Touch", "Plastifié"]
    const [check, setCheck] = useState(produit.finition || [])

    useEffect(()=>{
    console.log(check)
},[check])

    useEffect(()=>{
    console.log(checked_switch,tab_finition)
},[checked_switch])
     return(
        <>
    <section className="pb-16">
       <Nav_bar_with_searchbar/>
    </section>
    <section className="bg-white">
    <section className="text-left pt-5 bg-white border-b-2 pb-5 border-gray-200">
        <div  className="flex flex-row items-center gap-8 container mx-auto">
        <div>
            <ArrowLeft className="hover:cursor-pointer" onClick={()=>naviguate("/back_office_composants/gestion_produits")} strokeWidth={2} absoluteStrokeWidth/>
        </div>
        <div className="space-y-1">
            <h1 className="text-3xl text-blue-800 font-bold">
                Modiffier le Produit
            </h1>
            <p className="text-xl text-gray-500">
                {prod.nom}
            </p>
        </div>
        </div>
    </section>

    <section className="container mx-auto mt-10">
        <div className="w-3/4 border border-gray-200 shadow-xs rounded-lg p-4 bg-white space-y-4 mx-auto">
            <div className="flex flex-col gap-2 mb-5">
                <h4 className="text-2xl font-medium">Informations générales</h4>
                <p className="text-xl text-gray-500">Détails de base du produit</p>
            </div>

            <div className="flex flex-col gap-2 font-medium">
                <label htmlFor="nom_prod">Nom du produit *</label>
                <input type="text" id="nom_prod" name="nom" className="border rounded-md p-2 border-gray-300" onChange={handleChange} value={produit.nom}/>
            </div>

            <div className="flex flex-col gap-2 font-medium">
                <label htmlFor="cat_prod">Catégorie *</label>
                <select name="cat" id="cat_prod" className="border border-gray-300 rounded-lg p-2 w-50" onChange={handleChange} value={produit.cat}>
                    {tab_cat.map((item, index)=>(
                        <option className="" key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-2 font-medium">
                <label htmlFor="desc">Description *</label>
                <textarea name="description" id="desc" className="border rounded-md p-2 border-gray-300" onChange={handleChange} value={produit.description} ></textarea>
            </div>

             <div className="flex flex-col gap-2 font-medium">
                <label htmlFor="url">URL de l'image *</label>
                <div className="grid grid-cols-8 gap-1">
                    <input type="text" id="url" name="src" className="border rounded-md p-2 border-gray-300 col-span-7" disabled onChange={handleChange} value={produit.src}/>

                    <input type="file" className="border rounded-lg p-2 border-gray-300" name="src" onChange={handleChange}/>
                </div>
            </div>

        </div>
    </section>

    <section className="container mx-auto mt-10">
        <div className="w-3/4 border border-gray-200 shadow-xs rounded-lg p-4 bg-white space-y-4 mx-auto">
            <div className="flex flex-col gap-2 mb-5">
                <h4 className="text-2xl font-medium">Tarification et logistique</h4>
                <p className="text-xl text-gray-500">Prix et détails de livraison</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2 font-medium">
                        <label htmlFor="prix">Prix de base (XOF) *</label>
                         <input type="text" id="prix" name="prix" className="border rounded-md p-2 border-gray-300" onChange={handleChange} value={produit.prix}/>
                    </div>
                    
                    <div>
                        <div className="flex flex-col gap-2 font-medium">
                        <label htmlFor="prix">Quantité minimum *</label>
                         <input type="number" id="qte" name="qte_min" className="border rounded-md p-2 border-gray-300" onChange={handleChange} value={produit.qte_min}/>
                        </div>
                    </div>
                    </div>
                     
                    <div className="flex flex-col gap-2 font-medium">
                        <label htmlFor="prix">Durée de production (jours) *</label>
                         <input type="text" id="duree" name="dur_prod" className="border rounded-md p-2 border-gray-300" onChange={handleChange} value={produit.dur_prod}/>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <Switch defaultChecked onChange={onChange} className="bg-blue-800"/>
                        <p>Produit populaire (mis en avant) </p>
                    </div>
                    
        </div>

        <section className="container mx-auto mt-10">
            <div className="w-3/4 border border-gray-200 shadow-xs rounded-lg p-4 bg-white space-y-4 mx-auto">
                <div className="flex flex-col gap-2 mb-5">
                <h4 className="text-2xl font-medium">Formats disponibles</h4>
                <p className="text-xl text-gray-500">Ajoutez les formats proposés pour ce produit</p>
                </div>

                <div className="flex flex-col gap-2">
                    {tab_format.map((item, index)=>(
                        <div key={index} className="flex rounded-lg gap-2 border m-1 px-2 py-4 border-gray-300 relative" >
                                <p>
                                    {item.Nom}
                                </p>
                                <p> 
                                    {item.Largeur ? item.Largeur + "x": ""} 
                                </p>
                                <p>
                                    {item.Hauteur}
                                </p>
                                <p>
                                    {item.unit}
                                </p>
                                <div className="absolute top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer" onClick={()=> del_format(index, tab_format)}>
                                x
                                </div>
                        </div>
                    ))}
                    <div className="flex flex-col border border-gray-300 rounded-lg p-2 gap-2 font-medium">
                        <p className="">
                            Ajouter un format
                        </p>
                        <div className="flex flex-row gap-2 font-medium">
                            <input type="text" name="nomForm" placeholder="Nom" className="border rounded-lg p-2 border-gray-300"  onChange={onChangeFormat} value={Nom_format}/>
                            <input type="text" name="LargeurForm" id="" placeholder="Largeur" className="border rounded-lg p-2 border-gray-300" onChange={onChangeFormat} value={Largeur_format}/>
                            <input type="text" name="HauteurForm" placeholder="Hauteur" className="border rounded-lg p-2 border-gray-300" onChange={onChangeFormat} value={Hauteur_format}/>
                            <select name="unitForm" id="" className="border rounded-lg p-2 border-gray-300"  onChange={onChangeFormat} value={unit_format}>
                                <option value="mm">
                                    mm
                                </option>
                                <option value="cm">
                                    cm
                                </option>
                            </select>
                            
                        </div>
                        <button className="mt-2 border border-gray-300 rounded-lg p-2 w-full font-medium hover:cursor-pointer">
                            <div className="flex justify-center gap-5 text-xl" onClick={()=>addformat()}>
                                <p>+</p>
                                <p>Ajouter ce format</p> 
                                
                            </div>
                        </button>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto mt-10">
            <div className="w-3/4 border border-gray-200 shadow-xs rounded-lg p-4 bg-white space-y-4 mx-auto">
            <div className="flex flex-col gap-2 mb-5">
                <h4 className="text-2xl font-medium">Finitions disponibles</h4>
                <p className="text-xl text-gray-500">Sélectionnez les finitions proposées</p>
            </div>
            <div className="flex flex-col font-medium ">
                    <div className="flex flex-col gap-2">
                        {tab_finition.map((item, index)=>{
                            return(
                            <div key={index} className="flex flex-row gap-2">
                                <input type="checkbox" checked={check.includes(item)} onChange={()=>handleChecked(item)}/>
                                <label htmlFor="" className="">{item}</label>
                            </div>
                            )})}
                    </div>
            </div>
            </div>
        </section>
        <div className="w-3/4 bg-white p-4 space-y-4 mx-auto font-medium ">
        <div className="flex flex-row justify-end gap-5">
            <button className="border rounded-lg p-1 border-gray-300 px-3 hover:cursor-pointer" onClick={()=>naviguate("/back_office_composants/gestion_produits")}>
                Annuler
            </button>
            <button className="border rounded-lg p-1 px-3 border-gray-300 font-medium bg-blue-800 text-white hover:cursor-pointer" onClick={handleUpdate}>
                Mettre à jour
            </button>
        </div>

        </div>
    </section>

    </section>

    {ajour && (<section className="fixed inset-0 bg-black/50 flex justify-center items-center">
    <div className=" bg-white w-50 p-2 rounded-lg">
        <div className=" w-full pb-5">
            <p className=" w-full border-b">
                Informations
            </p>
        </div>
        
        <p>
            Mise à jour éffectuée
        </p>
        <div className="flex justify-end pt-5">
            <button className="text-right px-2 py-1 border-gray-300 rounded border hover:cursor-pointer hover:bg-red-500 hover:text-white" onClick={()=>naviguate("/back_office_composants/gestion_produits")}>fermer</button>
        </div>
        
        
    </div>
       
    </section>)}
    </>)
}
export default Modif_prod; 