import { useState } from "react";
import arrow from "../../img/arrow.png";


function City() {
  const city = ["Ярославль", "Иваново", "Шуя"];

  const [openListCity, setOpenListCity] = useState(false);

  function clickOpenListCity() {
    setOpenListCity(!openListCity);
  }
  return (
    <div className="city flex">
      <div className="city__choice flex">
        <p>Ярославль</p>
        <img onClick={() => clickOpenListCity()} src={arrow} alt="Стрелка открытия списка городов" />
      </div>
      {openListCity ?
        <ul className="city__list flex">
          {city.map((city, index) => (
            <li key={index} className="city__item">{city}</li>
          ))}
        </ul>
        :
        ""}

    </div>
  );
}

export default City;
