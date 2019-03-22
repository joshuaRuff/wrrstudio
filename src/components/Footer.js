import React from 'react';
import PropTypes from 'prop-types';


const Footer = ({ contact }) => (
  <footer className='footer'>
    <h6 className='copyright'>
      {'© 2019 Wayne Ruff Studio. All right reserved.'}
    </h6>
  </footer>
);


Footer.propTypes = {
  contact: PropTypes.bool,
};

export default Footer;
