import React from 'react'
import { RedStar, GreyStar } from '../../style'

export default ({ maxStars = 5, numberOfStars }) => {
  
  const RedStarsArray = Array(numberOfStars).fill('');
  const GreyStarsArray = maxStars - numberOfStars ? Array(maxStars - numberOfStars).fill('') : [];

  return (
    <span>
      <span>
        {RedStarsArray
          .map((x, i) => <RedStar key={i} name="star" />)}
      </span>
      {numberOfStars < maxStars && (
        <span>
          {GreyStarsArray
            .map((x, i) => <GreyStar key={i} name="star" />)}
        </span>
      )}
    </span>
  )
}

