import React from "react";
import { styled } from "@mui/styles";
import { Button, Stack, Typography, Box } from "@mui/material";

const DivWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#FBFCF6",
  position: "relative",
  maxWidth: "100%",
  maxHeight: "600px",
}));

const ParWrapper = styled(Box)(({ theme }) => ({
  maxHeight: "300px",
  margin : "3rem"
}));

const ButtonDiv = styled("div")(({ theme }) => ({
    paddingBottom : "20px",
    marginLeft :  "3rem",
    marginRight :  "3rem"
}));

const CustomButtonContact = styled(Button)(({ theme }) => ({
  backgroundColor: "#E2C044",
  borderRadius: "0",
  width: "223px",
  "&:hover": {
    backgroundColor: "darkgrey",
  },
}));

const CustomButtonAbout = styled(Button)(({ theme }) => ({
  backgroundColor: "#587B7F",
  borderRadius: "0",
  width: "223px",
  "&:hover": {
    backgroundColor: "darkgrey",
  },
}));

const MobileAbout = () => {
  return (
    <main>
      <DivWrapper component="div">
        <Typography variant="h4" component="div">
          Hakkımızda
        </Typography>
        <ParWrapper>
          <Typography variant="h6" paragraph spacing={2}>
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

export default MobileAbout;