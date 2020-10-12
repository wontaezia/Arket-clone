import React from 'react';
import PropTypes from 'prop-types';

export const SliderCategories = ({ text }) => {
  
  return <div className="categoryText">{text}</div>;
};

SliderCategories.propTypes = {
  text: PropTypes.string,
};
