import hours from "../../assets/icon-hour.png";
import { useState } from "react";

export default function Form({handleSearch, handleClear, result}) {
  const [per, setPerido] = useState('')
  const [show, setShow] = useState(false)
  const handlePeriodo = (e) =>{
    const periodo = e.target.value
    setPerido(periodo)
  }

  return (
    <form>
      <div className="top">
        <img src={hours} alt="relogio" />
        <span>Horário</span>
      </div>
      <h1 id="periodo">Qual período quer treinar?</h1>
      <div className="turno">
        <div>
          <input  type="radio" name="periodo" id="manha" value="06" onClick = {(e)=> handlePeriodo(e)} />
          <span>Manhã</span>
        </div>
        <span>06:00 às 12:00</span>
      </div>
      <div className="turno">
        <div>
          <input type="radio" name="periodo" value="12"  onChange = {(e)=> handlePeriodo(e)}/>
          <span>Tarde</span>
        </div>
        <span>12:01 às 18:00</span>
      </div>
      <div className="turno">
        <div>
          <input type="radio" name="periodo" value="18"  onChange = {(e)=> handlePeriodo(e)} />
          <span>Noite</span>
        </div>
        <span>18:01 às 23:00</span>
      </div>
      <div>
        <div id="check">
          <div>
            <input type="checkbox" name="checked" id="checked"  onChange={(e)=> setShow(e.target.checked ? true : false)} />
            <span>Exibir unidades fechadas</span>
          </div>
          <span id="resultado">Resultados encontrados: {result}</span>
        </div>
        <div className="button">
          <button onClick = {(e)=> handleSearch(e, per, show)}>Encontrar unidade</button>
          <button onClick={(e)=> handleClear(e)}>Limpar</button>
        </div>
      </div>
    </form>
  );
}
