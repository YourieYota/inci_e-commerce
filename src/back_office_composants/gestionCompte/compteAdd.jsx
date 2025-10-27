import React, {useState, useEffect, useContex} from "react";
import { useCompte } from "../hookPersonnaliseCompte";
import { Nav_bar_with_searchbar } from "../../composants";
import {ArrowLeft} from "lucide-react"
import { useNavigate } from "react-router-dom";

function CompteAdd(){
const [compte, setCompte] = useCompte()
const [infosUser, setInfosUser] = useState({    
    id: "",
    Nom: "",
    Email: "",
    Login: "",
    Entreprise: "",
    Role: "",
    Statut: "Actif",
    inscription: "",
    Photo: "",
    MotDePasse: ""})

    const naviguate = useNavigate()

    return(
        <>
            <section className="pb-16">
                <Nav_bar_with_searchbar />
            </section>

            <section>
            <section className="text-left pt-5 bg-white border-b-2 pb-5 border-gray-200">
          <div className="flex flex-row items-center gap-8 container mx-auto">
            <ArrowLeft
              className="hover:cursor-pointer"
              onClick={() =>
                naviguate("/back_office_composants/gestion_comptes")
              }
            />
            <div className="space-y-1">
              <h1 className="text-3xl text-blue-800 font-bold">
                Nouvel utilisateur
              </h1>
              <p className="text-xl text-gray-500">Créez un nouveau compte utilisateur</p>
            </div>
          </div>
        </section>
        </section>
        <section className="container mx-auto flex flex-col gap-5 pt-5 mb-5">
              <section className="border rounded-lg border-gray-300 flex flex-col px-4 gap-4">
                <div className="flex flex-col gap-1 pt-5">
                    <h2 className="font-medium text-xl">
                        Informations personnelles
                    </h2>
                    <p className="text-gray-500">
                        informations de base de l'utilisateur
                    </p>
                </div>

                <div className="flex flex-row gap-2 justify-between">
                    <div className="flex flex-col items-start justify-center gap-1">
                        <label className="font-medium">
                            Prénoms *
                        </label>
                        <input type="text" className="border border-gray-300 rounded-lg p-2"/>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-1">
                        <label className="font-medium">
                            Nom *
                        </label>
                        <input type="text" className="border border-gray-300 rounded-lg p-2 w-"/>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-1">
                    <label className="font-medium">
                            Email *
                        </label>
                        <input type="text" className="border border-gray-300 rounded-lg p-2"/>
                </div>

                <div className="flex flex-col justify-between gap-1">
                    <label className="font-medium">
                            Téléphone *
                        </label>
                        <input type="text" className="border border-gray-300 rounded-lg p-2"/>
                </div>

                <div className="flex flex-col justify-between gap-1 pb-5">
                    <label className="font-medium">
                            Entrprise *
                        </label>
                        <input type="text" className="border border-gray-300 rounded-lg p-2"/>
                </div>
              </section>

              <section className="border rounded-lg border-gray-300 flex flex-col px-4 gap-4">

                <div className="flex flex-col gap-1 pt-5">
                    <h2 className="font-medium text-xl">
                        Informations du compte
                    </h2>
                    <p className="text-gray-500">
                        informations de connection du compte
                    </p>
                </div>

                    <div className="flex flex-col justify-between gap-1 pb-5">
                    <label className="font-medium">
                            Login *
                        </label>
                        <input type="text" className="border border-gray-300 rounded-lg p-2"/>
                </div>

                <div className="flex flex-col justify-between gap-1 pb-5">
                    <label className="font-medium">
                            Mot de passe *
                        </label>
                        <input type="text" className="border border-gray-300 rounded-lg p-2"/>
                </div>

                <div className="flex flex-col justify-between gap-1 pb-5">
                    <label className="font-medium">
                            Rôle *
                        </label>
                        <input type="text" className="border border-gray-300 rounded-lg p-2"/>
                </div>
              </section>
        </section>
        </>
    )
}
export default CompteAdd