import Form from "./partials/Form";
import { FormContainer } from "../styles/_FormsStyles";
import Legenda from "./partials/Legenda";
import { useState, useEffect } from "react";
import EstabCard from "./partials/EstabelecimentoCard";

export default function Main() {
  const [open, setOpen] = useState([]);
  const [filter, setFilter] = useState([]);
  const handleSearch = (e, per, bol) => {
    e.preventDefault();
    const filterEstab = open.filter((estab) => {
        for (let i = 0; i < estab.schedules.length; i++) {
          const a = estab.schedules[i].hour.split(" ");
          if (a[0] !== "Fechada") {
            const openAt = a[0].replace(/[^0-9]/g, "");
            const closeAt = a[2].replace(/[^0-9]/g, "");
            per = parseInt(per);

            if (openAt <= per && closeAt > per + 1) {
              return estab;
            }
          }
        }
      return "";
    });
    console.log(open)
    bol ? setFilter(open) : setFilter(filterEstab);
  };
  


  useEffect(() => {
    fetch(
      "https://test-frontend-developer.s3.amazonaws.com/data/locations.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        const estabs = resp.locations.filter((estab)=> estab.schedules ? estab : '')
        setOpen(estabs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);

  const handleClear = (e) => {
    e.preventDefault()
    setFilter('')
  }

  return (
    <FormContainer>
      <div className="content">
        <h1>Reabertura</h1>
        <h1>Smart fit</h1>
        <hr />
        <p>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
        <Form handleSearch={handleSearch} handleClear = {handleClear} result = {filter.length}/>
        <Legenda />
        <ul>
          {filter &&
            filter.map((estab) => (
              <EstabCard
                title={estab.title}
                address={estab.content}
                mask={estab.mask}
                locker = {estab.locker_room}
                towel = {estab.towel}
                schedules = {estab.schedules}
                opened = {estab.opened}
                fontain= {estab.fountain}
              />
            ))}
        </ul>
      </div>
    </FormContainer>
  );
}
