import React from 'react'

import Summary from './Summary'
import ProCon from './ProCon'

export default ({ reviews }) => {
    const { con, pro, consolidatedOverallRating, totalReviews } = reviews
    return (
        <div>
            <Summary consolidatedOverallRating={consolidatedOverallRating} totalReviews={totalReviews} />
            <ProCon con={con} pro={pro} />
        </div>
    )
}
