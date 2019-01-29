import React from 'react';

import { ChevronContainer, ChevronFontAwesome } from '../../style';

const Chevron = ({ direction, onClick }) => (
    <ChevronContainer data-cy={`chevron-${direction}`}>
        <ChevronFontAwesome
            name={`chevron-${direction}`}
            size={'lg'}
            onClick={onClick}
        />
    </ChevronContainer>
)

export default Chevron