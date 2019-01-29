import React from 'react';
import { QuantityButton, QuantityNumber } from '../../style';

const QuantityControl = ({ decrement, increment, quantity }) => (
    <div style={{ display: 'flex' }}>
        <QuantityButton
            data-cy="decrement-quantity"
            pos="left"
            onClick={decrement}
            className="decrement-quantity"
        >
            -
         </QuantityButton>
        <QuantityNumber data-cy="item-quantity">{quantity}</QuantityNumber>
        <QuantityButton
            data-cy="increment-quantity"
            pos="right"
            onClick={increment}
            className="increment-quantity"
        >
            +
        </QuantityButton>
    </div>
)

export default QuantityControl