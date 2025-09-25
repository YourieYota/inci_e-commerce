import React, { useEffect, useState } from "react";
import tab_img_back from "./composants";
import gestion_clients from "./img/gestion_clients.webp";
import gestion_commande from "./img/gestion_commandes.webp";
import gestion_produits from "./img/gestion_produits.webp";
import gestion_Comptes from "./img/gestion_Comptes.webp";

const images = [
  {
    id: 1,
    src: gestion_clients,
    name: "Gestion des clients",
    nom: "clients",
    nbre: 3,
  },
  {
    id: 2,
    src: gestion_commande,
    name: "Gestion des commandes",
    nom: "commandes",
    nbre: 3,
  },
  {
    id: 3,
    src: gestion_produits,
    name: "Gestion des produits",
    nom: "produits",
    nbre: 3,
  },
  {
    id: 4,
    src: gestion_Comptes,
    name: "Gestion des comptes",
    nom: "comptes",
    nbre: 3,
  },
  {
    id: 5,
    src: gestion_commande,
    name: "Gestion des commandes",
    nom: "commandes",
    nbre: 3,
  },
  {
    id: 6,
    src: gestion_produits,
    name: "Gestion des produits",
    nom: "produits",
    nbre: 3,
  },
]

// 👉 fonction pour regrouper les images 3 par 3
const chunkArray = ((arr, size)=>
    arr.reduce((acc, _, i)=>{
        if (i % size ===0) {acc.push(arr.slice(i, i + size)) }
        return acc
    },[]))



function Carousel() {
  const [current, setCurrent] = useState(0);

  const slides = chunkArray(images, 3); // chaque slide = 3 images

  useEffect(() => {
    const interval = setInterval(()=>{
        setCurrent((prev)=> (prev + 1) % slides.length)
    },2000)
    return ()=> clearInterval(interval)
  },[slides.length])  

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto left-[10%]">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-80 overflow-hidden rounded-lg flex items-center justify-center top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2">
        {slides.map((group, index) => (
          <div
            key={index}
            className={`absolute inset-0 grid grid-cols-3 gap-2 cursor-pointer px-4 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {group.map((item, i) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-3"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-32 object-contain rounded-md"
                />
                <h2 className="mt-2 text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  Nombre de {item.nom} : {item.nbre}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-[45%] left-[10%] -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[45%] right-0 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
      >
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
