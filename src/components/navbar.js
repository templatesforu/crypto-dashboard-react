import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import projectStyles from '../style.module.css'
import styles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img alt={props.logoimage_alt} src={props.logoimage_src} className={styles.logoimage} />
        <span className={styles.logotext}>{props.logotext}</span>
      </div>
      <div className={styles.menulist}>
        <a
          href={props.link_c}
          target="_blank"
          rel="noreferrer noopener"
          className={` ${projectStyles.thqLink} ${styles.textc} `}
        >
          {props.text_c}
        </a>
        <a
          href={props.link_n}
          target="_blank"
          rel="noreferrer noopener"
          className={` ${projectStyles.thqLink} ${styles.textn} `}
        >
          {props.text_n}
        </a>
        <a
          href={props.link_g}
          target="_blank"
          rel="noreferrer noopener"
          className={` ${projectStyles.thqLink} ${styles.textg} `}
        >
          {props.text_g}
        </a>
      </div>
      <div className={styles.account}>
        <Button button="Sign Up"></Button>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  logotext: 'CoinCap',
  logoimage_src:
    'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  text_n: 'News',
  link_n: 'news.com',
  logoimage_alt: 'image',
  link_g: 'GitHub.com',
  text_c: 'Cryptocurrencies',
  text_g: 'Github',
  link_c: 'crypto.com',
}

Navbar.propTypes = {
  logotext: PropTypes.string,
  logoimage_src: PropTypes.string,
  text_n: PropTypes.string,
  link_n: PropTypes.string,
  logoimage_alt: PropTypes.string,
  link_g: PropTypes.string,
  text_c: PropTypes.string,
  text_g: PropTypes.string,
  link_c: PropTypes.string,
}

export default Navbar
