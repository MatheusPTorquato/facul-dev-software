import React from "react";
import Recipe from "../../PaginaRecipe";
import Img from "../../img/cheesecake.jpg";

export default function CheesecakeChocolate() {
  return (
    <div>
      <Recipe
        title="
        Cheesecake de Framboesas com Chocolate Branco"
        alt="
        Cheesecake de Framboesas com Chocolate Branco"
        tempo="2 horas"
        rendimento="10 porções"
        dificuldade="Médio"
        image={Img}
        ingredientes={
          <>
            <b>Massa:</b>
            <br />
            1 xícara de biscoito doce esfarelado
            <br />
            80g de manteiga, derretida
            <br />
            <b>Recheio:</b>
            <br />
            500g de queijo cream cheese
            <br />
            ¾ xícara de açúcar refinado
            <br />
            1 colher de chá de raspas de casca de limão
            <br />
            2 colheres de chá de gelatina dissolvida em ¼ xícara de água
            fervente
            <br />
            200g de chocolate branco, derretido em banho Maria e resfriado
            ligeiramente
            <br />
            ½ xícara de framboesas frescas ou congeladas
            <br />
            <b>Cobertura:</b>
            Framboesas
            <br />
            Açúcar de confeiteiro para polvilhar
          </>
        }
        modoPreparo={
          <>
            1. Misture o biscoito e manteiga, em seguida, pressione na base de
            uma forma redonda (de preferencia aquelas que soltam o fundo)
            untada. <br />
            2. Reserve.
            <br />
            3. Misture o cream cheese, açúcar e limão com uma batedeira até
            ficar homogêneo. <br />
            4. Adicione a gelatina e o chocolate e misture até ficar homogêneo.{" "}
            <br />
            5. Acrescente algumas framboesas no meio do creme e coloque a
            mistura sobre a massa preparada na forma.
            <br />
            6. Leve à geladeira por três horas ou até endurecer.
            <br />
            7. Decore com framboesas extras, se desejar, e polvilhe com açúcar
            de confeiteiro antes de cortar.
          </>
        }
      />
    </div>
  );
}
