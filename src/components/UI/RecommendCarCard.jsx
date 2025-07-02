import React from 'react'

const RecommendCarCard = props => {
  const { carName, retweet, imgUrl, rentPrice, percentage } = props.item
  return (
    <div className='recommend__car-card'>
      <div className='recommend__car-top'>
        <h5>
          <span style={{ color: 'black' }}>
            <i class='ri-refresh-line'></i>
          </span>
          {percentage}% Recommended
        </h5>
      </div>

      <div className='recommend__car-img'>
        <img width={500} height={200} src={imgUrl} alt='' />
      </div>
      <div className='recommend__car-bottom'>
        <span style={{ fontWeight: 'bold' }}>{carName}</span>
        <span>${rentPrice}/h</span>
      </div>
    </div>
  )
}

export default RecommendCarCard
