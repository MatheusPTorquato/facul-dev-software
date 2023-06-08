import React from "react";
import Recipe from "../../PaginaRecipe";
import Img from "../../img/boloFrutas.jpg";

export default function BoloFrutas() {
  return (
    <div>
      <Recipe
        title="Bolo de frutas"
        alt="Bolo de frutas"
        tempo="45 minutos"
        rendimento="8 a 16 porções"
        dificuldade="Fácil"
        image={Img}
        ingredientes={
          <>
            100 gramas de farinha de trigo para a massa
            <br />
            120 gramas de leite condensado para a massa
            <br />
            2 colheres de sopa de mel para a massa
            <br />
            120 ml de leite para a massa
            <br />
            1 colher de chá de bicarbonato de sódio para a massa
            <br />
            1 colher de chá de fermento químico para a massa
            <br />
            5 gramas de especiarias (canela, cravo e gengibre em pó) para a
            massa
            <br />
            1/4 xícara de chá de uva passa para a massa
            <br />
            1/4 xícara de chá de frutas cristalizadas para a massa
            <br />
            1/4 xícara de chá de nozes para a massa
            <br />
            1/4 xícara de chá de cerejas em calda drenadas para a massa
            <br />
            margarina para untar a forma
            <br />
            150 gramas de glaçúcar para a cobertura
            <br />
            15 ml de leite quente para a cobertura
            <br />
            Um pouco * de cada fruta para decorar
            <br />
          </>
        }
        modoPreparo={
          <>
            1. Com a margarina, unte uma forma redonda com furo no meio e cerca
            de 15 cm de diâmetro. Em seguida, separe todas as frutas e as nozes
            em um bowl. Reserve.
            <br />
            2. No liquidificador, acrescente todos os outros ingredientes da
            massa e bata até que estejam bem misturados. Transfira a massa
            batida para o bowl das frutas e misture bem.
            <br />
            3. Coloque a massa pronta na forma untada e asse em forno
            pré-aquecido a 180°C por cerca de 30 minutos. Quando estiver assado,
            retire do forno, espere esfriar e desenforme em um prato com a parte
            do fundo virada para cima.
            <br />
            4. Para a cobertura, misture o glaçúcar com o leite quente aos
            poucos, para que ele engrosse. Passe sobre o bolo e decore com as
            frutinhas reservadas.
            <br />
          </>
        }
      />
    </div>
  );
}
