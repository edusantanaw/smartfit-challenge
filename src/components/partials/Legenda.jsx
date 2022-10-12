import mask from "../../assets/recommended-mask.png";
import mask2 from "../../assets/required-mask.png";
import towel2 from "../../assets/required-towel.png";
import towel from "../../assets/recommended-towel.png";
import fountain from "../../assets/forbidden-fountain.png";
import lock from "../../assets/forbidden-lockerroom.png";
import partialFontain from "../../assets/partial-fountain.png";
import lockPartial from "../../assets/partial-lockerroom.png";
import lockreq from "../../assets/required-lockerroom.png";
import { LegendaContainer } from "../../styles/_legend";

export default function Legenda() {
  return (
    <LegendaContainer>
      <div>
        <h1>Mascara</h1>
        <div className="legenda_img">
          <div>
            <img src={mask2} alt="mask" />
            <span>Obrigatorio</span>
          </div>
          <div>
            <img src={mask} alt="mask" />
            <span>Recomendado</span>
          </div>
        </div>
      </div>
        <div>
          <h1>Toalha</h1>
          <div className="legenda_img">
            <div>
              <img src={towel2} alt="towel is required" />
              <span>Obrigatorio</span>
            </div>
            <div>
              <img src={towel} alt="towel recomended" />
              <span>Recomendado</span>
            </div>
          </div>
        </div>
        <div>
          <h1>Bebedouro</h1>
          <div className="legenda_img">
            <div>
              <img src={partialFontain} alt="fountain" />
              <span>Parcial</span>
            </div>
            <div>
                <img src={fountain} alt="fountain" />
                <span>Proibido</span>
            </div>
          </div>
        </div>
        <div>
            <h1>Vestiário</h1>
            <div className="legenda_img">
                <div>
                    <img src={lock} alt="lock" />
                    <span>Liberado</span>
                </div>
                <div>
                    <img src={lockPartial} alt="lock" />
                    <span>parcial</span>
                </div>
                <div>
                    <img src={lockreq} alt="lock" />
                    <span>Proibido</span>
                </div>
            </div>
        </div>
    </LegendaContainer>
  );
}
