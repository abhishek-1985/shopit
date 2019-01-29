import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { PrimaryImage } from '../../style';

export default ({ imageSrc }) => (
  <PrimaryImage data-cy="primary-image">
    <ReactImageMagnify {...{
      smallImage: {
        alt: `${imageSrc}`,
        isFluidWidth: true,
        src: `${imageSrc}`,
      },
      largeImage: {
        src: `${imageSrc}`,
        width: 1200,
        height: 1200
      },
      enlargedImagePosition: 'over'
    }} />
  </PrimaryImage>
)
