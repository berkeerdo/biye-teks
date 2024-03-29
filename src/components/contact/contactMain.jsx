import React from "react";
import { styled } from "@mui/styles";
import { Box, Container, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import MapImg from "../../assets/Map.png";

const MainContainer = styled(Container)(({ theme }) => ({
  minHeight: "82.3vh",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
}));

const ContactContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  width: "1200px",
  borderRadius: "10px",
  overflow: "hidden",
  padding: "10px",
  marginBottom: "2rem",
  backdropFilter: "blur(15px)",
  border: "1px solid rgba(255,255,255, .2)",
  WebkitBoxShadow: "0px 10px 33px 0px rgba(0,0,0,0.75)",
  MozBoxShadow: "0px 10px 33px 0px rgba(0,0,0,0.75)",
  boxShadow: "0px 10px 33px 0px rgba(0,0,0,0.75)",
}));

const ContactTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  marginBottom: "1rem",
  marginTop: "1rem",
  fontSize: "3rem",
  textShadow: "0px 1px 3px rgba(0,0,0,0.6)",
}));

const ContactInfoTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "2rem",
  fontWeight: "500",
  // marginTop: "0",
  margin: "0",
}));

const ContactInfoParTypography = styled(Typography)(({ thme }) => ({
  fontSize: "1.2rem",
  color: "rgba(255,255,255,.7)",
  fontWeight: "300",
  marginBottom: "2rem",
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#587B7F",
  flex: "0 1 80%",
  borderRadius: "10px",
  padding: "80px",
  color: "white",
  overflow: "hidden",
}));

const ContactMap = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: "1 1 50%",
  borderRadius: "10px",
  padding: "20px",
  marginLeft: "10px",
  overflow: "hidden",
  WebkitBoxShadow: "0px 10px 33px 0px rgba(0,0,0,0.75)",
  MozBoxShadow: "0px 10px 33px 0px rgba(0,0,0,0.75)",
  boxShadow: "0px 10px 33px 0px rgba(0,0,0,0.75)",
}));

const IconText = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignContent: "center",
}));

const Icon = styled("i")(({ theme }) => ({
  marginRight: "2rem",
  flex: "0 0 30px",
  color: "#1E2019",
  fontSize: "1.6rem",
}));

const SpanTypography = styled(Typography)(({ thme }) => ({
  fontSize: "1.2rem",
  fontWeight: "300",
  marginTop: "6px",
}));

const CustomMap = styled("img")(({ theme }) => ({
  opacity: "1",
  display: "block",
  transition: ".5s ease",
  backfaceVisibility: "hidden",
  height: "auto",
  width: "100%",
  borderRadius: "10%",
}));

const MapMiddle = styled("div")({
  transition: ".5s ease",
  opacity: "0",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  textAlign: "center",
});

const MapLink = styled(Link)({
  backgroundColor: "#E2C044",
  color: "white",
  fontSize: "16px",
  padding : "16px 5px",
  borderRadius : "2px",

  "&:hover" : {
    color : "black",
  }

});

const ContactMain = () => {
  return (
    <>
      <MainContainer className="main-container">
        <ContactTypography variant="h1">İletişim</ContactTypography>
        <ContactContainer component="div">
          <ContactInfo component="div">
            <ContactInfoTypography variant="h4" color="white">
              İletişim Bilgileri
            </ContactInfoTypography>
            <ContactInfoParTypography paragraph color="white">
              Biye Teks
            </ContactInfoParTypography>
            <IconText>
              <Icon>
                <FontAwesomeIcon icon={faPhone} />
              </Icon>
              <SpanTypography component="span">
                Telefon(Gsm) : (0542)186-41-42
              </SpanTypography>
            </IconText>
            <IconText>
              <Icon>
                <FontAwesomeIcon icon={faEnvelope} />
              </Icon>
              <SpanTypography component="span">
                Email : biyeteks@outlook.com.tr
              </SpanTypography>
            </IconText>
            <IconText>
              <Icon>
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  style={{ marginRight: "-0.3rem" }}
                />
              </Icon>
              <SpanTypography component="span">
                Adres : 19 Mayıs Mah. Miralay Kazımbey Sk. No: 19 Erak Apt. D:1
                Giriş Kat Osmanbey - Şişli/İstanbul
              </SpanTypography>
            </IconText>
          </ContactInfo>
          <ContactMap className="container">
            <CustomMap className="image" src={MapImg} alt = "Contact Map"/>
            <MapMiddle className="middle">
              <MapLink
                href="https://www.google.com/maps/place/Seyyid+Ömer,+Miralay+Hasan+Kazımbey+Sk.+No:19,+34098+Fatih%2Fİstanbul/@41.008881,28.9293438,20z/data=!4m5!3m4!1s0x14caba4aa1c1aa71:0x9a5f1e1450ce3fd2!8m2!3d41.0089208!4d28.9292801"
                underline="none"
              >
                Haritalarda Görünteleyin
              </MapLink>
            </MapMiddle>
          </ContactMap>
        </ContactContainer>
      </MainContainer>
    </>
  );
};

export default ContactMain;
