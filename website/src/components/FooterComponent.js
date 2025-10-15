import React from 'react';
import ListView from "./ListView";
const copyright = `Copyright © ${new Date().getFullYear()}`;


const FooterComponent = ({ footerData }) => {
    return (
        <footer className="footer-component">
            <div className="container container-fluid">
                <div className="footer_copy" display>
                    <a href="https://imply.io/#"><img src="/img/logo.png" /></a>
                    <p>Imply, the real-time analytics platform built from Apache Druid, is a fast, easy way to provide the best experience possible for your analytics apps.</p>
                    <a href="https://imply.io/#">Read more about Apache Druid</a>
                </div>
            </div>
            <div className="container container-fluid">
                <div className="socials-container">
                    <a href="https://www.linkedin.com/company/imply/" target="_blank"><img src="/img/linkedin.png" /></a>
                    <a href="https://twitter.com/implydata" target="_blank"><img src="/img/twitter.png" /></a>
                    <a href="https://www.youtube.com/c/Implydata" target="_blank"><img src="/img/youtube.png" /></a>
                    <a href="https://github.com/implydata/learn-druid" target="_blank"><img src="/img/github.png" /></a>
                    <a href="https://druid.apache.org/community/join-slack?v=1" target="_blank"><img src="/img/slack-social.png" /></a>
                </div>
            </div>

            <div id="copyright-widget" className="container container-fluid" role="complementary">
                <div><p>{copyright}. All rights reserved. Imply, the Imply logo, Imply Lumi, and Polaris are either trademarks or registered trademarks of Imply Data, Inc. in the U.S. and/or other countries. Apache Kafka, Apache Druid, Druid and the Druid logo are either registered trademarks or trademarks of the Apache Software Foundation in the U.S. and/or other countries. All other marks and logos are the property of their respective owners.</p>
                    <ul>
                        <li><a href="https://imply.io/privacy/">Privacy</a></li>
                        <li><a href="https://imply.io/trust-center/">Trust Center</a></li>
                        <li><a href="https://imply.io/imply-cookie-policy/">Cookie Policy</a></li>
                        <li><a href="https://imply.io/legal/">Legal</a></li>
                    </ul>
                </div>
            </div>
        </footer>
      );
};

export default FooterComponent;
