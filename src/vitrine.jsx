import React, { useState } from "react";
import { Accueil_vitr } from "./vitrine_composants/acuueil_vitr";
import { Produits_vitr } from "./vitrine_composants/produits_vitrine";

function Vitrine() {
  const [active, setActive] = useState("PRODUITS");

  return (
    <>
      {active === "ACCUEIL" && <Accueil_vitr active={active} setActive={setActive} />}
      {active === "PRODUITS" && <Produits_vitr active={active} setActive={setActive} />}
    </>
  );
}

export default Vitrine;
