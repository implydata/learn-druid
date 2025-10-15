import React from 'react';
import Footer from '@theme-original/Footer';
import FooterComponent from '../../components/FooterComponent';
import footer from "../../../static/data/footer.json";

export default function FooterWrapper(props) {
  const footerData = footer;

  return (
    <>
      <FooterComponent footerData={footerData} />
      {/* <Footer {...props} /> */}
    </>
  );
}
