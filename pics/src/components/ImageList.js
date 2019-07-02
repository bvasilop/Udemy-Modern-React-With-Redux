/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const ImageList = props => {
  const images = props.images.map(image => (
    <img alt={image.description} key={image.id} src={image.urls.regular} />
  ));

  return <div>{images}</div>;
};

export default ImageList;
