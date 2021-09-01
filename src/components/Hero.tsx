import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
import useMediaQuery from '@material-ui/core/useMediaQuery';
/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Hero = () => {
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <Box
      component="section"
      css={css`
        position: relative;
        & video {
          object-fit: cover;
        }
      `}
    >
      <ReactPlayer
        url={`${window.location.href}/hero/bright_living_room_loopable.mp4`}
        playing
        loop
        muted
        width="100%"
        height={matches ? "40vw": "60vw"}
      />
      <Box
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
        `}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "#fff"
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ pb: 4, textShadow: "1px 4px 1px rgba(0, 0, 0, 0.8)" }}
            textAlign="center"
          >
            PROFESSIONELLE & ZUVERLÄSSIGE <br />
            GEBÄUDE-, GRUND- UND BAUREINIGUNG
          </Typography>
          <Button color="primary" variant="contained" size="large">
            Jetzt Angebot einholen
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
