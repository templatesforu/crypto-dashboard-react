import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './coin-stats.module.css'

const CoinStats = (props) => {
  return (
    <div className={styles.container}>
      <img alt={props.image_alt} src={props.image_src} className={styles.image} />
      <div className={styles['card-body']}>
        <span className={` ${projectStyles.heading5} ${styles.coin} `}>{props.coin_name}</span>
        <span className={` ${projectStyles.heading4} ${styles.price} `}>{props.coin_price}</span>
        <div className={styles.stats}>
          <svg viewBox="0 0 585.1428571428571 1024" className={styles.icon}>
            <path d="M585.143 402.286c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857s-18.857-4-25.714-10.857l-256-256c-6.857-6.857-10.857-16-10.857-25.714 0-20 16.571-36.571 36.571-36.571h512c20 0 36.571 16.571 36.571 36.571z"></path>
          </svg>
          <label className={styles.text}>{props.coin_stat}</label>
        </div>
      </div>
    </div>
  )
}

CoinStats.defaultProps = {
  coin_price: '$1.39',
  image_src:
    'https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  coin_name: 'Cardano',
  coin_stat: '-8.64%',
  image_alt: 'image',
}

CoinStats.propTypes = {
  coin_price: PropTypes.string,
  image_src: PropTypes.string,
  coin_name: PropTypes.string,
  coin_stat: PropTypes.string,
  image_alt: PropTypes.string,
}

export default CoinStats
