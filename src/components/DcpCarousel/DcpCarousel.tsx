import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Parallax, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "./dcpCarousel.css";

// install Swiper modules
SwiperCore.use([Autoplay, Keyboard, Parallax, Pagination, Navigation]);

const DcpCarousel = () => {
  return (
    <>
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-navigation-color": "#fff",
          // @ts-ignore
          "--swiper-pagination-color": "#fff"
        }}
        speed={600}
        loop={true}
        parallax={true}
        autoplay={{
         "delay": 6000,
         "disableOnInteraction": false
        }}
        keyboard={{
          "enabled": true
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          }
        }}
        navigation={true}
        className="dcpCarousel"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)"
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            GRUNDREINIGUNG
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Maria S.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Ich war mit der Qualität der geleisteten Arbeit sehr zufrieden! Die Arbeiten wurden auf höchstem Niveau und innerhalb der vereinbarten Zeit erledigt. Ich möchte euch meinen herzlichsten Dank aussprechen, nicht nur für die hervorragende Arbeit, sondern auch für die angenehme Arbeitsatmosphäre!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            WOHNHAUSREINIGUNG
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Niklas C.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Ich habe eine Reinigung der Wohnung und das putzen der Fenster bestellt. Sie haben alles mit hoher Qualität erledigt. Alles glänzt blitzeblank. Ich bin sehr zufrieden und werde diesen Service auch in Zukunft in Anspruch nehmen. Nochmals vielen Dank euch.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            GEBÄUDEREINIGUNG
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Paul G.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Ich bestelle zum dritten Mal eine Generalreinigung der Wohnung. Die erbrachte Leistung war einwandfrei und der Preis ist günstiger als bei den meisten anderen Reinigungsfirmen, die ich kenne. Ich empfehle diese Firma jedem, der eine qualitativ hochwertige und schnelle Reinigung benötigt!!!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DcpCarousel;
