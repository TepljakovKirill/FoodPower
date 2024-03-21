function Target() {
    return (
        <>
            <h1 className="target__title-block">Твоя цель</h1>
            <div className="target__container flex">
                <div className="target target-1 flex">
                    <div className="target__descr-block">
                        <h1 className="target__title">Похудеть</h1>
                        <p className="target__descr">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="target__button flex">
                        <button className="target__button-calories">1000 ккал</button>
                        <button className="target__button-calories">1200 ккал</button>
                    </div>
                </div>

                <div className="target target-2 flex">
                    <div className="target__descr-block tekst-white">
                        <h1 className="target__title">Быть в форме</h1>
                        <p className="target__descr">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="target__button flex">
                        <button className="target__button-calories button-white">2500 ккал</button>
                    </div>
                </div>

                <div className="target target-3 flex">
                    <div className="target__descr-block">
                        <h1 className="target__title">Не хочу готовить</h1>
                        <p className="target__descr">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="target__button flex">
                        <button className="target__button-calories">1500 ккал</button>
                        <button className="target__button-calories">2000 ккал</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Target;