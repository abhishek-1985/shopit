import React from 'react'

import { SummaryContainer, TotalReviewCount } from '../../style';

import StarRating from './StarRating'

export default ({ consolidatedOverallRating, totalReviews }) => (
    <SummaryContainer>
        <span>
            <StarRating numberOfStars={consolidatedOverallRating} />
            <TotalReviewCount> overall</TotalReviewCount>
        </span>
        <span>
            <TotalReviewCount>
                {totalReviews > 1 && `view all ${totalReviews} reviews`}
            </TotalReviewCount>
        </span>
    </SummaryContainer>
)
