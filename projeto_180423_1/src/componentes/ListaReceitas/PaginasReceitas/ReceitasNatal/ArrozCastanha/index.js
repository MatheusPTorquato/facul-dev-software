import React from "react";
import Recipe from "../../PaginaRecipe";
import Img from "../../img/ArrozCastanha.jpg";

export default function ArrozCastanha() {
  return (
    <div>
      <Recipe
        title="Arroz natalino com frutas secas"
        alt="Arroz com frutas secas"
        tempo = "30 minutos"
        rendimento = "10 a 15 porções"
        dificuldade = "Fácil"
        image={Img}
        ingredientes={
          <>
            2 xícaras de arroz (já cozido);
            <br />
            ½ cebola pequena picada,
            <br />
            2 dentes de alho,
            <br />
            ½ xícara de uvas passas,
            <br />
            ½ xícara de uvas passas brancas,
            <br />
            ½ xícara de damascos picados,
            <br />
            ½ xícara de tâmaras picadas,
            <br />
            1 xícara de castanhas a gosto picadinhas (nozes, castanha do Pará e
            amêndoas),
            <br />
            Azeite a gosto,
            <br />
            Salsinha e cebolinha picadas a gosto,
            <br />
            Sal a gosto
          </>
        }
        modoPreparo={
          <>
            1. Refogue a cebola e o alho com azeite em fogo médio, usando uma
            panela alta, onde você vai conseguir misturar todos os ingredientes;
            <br />
            2. Depois disso, adicione os dois tipos de uvas passas e as
            castanhas picadas e misture um pouco;
            <br />
            3. Abaixe o fogo e adicione o arroz, a salsinha, as tâmaras e os
            damascos e misture tudo delicadamente, agregando os sabores;
            <br />
            4. Coloque numa travessa e decore com as frutas e castanhas inteiras
            ou leve ao forno por alguns minutos para gratinar com queijo
            parmesão.
            <br />
            Obs: Você pode personalizar sua receita adicionando outros
            elementos, como cenouras picadas, pimentões, azeitonas ou, até
            mesmo, cubinhos de chester no momento de refogar. O modo de preparo
            continuará sendo o mesmo.
          </>
        }
      />
    </div>
  );
}
