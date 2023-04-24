import React from "react";
import Recipe from "../../PaginaRecipe";
import Img from "../../img/tender.jpg";

export default function Tender() {
  return (
    <div>
      <Recipe
        title="Tender ao Molho de Laranja e Mel"
        alt="Tender ao Molho de Laranja e Mel"
        tempo="40 minutos"
        rendimento="12 porções"
        dificuldade="Médio"
        image={Img}
        ingredientes={
          <>
            1 tender bolinha
            <br />
            2 colheres de mel
            <br />
            cravos da índia a vontade
            <br />
            2 xícaras de suco de laranja natural
            <br />
          </>
        }
        modoPreparo={
          <>
            1. Com uma faca, desenhe pequenos losangos sobre o tender.
            <br />
            2. Na ponta de cada losango espete um cravo da índia.
            <br />
            3. Coloque-o dentro de uma assadeira.
            <br />
            4. Espalhe o mel sobre o tender e em seguida despeje o suco de
            laranja.
            <br />
            5. Cubra com papel alumínio e leve ao forno pré aquecido em 180° C
            por 70 minutos, regando com o molho na metade do tempo.
            <br />
            6. Sirva na mesma travessa e regue com o molho sempre que quiser.
            <br />
          </>
        }
      />
    </div>
  );
}
