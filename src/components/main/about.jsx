import React from "react";
import { styled } from "@mui/styles";
import { Button, Stack, Typography, Box } from "@mui/material";

const DivWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#FBFCF6",
  position: "relative",
  maxWidth: "100%",
  minHeight: "400px",
  fontFamily: "niagara-solid-regular",
}));

const ParWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "45%",
  maxWidth: "50%",
  maxHeight: "300px",
  marginLeft: "2rem",
  marginRight: "2rem",
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "20%",
  maxWidth: "50%",
  maxHeight: "300px",
  marginLeft: "2rem",
  marginRight: "2rem",
}));

const ButtonDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: "2%",
}));

const CustomButtonContact = styled(Button)(({ theme }) => ({
  backgroundColor: "#E2C044",
  borderRadius: "0",
  width: "223px",
  "&:hover": {
    backgroundColor: "darkgrey",
    color : "black",
  },
}));

const CustomButtonAbout = styled(Button)(({ theme }) => ({
  backgroundColor: "#587B7F",
  borderRadius: "0",
  width: "223px",
  "&:hover": {
    backgroundColor: "darkgrey",
    color : "black",
  },
}));

const About = () => {
  return (
    <main>
      <DivWrapper component="div">
        <HeaderWrapper>
          <Typography className="headerTy" variant="h4" component="div">
            Hakkımızda
          </Typography>
        </HeaderWrapper>

        <ParWrapper>
          <Typography
            className="paragraphTy"
            variant="h6"
            paragraph
            spacing={2}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            laudantium fugiat molestiae quam officia velit reiciendis fugit
            perspiciatis illo, delectus laboriosam facilis fuga praesentium eius
            architecto tempore, accusamus ea deserunt distinctio mollitia eaque
            nisi recusandae consectetur.
          </Typography>
        </ParWrapper>

        <ButtonDiv>
          <Stack spacing={2} direction="row">
            <CustomButtonAbout variant="contained" disableRipple>
              Detaylar
            </CustomButtonAbout>
            <CustomButtonContact variant="contained" disableRipple>
              Bize Ulaşın
            </CustomButtonContact>
          </Stack>
        </ButtonDiv>
      </DivWrapper>
    </main>
  );
};

export default About;
