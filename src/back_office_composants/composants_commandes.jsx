import React,{ useEffect, useState, useRef} from "react";


export function CompCom({onVoirDetailsClick}){
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

    
    useEffect(()=>{
        const ecouteClick = (e)=>{
            if (divRef.current && !divRef.current.contains(e.target)){
                setIsVisible(false);
            }
        }
        document.addEventListener("mousedown", ecouteClick)
        return ()=> document.removeEventListener("mousedown", ecouteClick)
    },[])

    

    return(
        <div ref={divRef} className="relative text-left inline-block">
            <button className="text-xl font-bold hover:bg-gray-100 rounded-full px-2" onClick={()=>setIsVisible(!isVisible)}>
                ⋮
            </button>
            {isVisible && (
                <div className="absolute font-serif p-2 right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-md z-50">
                    <p className="border-b border-gray-300 p-2">Actions</p>
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onVoirDetailsClick}>
                            Voir détails
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Générer facture
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Envoyer notifications
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                            Annuler la commande
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )

}

export function AfficheDetail({ open, onClose, commande }) {
    if (!open) {
        return null;
    }
    const titre_tab = ["Client", "Catégorie de Commande", "Type de Produit", "Quantité", "Date de Commande", "Montant"]
    const key_titre_tab = ["entreprise", "catCom", "typeProd", "qte", "date", "montant"]
    return (
        <div className="fixed inset-0 z-40 flex justify-center items-center mx-4 rounded-lg">
            <div className="bg-white rounded-lg shadow-xl p-6 relative w-1/2 max-w-xl">
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={onClose}>
                    x
                </button>
                
                    <div className="flex flex-col mx'4 ">
                        <p className="font-serif text-2xl mb font-bold">
                            Détails de la commande
                        </p>
                        <p className="text-gray-500">Informations complètes sur la commande {commande.idCom}</p>
                    </div>
                    <div className="flex flex-row justify-between pt-4">
                        <div className="flex flex-col">
                            <h1 className="text-3xl  font-bold">
                                {commande.idCom}
                            </h1>
                            <p className="font-serif text-gray-500">
                                Numéro de la commande
                            </p>
                        </div>
                        <button className="border border-gray-300 bg-white text-balck px-4 rounded-lg h-1/2 py-2 mt-auto">
                            {commande.statut}
                        </button>
                    </div>

                    <section className="flex flex-col">
                        <div className="grid grid-cols-2 grid-rows-3 gap-2 pt-4">
                            {titre_tab.map((item, index)=>(
                                <div key={item} className="border rounded-xl border-gray-300 flex flex-col py-6 px-2 space-y-2">
                                    <div>
                                        {//<img src="" alt="" /> /pour l'image d'illustration"
                                        }
                                        <p className="text-gray-500 font-serif">{item}</p>
                                    </div>
                                    <h6 className="font-medium font-serif text-lg">{commande[key_titre_tab[index]]}</h6>
                                </div>
                            ))}
                        </div>
                        <div className="w-full my-1 border border-gray-300 rounded-xl p-4">
                            <h6 className="font-serif text-lg pb-2 ">Description</h6>
                            <p className="font-serif h-20">{commande.caract}</p>
                        </div>
                        <div className="w-full my-1 border border-gray-300 rounded-xl p-2">
                            <p className="">Historique</p>
                            <div className="flex flex-row items-center gap-2">
                                <div className="rounded-full p-1 bg-orange-400"></div>
                                <div className="flex flex-col">
                                    <h6 className="font-serif text-lg pt-6">Date de début</h6>
                                    <p>{commande.date}</p>
                                </div>
                                
                            </div>

                            <div className="flex flex-row items-center gap-2">
                                <div className="rounded-full p-1 bg-blue-400"></div>
                                <div className="flex flex-col">
                                    <h6 className="font-serif text-lg pt-6">Date de début</h6>
                                    <p>{commande.DateFinProd ? commande.DateFinProd : "En cours"}</p>
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>
                </div>
        </div>
    );
}

function Composants_com(){
    const [open, SetOpen] = useState(false)
    const divRef = useRef(null)
}
export default Composants_com;