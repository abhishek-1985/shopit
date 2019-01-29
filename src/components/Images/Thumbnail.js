
import React from 'react';
import { ThumbnailImage } from '../../style';

const Thumbnail = ({
    imageSrc,
    isSelected,
    onClick,
    dataCy
}) => (
        <ThumbnailImage isSelected={isSelected} onClick={onClick}>
            <img data-cy={dataCy} width="100%" src={imageSrc} alt={imageSrc}/>
        </ThumbnailImage>
    )

export default Thumbnail