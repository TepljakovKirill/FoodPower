import { Navigation, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import questionImg_1 from '../../img/questionImg-1.png';
import questionImg_2 from '../../img/questionImg-2.png';
import questionImg_3 from '../../img/questionImg-3.png';
import questionImg_4 from '../../img/questionImg-4.png';

import 'swiper/css';
import 'swiper/css/navigation';

function QuestionSlider() {
    return (
        <div className="container">
            <div className="slider__question">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={32}
                    slidesPerView={5}
                    centeredSlides={true}
                    // clickable={true}
                    autoplay={false}
                    loop={true}
                    navigation
                >
                    <SwiperSlide>
                        <div className="slide__wrap">
                            <p className='slide__question'>Акции<br />Food<br />Power</p>
                            <img src={questionImg_1} alt="Фон слада" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="slide__wrap flex">
                        <div className="slide__wrap">
                            <p className='slide__question'>Можно пропустить день доставки?</p>
                            <img src={questionImg_2} alt="Фон слада" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="slide__wrap flex">
                        <div className="slide__wrap">
                            <p className='slide__question'>Как долго хранится еда?</p>
                            <img src={questionImg_3} alt="Фон слада" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="slide__wrap flex">
                        <div className="slide__wrap">
                            <p className='slide__question'>Повторяются ли блюда?</p>
                            <img src={questionImg_4} alt="Фон слада" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="slide__wrap flex">
                        <div className="slide__wrap">
                            <p className='slide__question'>Бесплатная доставка</p>
                            <img src={questionImg_2} alt="Фон слада" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="slide__wrap flex">
                        <div className="slide__wrap">
                            <p className='slide__question'>Как долго хранится еда?</p>
                            <img src={questionImg_3} alt="Фон слада" />
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

    )
}

export default QuestionSlider;