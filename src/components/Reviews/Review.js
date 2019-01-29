import React from 'react'
import { ProConText, ReviewTitle, ReviewFooter, ReviewAuthor } from '../../style'
import StarRating from './StarRating'

const formatDateString = dateString => {
    const [month, date, year] = dateString.split(' ')
    return `${month} ${date}, ${year}`
}

const Review = ({ overallRating, title, review, screenName, datePosted }) => (
    <div>
        <StarRating numberOfStars={overallRating} />
        <ReviewTitle>{title}</ReviewTitle>
        <ProConText>{review}</ProConText>
        <ReviewFooter>
            <ReviewAuthor href="#">{screenName}</ReviewAuthor>
            <span>{` ${formatDateString(datePosted)}`}</span>
        </ReviewFooter>
    </div>
)

export default Review


