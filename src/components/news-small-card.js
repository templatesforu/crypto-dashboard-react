import React from 'react'

import PropTypes from 'prop-types'

import styles from './news-small-card.module.css'

const NewsSmallCard = (props) => {
  return (
    <div className={styles.container}>
      <img alt={props.image_alt} src={props.image_src} className={styles.image} />
      <div className={styles['card-body']}>
        <span className={styles.category}>{props.smoll_text}</span>
        <span className={styles.title}>{props.text}</span>
      </div>
    </div>
  )
}

NewsSmallCard.defaultProps = {
  text: "CoinDesk TV's Coverage of Consensus 2021",
  image_src:
    'https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
  smoll_text: 'Consensus 2021',
}

NewsSmallCard.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  smoll_text: PropTypes.string,
}

export default NewsSmallCard
