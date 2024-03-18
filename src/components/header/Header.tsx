import logo from "../../img/logo.svg";
import user from "../../img/user.png";
import SelectHeader from "../select-header/SelectHeader";

function Header() {
  const menu = [
    "Акции",
    "Меню",
    "Калькулятор калорий",
    "О компании",
    "Доставка и оплата",
    "Наш блог",
  ];
  return (
    <div className="container">
      <div className="header__container flex">
        <a href="#">
          <img src={logo} alt="Логотип компании" />
        </a>
        <nav className="nav">
          <ul className="nav__list flex">
            {menu.map((link, i) => (
              <li key={i} className="nav__item">
                <a href="#" className="nav__link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SelectHeader />
        <button className="button">Заказать</button>
        <div className="user flex">
          <img src={user} alt="Иконка пользователя" />
        </div>
      </div>
    </div>
  );
}

export default Header;
