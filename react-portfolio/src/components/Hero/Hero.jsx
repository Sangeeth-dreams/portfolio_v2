import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Sangeeth
            </h1>
            <p className={styles.description}>
            I'm a full-stack developer with 6 months experience in full-stack web development. Reach out if you'd like to hire me!
            </p>
            <a href='mailto:sriharisangeeth513@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt='My Pic'></img>
        <div className={styles.topblur}/>
        <div className={styles.bottomblur}/>
    </section>
  )
}

export default Hero