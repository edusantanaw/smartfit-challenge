import { Card } from "../../styles/_EstaStyles";
import mask1 from "../../assets/recommended-mask.png";
import mask2 from "../../assets/required-mask.png";
import towel2 from "../../assets/required-towel.png";
import towel1 from "../../assets/recommended-towel.png";
import partialFontain from "../../assets/partial-fountain.png";
import fountain1 from "../../assets/forbidden-fountain.png";
import lock from "../../assets/forbidden-lockerroom.png";
import lockPartial from "../../assets/partial-lockerroom.png";
import lockreq from "../../assets/required-lockerroom.png";

export default function Estab({
  opened,
  title,
  address,
  mask,
  towel,
  locker,
  schedules,
  fountain,
}) {

    const addressParser = new DOMParser().parseFromString(address, 'text/html')
    let newAddress = addressParser.body.textContent || " "
  return (
    <Card>
      <span>{opened ? "Aberto" : "Fechado"}</span>
      <h2>{title}</h2>
      <p>{newAddress}</p>
      <ul>
        <li>
          {mask === "required" ? (
            <img src={mask2} alt="mask is required" />
          ) : (
            <img src={mask1} alt="mask recomended" />
          )}
        </li>
        <li>
          {towel === "required" ? (
            <img src={towel2} alt="towel is required" />
          ) : (
            <img src={towel1} alt="mask is recomended" />
          )}
        </li>
        <li>
          {fountain === "partial" ? (
            <img src={partialFontain} alt="partial" />
          ) : (
            <img src={fountain1} alt="forbidden" />
          )}
        </li>
        <li>
          {locker === "partial" ? (
            <img src={lockPartial} alt= "lock" />
          ) : locker === "closed" ? (
            <img src={lock} alt="lock" />
          ) : (
            <img src={lockreq} lock="lock" />
          )}
        </li>
      </ul>
      <div className="week">
      {schedules.map((estab)=>(
          <div>
            <h3>{estab.weekdays}</h3>
            <span>{estab.hour}</span>
        </div>
      ))}
      </div>
    </Card>
  );
}
