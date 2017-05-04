import React from 'react';
import PropTypes from 'prop-types';

const pillStyle = {
  display: 'block',
  float: 'left',
  fontSize: '14px',
  lineHeight: '20px',
  listStyleType: 'none',
  marginLeft: '2px',
  position: 'relative',
};
const linkStyle = {
  border: '1px solid rgb(200, 200, 200)',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  boxSizing: 'borderBox',
  color: 'rgb(51, 122, 183)',
  cursor: 'auto',
  display: 'block',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sansSerif',
  fontSize: '14px',
  lineHeight: '20px',
  listStyleImage: 'none',
  listStylePosition: 'outside',
  listStyleType: 'none',
  paddingBottom: '10px',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '10px',
  position: 'relative',
  textAlign: 'left',
  textDecorationColor: 'rgb(51, 122, 183)',
  textDecorationLine: 'none',
  textDecorationStyle: 'solid',
  textSizeAdjust: '100%',
};

const Pill = ({ children, onClick }) => (
  <li style={pillStyle}>
    <a style={linkStyle} href="#" onClick={onClick}>
      {children}
    </a>
  </li>
);

Pill.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Pill;
