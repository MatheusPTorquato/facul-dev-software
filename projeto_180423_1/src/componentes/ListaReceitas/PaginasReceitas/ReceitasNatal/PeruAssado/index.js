import React from "react";
import Recipe from "../../PaginaRecipe";
import Img from "../../img/peru.jpg";

export default function PeruAssado() {
  return (
    <div>
      <Recipe
        title="Peru na manteiga de ervas com recheio de farofa "
        alt="Peru na manteiga de ervas com recheio de farofa "
        image={Img}
        tempo = "3 horas"
        rendimento = "8 a 10 pessoas"
        dificuldade = "Médio"
        ingredientes={
          <>
            <b>Peru:</b>
            <br />
            1 peru grande com cerca de 5 kg
            <br />
            2 cebolas cortadas ao meio
            <br />
            ½ limão
            <br />
            1 cabeça de alho, cortados ao meio na horizontal
            <br />
            6 folhas de louro frescas
            <br />
            Azeite de oliva
            <br />
            8 fatias de bacon
            <br />
            Sal e pimenta do reino
            <br />
            <b>Manteiga de ervas:</b>
            <br />
            370 gramas de manteiga
            <br />
            1 colher de sopa de azeite
            <br />
            raspas da casca e suco de 2 limões sicilianos
            <br />
            3 dentes de alho, descascados e amassados
            <br />
            Maço pequeno de salsinha (destaque as folhas), picado
            <br />
            <b>Farofa de farinha de milho:</b>
            <br />
            300 g de bacon picado
            <br />
            1 pimenta dedo-de-moça, sem sementes, picada finamente
            <br />
            1 cebola grande picada
            <br />
            4 dentes de alho picados
            <br />
            2 xícaras chá de farinha de milho
            <br />
            2 tomates, sem sementes, cortados em cubos
            <br />
            100 g de azeitonas verdes sem caroço, cortadas na metade
            <br />
            Sal e pimenta do reino a gosto
            <br />
          </>
        }
        modoPreparo={
          <>
            1. Pré-aqueça o forno a 220 ° C.
            <br />
            2. Manteiga de ervas : Deixe a manteiga em temperatura ambiente até
            que esteja em ponto de pasta. Em uma tigela grande, tempere com sal
            e pimenta; adicione o azeite e misture bem. Adicione as raspas de
            limão e suco, o alho e a salsa picada. Misture bem e reserve.
            <br />
            3. Deixe o peru limpo por dentro. Se necessário, lave rapidamente
            água corrente e seque com papel toalha. Tempere a cavidade bem com
            sal e pimenta e, em seguida, preencha o espaço com as cebolas, o
            limão, a cabeça de alho e com três folhas de louro inteiras.
            <br />
            4. Com as mãos, lentamente, solte a pele no peito, começando pela
            parte próxima à cavidade. Use uma espátula para conseguir chegar o
            mais próximo possível da parte superior do peito, mas sem soltar a
            pele naquela extremidade. Preencha tal espaço com a manteiga de
            ervas,acrescentando pequenas porções com uma colher e espalhando com
            a lateral da mão ao passá-la sobre a pele, com cuidado para não
            romper o tecido. Faça pequenas incisões na pele das coxas e repita o
            procedimento. <br />
            5. Coloque metade do tempero e o restante espalhe por fora de toda a
            ave, massageando suavemente a manteiga. Por fim, coloque as folhas
            de louro restantes por sob a pele. Prenda as coxas com um barbante
            para segurar os ingredientes colocados na cavidade.
            <br />
            6. Coloque o peru em uma assadeira grande, com o peito para cima.
            Tempere bem com sal e pimenta, em seguida, regue com um pouco de
            azeite.
            <br />
            7. Assar o peru no forno quente por 15 minutos. Retire a assadeira
            do forno, regue a ave com os sucos da bandeja e coloque as fatias de
            bacon sobre o peito para mantê-lo úmido. Regue novamente. Diminua a
            temperatura para 180° C e cozinhe por cerca de 2 horas e 1/2,
            regando a cada 30 minutos.
            <br />
            8. O peru estará pronto quando a temperatura interna atingir 74°C .
            Quem não dispuser de termômetro culinário, pode testar se o peru
            está cozido inserindo um palito na parte mais espessa da perna. Se o
            suco que escorrer estiver limpo e não rosado, a ave está pronta.{" "}
            <br />
            9. Transferir o peru para uma travessa aquecida. Deixe o peru para
            descansar em um lugar quente por pelo menos 45 minutos. Enquanto
            isto, prepare a farofa.
            <br />
            10. Farofa de milho : Aqueça uma frigideira grande. Coloque o bacon
            picado e a pimenta, e deixe-os fritar, até que o bacon comece a
            derreter sua própria gordura. Acrescente a cebola e refogue por
            cerca de dois minutos, para, em seguida, incorporar o alho e fritar
            por mais um minuto. Mexa com frequência para evitar que queimem e
            coloque os tomates, misturando bem. Logo em seguida, coloque uma
            xícara de farinha, misture bem e despeje o restante. Por fim,
            incorpore as azeitonas e experimente, acertando o tempero com o sal
            e a pimenta.
            <br />
            11. Retire as folhas de louro, assim como os demais temperos da
            cavidade (cebola, limão e alho). Preencha o espaço com a farofa e,
            se necessário, ajeite novamente as coxas da ave, prendendo-as com
            barbante. Sirva inteiro
          </>
        }
      />
    </div>
  );
}
