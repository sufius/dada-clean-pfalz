import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "./dcpCarousel.css";

// install Swiper modules
SwiperCore.use([Autoplay, Parallax, Pagination, Navigation]);

const DcpCarousel = () => {
  const theme = useTheme();
  const matchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const matchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-navigation-color": "inherit",
          // @ts-ignore
          "--swiper-pagination-color": "inherit"
        }}
        speed={600}
        loop={false}
        parallax={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          renderBullet: function(index, className) {
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
            backgroundImage: "url(/background_testimonials.jpg)"
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <Box
            className="content"
            sx={{ maxWidth: matchSmall ? 200 : matchMedium ? 300 : 400 }}
          >
            <div data-swiper-parallax="-300">
              <Typography
                variant="h4"
                component="h4"
                paragraph
                sx={{ fontSize: matchSmall ? 20 : matchMedium ? 26 : 34 }}
              >
                GRUNDREINIGUNG
              </Typography>
            </div>
            <div data-swiper-parallax="-100">
              <Typography sx={{ fontSize: matchSmall ? 14 : 16 }} paragraph>
                Ich war mit der Qualität der geleisteten Arbeit sehr zufrieden!
                Die Arbeiten wurden auf höchstem Niveau und innerhalb der
                vereinbarten Zeit erledigt. Ich möchte euch meinen herzlichsten
                Dank aussprechen, nicht nur für die hervorragende Arbeit,
                sondern auch für die angenehme Arbeitsatmosphäre!
              </Typography>
            </div>
            <div data-swiper-parallax="-200">
              <Typography
                variant="h5"
                component="h5"
                align="right"
                sx={{ fontSize: matchSmall ? 16 : matchMedium ? 20 : 26 }}
              >
                - Maria S.
              </Typography>
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="content"
            sx={{ maxWidth: matchSmall ? 200 : matchMedium ? 300 : 400 }}
          >
            <div data-swiper-parallax="-300">
              <Typography
                variant="h4"
                component="h4"
                paragraph
                sx={{ fontSize: matchSmall ? 20 : matchMedium ? 26 : 34 }}
              >
                WOHNHAUSREINIGUNG
              </Typography>
            </div>
            <div data-swiper-parallax="-100">
              <Typography sx={{ fontSize: matchSmall ? 14 : 16 }} paragraph>
                Ich habe eine Reinigung der Wohnung und das putzen der Fenster
                bestellt. Sie haben alles mit hoher Qualität erledigt. Alles
                glänzt blitzeblank. Ich bin sehr zufrieden und werde diesen
                Service auch in Zukunft in Anspruch nehmen. Nochmals vielen Dank
                euch.
              </Typography>
            </div>
            <div data-swiper-parallax="-200">
              <Typography
                variant="h5"
                component="h5"
                align="right"
                sx={{ fontSize: matchSmall ? 16 : matchMedium ? 20 : 26 }}
              >
                - Niklas C.
              </Typography>
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="content"
            sx={{ maxWidth: matchSmall ? 200 : matchMedium ? 300 : 400 }}
          >
            <div data-swiper-parallax="-300">
              <Typography
                variant="h4"
                component="h4"
                paragraph
                sx={{ fontSize: matchSmall ? 20 : matchMedium ? 26 : 34 }}
              >
                GEBÄUDEREINIGUNG
              </Typography>
            </div>
            <div data-swiper-parallax="-100">
              <Typography sx={{ fontSize: matchSmall ? 14 : 16 }} paragraph>
                Ich bestelle zum dritten Mal eine Generalreinigung der Wohnung.
                Die erbrachte Leistung war einwandfrei und der Preis ist
                günstiger als bei den meisten anderen Reinigungsfirmen, die ich
                kenne. Ich empfehle diese Firma jedem, der eine qualitativ
                hochwertige und schnelle Reinigung benötigt!!!
              </Typography>
            </div>
            <div data-swiper-parallax="-200">
              <Typography
                variant="h5"
                component="h5"
                align="right"
                sx={{ fontSize: matchSmall ? 16 : matchMedium ? 20 : 26 }}
              >
                - Paul G.
              </Typography>
            </div>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DcpCarousel;
