import React from 'react'
import { Rating } from 'react-simple-star-rating'

const Ratings:React.FC<{rating:number}>= ({rating}) => {
  return (
    <Rating size={20} fillColor="#ff0000" ratingValue={rating * 20} readonly/>
  )
}

export default Ratings