import React, { useState } from "react";
import { Accueil_vitr } from "./vitrine_composants/acuueil_vitr";
import { Produits_vitr } from "./vitrine_composants/produits_vitrine";
import { Custom_prod } from "./vitrine_composants/commandesPersonnalisee";
import { Commande } from "./vitrine_composants/commande";

function Vitrine() {
  const [active, setActive] = useState("COMMANDES PERSONNALISEES");

  return (
    <>
      {active === "ACCUEIL" && <Accueil_vitr active={active} setActive={setActive} />}
      {active === "PRODUITS" && <Produits_vitr active={active} setActive={setActive} />}
      {active === "COMMANDES PERSONNALISEES" && <Custom_prod active={active} setActive={setActive} />}
      {active === "MES COMMANDES" && <Commande active={active} setActive={setActive}/>}
    </>
  );
}

export default Vitrine;
