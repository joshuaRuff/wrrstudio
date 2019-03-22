import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';



const Footer = ({ contact }) => (
  <footer className='footer'>
    <SocialIcon url="https://www.instagram.com/wrrstudio/" />
    <SocialIcon url="https://www.facebook.com/wrrstudio/" />
    <h6 className='copyright'>
      {'© 2019 Wayne Ruff Studio. All right reserved.'}
    </h6>
  </footer>
);


Footer.propTypes = {
  contact: PropTypes.bool,
};

export default Footer;
