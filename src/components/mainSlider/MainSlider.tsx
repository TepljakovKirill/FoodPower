import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slideImg from '../../img/slide-img.png';

import 'swiper/css';
import 'swiper/css/navigation';

function MainSlider() {
    return (
        <div className="container">
            <div className="slider">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    autoplay={false}
                    loop={true}
                    navigation
                >
                    <SwiperSlide>
                        <div className="slide__container flex">
                            <div className="slide__descr">
                                <h1 className="slide__title">Доставка готовой еды по подписке</h1>
                                <p className="slide__text">Доставка готовой еды по подпискеДоставка готовой еды по подпискеДоставка готовой еды по подписке</p>
                                <button className="button">Попробовать</button>
                            </div>
                            <div className="slide__bunner">
                                <img src={slideImg} alt="Фото слада" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="slide__container flex">
                        2
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="slide__container flex">
                        3
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="slide__container flex">
                        4
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

    )
}

export default MainSlider;