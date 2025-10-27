import React, {useState, useEffect, useContext} from "react";
import { useCompte } from "../hookPersonnaliseCompte";
import { Nav_bar_with_searchbar } from "../../composants";
import {ArrowLeft, Eye} from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom";

function CompteMod(){

    const userMod = useLocation().state || {}
    useEffect(()=> console.log(userMod), [userMod])

const [compte, setCompte] = useCompte()
/*const [infosUser, setInfosUser] = useState({    
    id: "",
    Nom: "",
    Email: "",
    Login: "",
    Entreprise: "",
    Role: "",
    Statut: "Actif",
    inscription: "",
    Photo: "",
    MotDePasse: ""})*/

    const [showPassword,setShowPassword] = useState(false)
    const [modal, setModal] = useState(false)
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [entreprise, setEntreprise] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [roleUser, setRoleUser] = useState("Client");
    const [statut, setStatut] = useState("Actif");
    const [dateString, setDateString] = useState("");
    const [photo, setPhoto] = useState("");

    useEffect(() => {
  if (userMod && userMod.Nom) {
    const index_name = userMod.Nom.indexOf(" ");
    const nomMod = index_name !== -1 ? userMod.Nom.slice(0, index_name) : userMod.Nom;
    const pnomMod = index_name !== -1 ? userMod.Nom.slice(index_name + 1) : "";


    setNom(nomMod);
    setPrenom(pnomMod);
    setTel(userMod.Tel || "");
    setEmail(userMod.Email || "");
    setEntreprise(userMod.Entreprise || "");
    setLogin(userMod.Login || "");
    setPassword(userMod.MotDePasse || "");
    setRoleUser(userMod.Role || "Client");
    setStatut(userMod.Statut || "Actif");
    setDateString(userMod.inscription || "");
    setPhoto(userMod.Photo || "");
  }
}, [userMod]);
    


    const naviguate = useNavigate()
    const role = ["Admin", "Client", "Invité"]

    const handleChangeImg = (e) => {
        const file = e.target.files[0]
        if(file){
            setPhoto(URL.createObjectURL(file))
        }
    
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        if (name === "nom"){
            setNom(value)
        }
        else if (name === "pnom"){
            setPrenom(value)
        }else if (name === "email"){
            setEmail(value)
        }else if (name === "tel"){
            setTel(value)
        }else if (name === "entreprise"){
            setEntreprise(value)
        }else if (name === "login"){
            setLogin(value)
        }else if (name === "password"){
            setPassword(value)
        }else if (name === "role"){
            setRoleUser(value)
        }else if (name === "showPassword"){
            setShowPassword(!showPassword)
        }
    }
    const onMod = (e) => {

        const newUser = {
            id: compte.length + 1,
            Nom: nom + " " + prenom,
            Email: email,
            Login: login,
            Entreprise: entreprise,
            Role: roleUser,
            Statut: statut,
            inscription: dateString,
            Photo: photo,
            MotDePasse: password,
            Tel : tel

        }
        setCompte((prev)=>prev.map((item)=>item.id === userMod.id ? newUser : item))
        setModal(true)
    }
    
    const onClose = (e)=> naviguate("/back_office_composants/gestion_comptes")

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
                
                <div className="flex flex-row justify-between gap-5">
                    <div className="flex flex-col items-start justify-center gap-1 w-1/2">
                        <label htmlFor="pnom" className="font-medium">
                            Prénoms *
                        </label>
                        <input placeholder="ex : jean paul" id="pnom" name="pnom" type="text" className="border border-gray-300 rounded-lg p-2 w-full" onChange={handleChange} value={prenom}/>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-1 w-1/2">
                        <label htmlFor="nom" className="font-medium">
                            Nom *
                        </label>
                        <input placeholder="ex : koffi" id="nom" name="nom" type="text" className="border border-gray-300 rounded-lg p-2 w-full" onChange={handleChange} value={nom}/>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-1">
                    <label htmlFor="email" className="font-medium">
                            Email *
                        </label>
                        <input placeholder="infos@test.ci" id="email" name="email" type="text" className="border border-gray-300 rounded-lg p-2" value={email} onChange={handleChange}/>
                </div>

                <div className="flex flex-col justify-between gap-1">
                    <label htmlFor="tel" className="font-medium">
                            Téléphone *
                        </label>
                        <input id="tel" name="tel" type="text" className="border border-gray-300 rounded-lg p-2" onChange={handleChange} value={tel} placeholder="+225 0101010101"/>
                </div>

                <div className="flex flex-col justify-between gap-1">
                    <label htmlFor="entreprise" className="font-medium">
                            Entrprise *
                        </label>
                        <input placeholder="ex : imprimerie ko" id="entreprise" name="entreprise" value={entreprise} type="text" className="border border-gray-300 rounded-lg p-2" onChange={handleChange}/>
                </div>
                    <div className="flex flex-col justify-between gap-1  pb-5">
                    <label htmlFor="file" className="font-medium">
                            Photo de profil
                    </label>
                    <div className="flex flex-row gap-5 pb-5 items-center">
                    <input type="text" className="border border-gary-300 rounded-lg p-2 w-3/4" disabled value={photo}/>
                    <div><label
                    htmlFor="file" className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition">
                    Choisir un fichier
                    </label>
                    <input id="file" type="file" className="hidden" accept="image/*" onChange={handleChangeImg}/></div>
                    
                </div>
                </div>
              </section>

              <section className="border rounded-lg border-gray-300 flex flex-col px-4 gap-2">

                <div className="flex flex-col gap-1 pt-5">
                    <h2 className="font-medium text-xl">
                        Informations du compte
                    </h2>
                    <p className="text-gray-500">
                        informations de connection du compte
                    </p>
                </div>

                    <div className="flex flex-col justify-between gap-1 pb-5">
                    <label htmlFor="login" className="font-medium">
                            Login *
                        </label>
                        <input id="login" name="login" value={login} type="text" className="border border-gray-300 rounded-lg p-2" onChange={handleChange}/>
                </div>

              <div className="flex items-center gap-5">
                <div className="flex flex-col justify-between gap-1 pb-5 w-[95%]">
                    <label htmlFor="password" className="font-medium">
                            Mot de passe *
                        </label>
                        <input id="password" value={password} name="password" type={showPassword ? "text" : "password"} className="border border-gray-300 rounded-lg p-2" onChange={handleChange}/>
                </div>
                <div>
                    <input type="checkbox" name="showPassword" id="showPassword" hidden={true}onChange={handleChange}/> <label htmlFor="showPassword"><Eye /></label>
                </div>
                </div>
                

                <div className="flex flex-col justify-between gap-1  pb-5">
                    <label className="font-medium" htmlFor="role">
                            Rôle *
                        </label>
                        <select id="role" name="role" className="border border-gray-300 rounded-lg py-2 px-2" defaultValue={roleUser} onChange={handleChange}>
                            {role.map((item, index)=>
                                <option  key={index} value={item}>{item}</option>
                            )}
                        </select>
                </div>

                
              </section>

              <div className="flex justify-end">
                <button className="border border-gray-300 bg-blue-700 hover:bg-blue-600 text-white rounded-lg p-2 px-10 hover:cursor-pointer" onClick={onMod}>
                    Ajouter
                </button>
              </div>
        </section>

        {modal && 
            <section className="bg-black/20 fixed min-h-screen pt-50 top-0 min-w-screen">
                <div className="w-1/2 p-5 bg-white fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                    <div className="flex border-b border-gray-300 text-red-500 font-bold font-serif text-xl pb-5 mb-5">
                        Informations
                    </div>
                    <p className="">
                        Modification effectuée avec succès
                    </p>
                    <div className="mt-5 flex justify-end"><button onClick={onClose} className="border border-gray-300 px-5 py-1 rounded-lg bg-blue-700 text-white hover:cursor-pointer hover:bg-blue-600">
                        Fermer
                    </button></div>
                    
                </div>
            </section>
        }
        </>
    )
}
export default CompteMod