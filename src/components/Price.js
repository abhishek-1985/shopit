import React from 'react'
import { PriceContainer, PriceValue, PriceQualifier } from '../style';

export default ({ price, qualifier }) => (
  <PriceContainer>
    <PriceValue>{price}</PriceValue>
    <PriceQualifier>{qualifier}</PriceQualifier>
  </PriceContainer>
)
