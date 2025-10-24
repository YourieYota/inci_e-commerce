import React, { useEffect, useState } from "react";
import { Nav_bar_with_searchbar } from "../../composants";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Switch } from "antd";
import { useProduit } from "../hookProduitPersonnalise";

function Modif_prod() {
  const [prod_tab, setProd_tab] = useProduit();
  const naviguate = useNavigate();

  const [ajour, setAjour] = useState(false);
  const [error, setError] = useState(null);
  const [checked_switch, setChecked_switch] = useState(false);
  const [Nom_format, setNom_format] = useState("");
  const [Largeur_format, setLargeur_format] = useState("");
  const [Hauteur_format, setHauteur_format] = useState("");
  const [unit_format, setUnit_format] = useState("mm");
  const [check, setCheck] = useState([]);

  const [produit, setProduit] = useState({
    nom: "",
    description: "",
    prix: "",
    cat: "",
    src: "",
    qte_min: "",
    dur_prod: "",
    format: [],
    finition: [],
    pop: false,
  });

  const tab_cat = [
    "Flyers",
    "Carte de visite",
    "Carte Professionnelle",
    "Banderolle",
    "Affiche",
    "Brochure",
  ];

  const tab_finition = ["Mat", "Brillant", "Soft Touch", "Plastifié"];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files[0]) {
      setProduit((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(files[0]),
      }));
    } else {
      setProduit({ ...produit, [name]: value });
    }
  };

  const handleChecked = (finition) => {
    setCheck((prev) => {
      const newFinitions = prev.includes(finition)
        ? prev.filter((item) => item !== finition)
        : [...prev, finition];
      setProduit((p) => ({ ...p, finition: newFinitions }));
      return newFinitions;
    });
  };

  const onChangeFormat = (e) => {
    const [name, value] = [e.target.name, e.target.value]
    if (name === "nomForm") setNom_format(value);
    else if (name === "LargeurForm") setLargeur_format(value);
    else if (name === "HauteurForm") setHauteur_format(value);
    else if (name === "unitForm") setUnit_format(value);
  };

  const addformat = (e) => {
    if (Nom_format && Largeur_format && Hauteur_format && unit_format) {
      const new_format = {
        Nom: Nom_format,
        Largeur: Largeur_format,
        Hauteur: Hauteur_format,
        unit: unit_format,
      };
      setProduit((prev) => ({ ...prev, format: [...prev.format, new_format] }));
      setNom_format("");
      setLargeur_format("");
      setHauteur_format("");
      setUnit_format("mm");
      setError(null);
    } else {
      setError("Veuillez remplir tous les champs");
    }
  };

  const onChange = (checked) => {
    setChecked_switch(checked);
    setProduit((prev) => ({ ...prev, pop: checked }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // ici tu peux appeler une fonction externe basée sur ces données
    console.log("Produit sauvegardé :", produit);
    setAjour(true);
  };

  return (
    <>
      <section className="pb-16">
        <Nav_bar_with_searchbar />
      </section>

      <section className="bg-white">
        <section className="text-left pt-5 bg-white border-b-2 pb-5 border-gray-200">
          <div className="flex flex-row items-center gap-8 container mx-auto">
            <ArrowLeft
              className="hover:cursor-pointer"
              onClick={() =>
                naviguate("/back_office_composants/gestion_produits")
              }
            />
            <div className="space-y-1">
              <h1 className="text-3xl text-blue-800 font-bold">
                Créer un produit
              </h1>
              <p className="text-xl text-gray-500">Formulaire vierge</p>
            </div>
          </div>
        </section>

        {/* Informations générales */}
        <section className="container mx-auto mt-10">
          <div className="w-3/4 border border-gray-200 rounded-lg p-4 bg-white space-y-4 mx-auto">
            <div className="flex flex-col gap-2 font-medium">
              <label>Nom du produit *</label>
              <input
                type="text"
                name="nom"
                className="border rounded-md p-2 border-gray-300"
                onChange={handleChange}
                value={produit.nom}
              />
            </div>

            <div className="flex flex-col gap-2 font-medium">
              <label>Catégorie *</label>
              <select
                name="cat"
                className="border border-gray-300 rounded-lg p-2"
                onChange={handleChange}
                value={produit.cat}
              >
                <option value="">Choisir une catégorie</option>
                {tab_cat.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 font-medium">
              <label>Description *</label>
              <textarea
                name="description"
                className="border rounded-md p-2 border-gray-300"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex flex-col gap-2 font-medium">
              <label>Image du produit *</label>
              <input
                type="file"
                name="src"
                className="border rounded-lg p-2 border-gray-300"
                onChange={handleChange}
                value={produit.src}
              />
            </div>
          </div>
        </section>

        {/* Tarification */}
        <section className="container mx-auto mt-10">
          <div className="w-3/4 border border-gray-200 rounded-lg p-4 bg-white space-y-4 mx-auto">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2 font-medium">
                <label>Prix de base (XOF) *</label>
                <input
                  type="text"
                  name="prix"
                  className="border rounded-md p-2 border-gray-300"
                  onChange={handleChange}
                  value={produit.prix}
                />
              </div>
              <div className="flex flex-col gap-2 font-medium">
                <label>Quantité minimum *</label>
                <input
                  type="number"
                  name="qte_min"
                  className="border rounded-md p-2 border-gray-300"
                  onChange={handleChange}
                  value={produit.qte_min}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 font-medium">
              <label>Durée de production (jours) *</label>
              <input
                type="text"
                name="dur_prod"
                className="border rounded-md p-2 border-gray-300"
                onChange={handleChange}
                value={produit.dur_prod}
              />
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Switch onChange={onChange} className="bg-blue-800" />
              <p>Produit populaire (mis en avant)</p>
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="container mx-auto mt-10">
          <div className="w-3/4 border border-gray-200 rounded-lg p-4 bg-white space-y-4 mx-auto">
            <h4 className="text-2xl font-medium">Formats disponibles</h4>

            <div className="flex flex-row gap-2 font-medium">
              <input
                type="text"
                name="nomForm"
                placeholder="Nom"
                className="border rounded-lg p-2 border-gray-300"
                onChange={onChangeFormat}
                value={Nom_format}
              />
              <input
                type="text"
                name="LargeurForm"
                placeholder="Largeur"
                className="border rounded-lg p-2 border-gray-300"
                onChange={onChangeFormat}
                value={Largeur_format}
              />
              <input
                type="text"
                name="HauteurForm"
                placeholder="Hauteur"
                className="border rounded-lg p-2 border-gray-300"
                onChange={onChangeFormat}
                value={Hauteur_format}
              />
              <select
                name="unitForm"
                className="border rounded-lg p-2 border-gray-300"
                onChange={onChangeFormat}
                value={unit_format}
              >
                <option value="mm">mm</option>
                <option value="cm">cm</option>
              </select>
            </div>

            <button
              className="mt-2 border border-gray-300 rounded-lg p-2 w-full font-medium hover:cursor-pointer"
              onClick={addformat}
            >
              Ajouter ce format
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </section>

        {/* 🟧 Finitions */}
        <section className="container mx-auto mt-10">
          <div className="w-3/4 border border-gray-200 rounded-lg p-4 bg-white space-y-4 mx-auto">
            <h4 className="text-2xl font-medium">Finitions disponibles</h4>
            <div className="flex flex-col gap-2">
              {tab_finition.map((item, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    checked={check.includes(item)}
                    onChange={() => handleChecked(item)}
                  />
                  <label>{item}</label>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-3/4 bg-white p-4 space-y-4 mx-auto font-medium">
          <div className="flex flex-row justify-end gap-5">
            <button
              className="border rounded-lg p-1 border-gray-300 px-3 hover:cursor-pointer"
              onClick={() =>
                naviguate("/back_office_composants/gestion_produits")
              }
            >
              Annuler
            </button>
            <button
              className="border rounded-lg p-1 px-3 border-gray-300 font-medium bg-blue-800 text-white hover:cursor-pointer"
              onClick={handleUpdate}
            >
              Enregistrer
            </button>
          </div>
        </div>
      </section>

      {ajour && (
        <section className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white w-50 p-2 rounded-lg">
            <p className="border-b mb-4 font-bold text-lg">Informations</p>
            <p>Mise à jour effectuée</p>
            <div className="flex justify-end pt-5">
              <button
                className="text-right px-2 py-1 border-gray-300 rounded border hover:cursor-pointer hover:bg-red-500 hover:text-white"
                onClick={() =>
                  naviguate("/back_office_composants/gestion_produits")
                }
              >
                Fermer
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Modif_prod;
