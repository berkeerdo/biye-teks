import React from "react";
import { useMediaQuery } from "react-responsive";
import ContactMain from "./contactMain";
import ContactMobileMain from "./contactMobileMain";

const Contact = () => {

    const isMobile = useMediaQuery({query : "(max-width: 1200px)"});

  return (
    <>
      {!isMobile && <ContactMain />}
      {isMobile && <ContactMobileMain />}
    </>
  );
};

export default Contact;
