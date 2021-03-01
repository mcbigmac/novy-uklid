import TydenNeboPololeti from "./components/TydenNeboPololeti";
import cinnostiTyden from "./cinnostiTyden";
import cinnostiPololeti from "./cinnostiPololeti";
import { useState, useEffect } from "react";

function App() {
  const [zobrazTyden, setZobrazTyden] = useState(true);
  const [background, setBackground] = useState({ backgroundColor: "white" });

  function predemVybrane(who) {
    let predemVybrane = cinnostiPololeti.filter((todo) => todo.who === who);
    let osobniObjekt = {};
    if (predemVybrane.length) {
      for (let item of predemVybrane) {
        osobniObjekt[item.name] = item;
      }
    }
    return osobniObjekt;
  }

  let predemVybraneMama = predemVybrane("mama");
  let predemVybraneTata = predemVybrane("tata");
  let predemVybraneKuba = predemVybrane("kuba");
  let predemVybraneMatej = predemVybrane("matej");

  const predemVybraneObjekt = {
    mama: predemVybraneMama,
    tata: predemVybraneTata,
    kuba: predemVybraneKuba,
    matej: predemVybraneMatej,
  };

  useEffect(() => {
    if (!zobrazTyden) {
      setBackground({ backgroundColor: "#e6f6e6" });
    } else if (zobrazTyden) {
      setBackground({ backgroundColor: "white" });
    }
  }, [zobrazTyden]);

  return (
    <div style={background}>
      <h1>Rodinný úklid aneb Kdo uteče, vyhraje</h1>
      <div className="buttons">
        <button
          className="prepinac"
          style={{
            backgroundColor: zobrazTyden
              ? "rgb(126, 197, 194)"
              : "white"
          }}
          onClick={() => setZobrazTyden(true)}
        >
          Týdenní úklid
        </button>
        <button
          className="prepinac"
          style={{
            backgroundColor: zobrazTyden
              ? "white"
              : "rgb(126, 197, 194)",
          }}
          onClick={() => setZobrazTyden(false)}
        >
          Jarní úklid
        </button>
      </div>
      <TydenNeboPololeti
        zobrazTyden={zobrazTyden}
        cinnosti={zobrazTyden ? cinnostiTyden : cinnostiPololeti}
        predemVybrane={predemVybraneObjekt}
      />
    </div>
  );
}

export default App;
