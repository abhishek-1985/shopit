import React from 'react'
import {HighlightsHeader, HighlightsList, HighlightsItem} from '../style'

const Highlights =  ({ highlights }) => (
  <div>
    <HighlightsHeader>product highlights</HighlightsHeader>
    <HighlightsList>
      {highlights.map(highlight => (
        <HighlightsItem key={highlight}>{highlight}</HighlightsItem>
      ))}
    </HighlightsList>
  </div>
)
export default Highlights