import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div class="row">
          <div class="col col--4">
            <h1 className={styles.hero__title}><img src="/img/gtfs-ride-logo-white.svg" className={styles.hero__image} alt="GTFS-ride" /></h1>
          </div>
          <div class="col col--5">
            <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg margin-right--sm margin-top--sm"
                to="/docs/about">
                About GTFS-ride
              </Link>
              <Link
                className="button button--secondary button--lg margin-top--sm"
                to="/specification">
                GTFS-Ride Specification
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
