import React from "react";
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { Autoplay, EffectCreative, Pagination, Navigation } from 'swiper/modules';
import carrossel1 from '../assets/carrossel1.png';  // Adjust the path as necessary
import carrossel2 from '../assets/carrossel2.png';  // Adjust the path as necessary
import carrossel3 from '../assets/carrossel3.png';  // Adjust the path as necessary
import carrossel4 from '../assets/carrossel4.png';  // Adjust the path as necessary
import carrossel5 from '../assets/carrossel5.png';  // Adjust the path as necessary
import carrossel6 from '../assets/carrossel6.png';  // Adjust the path as necessary
import carrossel7 from '../assets/carrossel7.png';  // Adjust the path as necessary
import carrossel8 from '../assets/carrossel8.png';  // Adjust the path as necessary

const Home = ({ HomeComponentRef, scrollToRef, ProductsComponentRef }) => {
    return (
        <div className="home" ref={HomeComponentRef}>
            <div className="homeContent">
                <div className="welcomeMessage">Explore a RR Stetic</div>
                <div className="descriptionMessage">Onde cada detalhe do seu carro é cuidadosamente aprimorado para perfeição. Aqui, valorizamos a estética e a funcionalidade, garantindo que seu veículo sempre saia do nosso estabelecimento brilhando como novo.</div>
                <div className="homeButton" onClick={() => scrollToRef(ProductsComponentRef)}>Descubra o que podemos oferecer</div>
            </div>
            <div className="homeImg">
                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        // dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[EffectCreative, Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="swiperImg" src={carrossel1}></img></SwiperSlide>
                    <SwiperSlide><img className="swiperImg" src={carrossel2}></img></SwiperSlide>
                    <SwiperSlide><img className="swiperImg" src={carrossel3}></img></SwiperSlide>
                    <SwiperSlide><img className="swiperImg" src={carrossel4}></img></SwiperSlide>
                    <SwiperSlide><img className="swiperImg" src={carrossel5}></img></SwiperSlide>
                    <SwiperSlide><img className="swiperImg" src={carrossel6}></img></SwiperSlide>
                    <SwiperSlide><img className="swiperImg" src={carrossel7}></img></SwiperSlide>
                    <SwiperSlide><img className="swiperImg" src={carrossel8}></img></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Home