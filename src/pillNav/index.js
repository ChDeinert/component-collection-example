import React from 'react';
import PropTypes from 'prop-types';

const navStyles = {
  display: 'block',
  fontSize: '14px',
  lineHeight: '20px',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const PillNav = ({ children }) =>
  <ul style={navStyles}>
    {children}
  </ul>;

PillNav.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PillNav;
