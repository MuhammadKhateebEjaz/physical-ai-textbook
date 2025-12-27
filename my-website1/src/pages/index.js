import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

// Aapka Chatbot component
import Chatbot from '@site/src/components/Chatbot';

export default function Home() {
  return (
    <Layout title="Home" description="Fundamentals of Physical AI & Humanoid Robotics">
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Fundamentals of Physical AI & Humanoid Robotics</h1>
            <p>A Beginner's Guide to Intelligent Robots</p>
            <div className={styles.buttons}>
              <Link 
                className={clsx('button button--primary button--lg', styles.getStartedBtn)} 
                to="/docs/intro">
                Get Started
              </Link>
              <Link 
                className={clsx('button button--secondary button--lg')} 
                to="/docs/chapter-01">
                View Chapters
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="img/Physical Ai & Humanoid Robotics poster.png" alt="Humanoid Robot" />
          </div>
        </div>
      </main>
        <iframe 
          src="/bot/index.html" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }}
          title="AI Bot"
        />
    </Layout>
  );
}