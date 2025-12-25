import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Fundamentals of Physical AI & Humanoid Robotics</h1>
          <p>A Beginner's Guide to Intelligent Robots</p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--primary button--lg')} to="/docs/intro">
              Get Started
            </Link>
            <Link className={clsx('button button--secondary button--lg')} to="/docs/intro">
              View Chapters
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/img/Robot-cover.jpg" alt="Humanoid Robot" />
        </div>
      </div>
    </main>
  );
}