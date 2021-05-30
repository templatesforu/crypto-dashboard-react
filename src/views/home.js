import React from 'react'

import Helmet from 'react-helmet'

import Navbar from '../components/navbar'
import NewsSmallCard from '../components/news-small-card'
import CoinStats from '../components/coin-stats'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>crypto-dashboard</title>
        <meta property="og:title" content="crypto-dashboard" />
      </Helmet>
      <div className={styles.container1}>
        <Navbar></Navbar>
        <div className={styles.row}>
          <div className={styles.container2}>
            <span className={` ${projectStyles.heading2} ${styles.text} `}>
              Today&apos;s Cryptocurrency Prices by Market Cap
            </span>
            <div className={styles.container3}>
              <span className={` ${projectStyles.heading5} ${styles.text1} `}>
                The Global crypto market cap is #1.55T.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${projectStyles.heading5} ${projectStyles.thqLink} ${styles['read-more']} `}
              >
                Read more
              </a>
            </div>
          </div>
          <div className={styles.container4}>
            <NewsSmallCard image_src="https://images.unsplash.com/photo-1621501103258-3e135c8c1fda?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"></NewsSmallCard>
            <NewsSmallCard></NewsSmallCard>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles['col-8']}>
            <iframe
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_56c2a&amp;symbol=BTCUSDT&amp;interval=D&amp;hidesidetoolbar=0&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=F1F3F6&amp;studies=%5B%5D&amp;hideideas=1&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=coinmarketcap.com&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=BTCUSDT"
              className={styles.chart}
            ></iframe>
          </div>
          <div className={styles['col-4']}>
            <CoinStats
              coin_name="Ethereum"
              image_src="https://images.unsplash.com/photo-1621501103258-3e135c8c1fda?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></CoinStats>
            <CoinStats></CoinStats>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
