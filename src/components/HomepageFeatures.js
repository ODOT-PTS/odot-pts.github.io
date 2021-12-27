import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Track Transit Ridership',
    Img: <img src="/img/ridership-map.jpg" className={styles.featureImg} width="300" style={{ marginBottom: '30px' }}  />,
    description: (
      <>
        Answer questions like:
        <ul style={{ textAlign: 'left' }}>
          <li>How many people rode the bus/train/ferry last week?</li>
          <li>Which routes have the most riders?</li>
          <li>What time of day is the busiest?</li>
          <li>What are the busiest stops in the system?</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Standardize Ridership Data',
    Img: <img src="/img/ridership-data.png" className={styles.featureImg} width="350" style={{ marginBottom: '30px' }} />,
    description: (
      <>
        GTFS-ride provides transit agencies a standardized way to collect, store, share, report, and analyze their ridership data.
      </>
    ),
  },
  {
    title: 'Open Standard',
    Img: <img src="/img/osi-approved.png" className={styles.featureImg} width="150" />,
    description: (
      <>
        GTFS-ride is an open, flexible, non-proprietary standard with a documented <a href="/specification/change-process">change process</a>.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Img}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
