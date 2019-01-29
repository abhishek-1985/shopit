import React from 'react'
import { PromotionsContainer, PromoLabel, PromotionText } from '../style';

export default ({ promotions }) => (
    <PromotionsContainer>
        {promotions.map(({ Description }, index) => {
            const { shortDescription } = Description[0]
            return (
               <div key={index}>
                <PromoLabel name="tag" />
                <PromotionText>{shortDescription}</PromotionText>
               </div> 
            )
        })}
    </PromotionsContainer>
)
