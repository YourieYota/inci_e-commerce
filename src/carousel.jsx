import React, { useEffect, useState } from "react";
import tab_img_back from "./composants";
import gestion_clients from "./img/gestion_clients.webp";
import gestion_commande from "./img/gestion_commandes.webp";
import gestion_produits from "./img/gestion_produits.webp";
import gestion_Comptes from "./img/gestion_Comptes.webp";
import { tab_prod } from "./vitrine_composants/produits_vitrine";
const images = tab_prod

// 👉 fonction pour regrouper les images 3 par 3
const chunkArray = ((arr, size)=>
    arr.reduce((acc, _, i)=>{
        if (i % size ===0) {acc.push(arr.slice(i, i + size)) }
        return acc
    },[]))



function Carousel() {
  const [current, setCurrent] = useState(0);

  const slides = chunkArray(images, 4); // chaque slide = 3 images

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
    setCurrent((current + 1 ) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto left-0">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-80 overflow-hidden rounded-lg flex items-center justify-center top-[55%] left-[55%] -translate-x-1/2 -translate-y-1/2">
        {slides.map((group, index) => (
          <div
            key={index}
            className={`absolute inset-0 grid grid-cols-4 gap-2 cursor-pointer px-4 transition-opacity duration-700 ${
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
                  alt={item.nom}
                  className="w-full h-32 object-contain rounded-md"
                />
                <h2 className="mt-2 text-lg font-semibold text-gray-800">
                  {item.nom}
                </h2>
                <p className="text-sm text-gray-500">
                  {item.prix}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 flex space-x-2">
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
        className="absolute top-[55%] left-[10%] -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[55%] right-0 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
      >
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
