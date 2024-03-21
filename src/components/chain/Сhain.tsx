import chainBascet from "../../img/chain-basket.svg";
import chainProduct from "../../img/chain-product.svg";
import chainDelivery from "../../img/chain-delivery.svg";
import chainResult from "../../img/chain-result.svg";

function Сhain() {

    return (
        <div className="container">
            <div className="chain__container flex">
                <div className="chain">
                    <img className="chain__img" src={chainBascet} alt="Картинка дейставия" />
                    <h1 className="chain__ttle">Вы делаете заказ</h1>
                    <p className="chain__descr">Выбираете подходящий под ваши задачи рацион</p>
                </div>
                <div className="chain">
                    <img className="chain__img" src={chainProduct} alt="Картинка дейставия" />
                    <h1 className="chain__ttle">Мы готовим</h1>
                    <p className="chain__descr">Из самых свежих овощей и продуктов, специально для вас!</p>
                </div>
                <div className="chain">
                    <img className="chain__img" src={chainDelivery} alt="Картинка дейставия" />
                    <h1 className="chain__ttle">Доставляем домой</h1>
                    <p className="chain__descr">В удобный для вас день к обозначенному времени!</p>
                </div>
                <div className="chain">
                    <img className="chain__img" src={chainResult} alt="Картинка дейставия" />
                    <h1 className="chain__ttle">Достигаете результат!</h1>
                    <p className="chain__descr">Все уже готово, только откройте бокс с едой!</p>
                </div>
            </div>
        </div>
    )
}

export default Сhain;