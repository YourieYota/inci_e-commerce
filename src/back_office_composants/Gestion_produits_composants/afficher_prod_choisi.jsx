import React, {useState, useEffect} from "react";


export function AfficherProduitChoisi({prodToVisible, handlModalProdToVisible, prod_tab, setProd_tab, nomPage}){

        const [radioFormat, setRadioFormat] = useState("")
        const [radioFinition, setRadioFinition] = useState("")
        const [qte, setQte] = useState("")

        const handleChange = (e)=>{
            const{name, value}= e.target
            if(name ==="format"){
                setRadioFormat(value)
            }else if(name === "finition"){
                setRadioFinition(value)
            }else{
                setQte(value)
            }
        }

        /*const updateCom =(e)=>{
            const result = prod_tab.filter((val, id)=>)
        }*/
        return(<section className="fixed top-0 right-0 bg-black/50 min-h-screen w-full">
        <div className="fixed w-1/4 min-h-3/4 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden">
            <div>
            <div className="flex space-y-2 p-7 px-5 items-start gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">
                        {prodToVisible.nom}
                    </h1>
                    <p className=" text-gray-500 text-lg">
                        {prodToVisible.description}
                    </p>
                </div>
                {
                    prodToVisible.pop === "oui" && <div className="bg-yellow-500 rounded-lg p-1 px-5">
                        Populaire
                </div>
                }
            </div>
            <div className="absolute top-0 right-5 text-2xl text-gray-500 hover:cursor-pointer" onClick={handlModalProdToVisible}>
                x
            </div>
            </div>

            <div className="flex gap-2 justify-start">
                <div className="px-5 rounded-lg overflow-hidden">
                    <img src={prodToVisible.src} alt="" className="size-50 rounded-lg" />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between gap-10 text-gray-500 text-md">
                        <div>
                        <div>
                            <img src="#" alt="" />
                        </div>
                        <div>
                            Min. {prodToVisible.qte_min} <br /> unités
                        </div>   
                        </div>

                        <div>
                        <div>
                            <img src="#" alt="" />
                        </div>
                        <div>
                            Livraison en {prodToVisible.dur_prod} <br /> jours
                        </div>   
                        </div>
                        
                    </div>


                    <div className="flex flex-col gap-2">
                        <h2 className="font-medium">Format</h2>
                        {prodToVisible.format.map((item, index)=>(
                            <div key={index} className="gap-1 flex">
                                <input type="radio" name="format" id={`rd_format ${index}`} value={radioFormat} onChange={handleChange}/>
                                <label htmlFor={`rd_format ${index}`}>{item.Nom} ({item.Hauteur} x {item.Largeur} {item.unit})</label>
                            </div>
                        ))}
                    </div>

                        <div className="flex flex-col gap-2">
                        <h2 className="font-medium">Finition</h2>
                        {prodToVisible.finition.map((item, index)=>(
                            <div key={index} className="gap-1 flex">
                                <input type="radio" name="finition" id={`rd_finition ${index}`} value={radioFinition} onChange={handleChange}/>
                                <label htmlFor={`rd_finition ${index}`}>{item}</label>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-medium">Quantité</h2>
                        <input type="text" placeholder={`Minimum ${prodToVisible.qte_min}`} className="border border-gray-300 p-2 rounded-lg" onChange={handleChange} name="quant" value={qte}/>
                    </div>

                    <div className="flex flex-col gap-2 border border-gray-300 bg-blue-50 rounded-lg p-2">
                        <h2 className="border-b border-gray-300 font-medium">Prix unitaire</h2>
                        <p>A partir de {prodToVisible.prix}</p>
                    </div>

                    <div className="flex gap-2 pb-5">
                        <button className="disabled:bg-blue-700/30 rounded-lg px-5 py-2 shadow-md bg-blue-700 hover:cursor-pointer disabled:cursor-default" onClick={""} disabled={nomPage === "gestion des produits"}>
                        <h2 className="border-gray-300 font-medium flex items-center gap-4 text-white ">
                            <div className="border border-white rounded-full px-1 text-xs text-white">
                                +
                            </div>
                            Ajouter au panier
                        </h2>
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    </section>)
    
}