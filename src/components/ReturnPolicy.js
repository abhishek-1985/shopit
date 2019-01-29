import React from 'react'
import { ReturnPolicyContainer, ReturnPolicyLabel, ReturnPolicyText } from '../style';
import ReactHtmlParser from 'react-html-parser';

const ReturnPolicy = ({text}) => (
      <ReturnPolicyContainer>
    <ReturnPolicyLabel>returns</ReturnPolicyLabel>
        <ReturnPolicyText>
          {ReactHtmlParser(text)}
        </ReturnPolicyText>
      </ReturnPolicyContainer>
    )
  
export default ReturnPolicy
