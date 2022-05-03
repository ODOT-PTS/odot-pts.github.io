import React from 'react';
import clsx from 'clsx';
import styles from './HomepageUsage.module.css';

const companies = [
  {
    name: 'GMV',
    imagePath: 'img/gmv-logo.png'
  },
  {
    name: 'Optibus',
    imagePath: 'img/optibus-logo.svg'
  },
  {
    name: 'Swiftly',
    imagePath: 'img/swiftly-logo.png'
  },
]

const agencies = [
  {
    name: 'Cascades East Transit',
    imagePath: '/img/cet-logo.png',
    location: 'Bend, OR'
  },
  {
    name: 'Cherriots',
    imagePath: '/img/cherriots-logo.png',
    location: 'Salem, OR'
  },
  {
    name: 'Lane Transit District',
    imagePath: '/img/ltd-logo.png',
    location: 'Eugene, OR'
  },
  {
    name: 'South Metro Area Regional Transit',
    imagePath: '/img/smart-logo.png',
    location: 'Wilsonville, OR'
  }
];

function Company({ name, imagePath }) {
  return (
    <div className={clsx('col col--4')} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="text--center">
        <img src={imagePath} className={styles['company-logo']} alt={name} />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles['company-name']}>{name}</div>
      </div>
    </div>
  );
}

function Agency({ name, imagePath, location }) {
  return (
    <div className={clsx('col col--3')} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="text--center">
        <img src={imagePath} className={styles['agency-logo']} alt={name} />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles['agency-name']}>{name}</div>
        <div>{location}</div>
      </div>
    </div>
  );
}

export default function HomepageUsage() {
  return (
    <section>
      <div className="container margin-vert--lg">
        <div className="card" style={{ border: '1px solid #ddd' }}>
          <div className="card__header">
            <h2>Companies Supporting GTFS-ride</h2>
          </div>
          
          <div className="card__body">
            <div className="row">
              {companies.map((props, idx) => (
                <Company key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container margin-vert--lg">
        <div className="card" style={{ border: '1px solid #ddd' }}>
          <div className="card__header">
            <h2>Agencies Using GTFS-ride</h2>
          </div>
          
          <div className="card__body">
            <div className="row">
              {agencies.map((props, idx) => (
                <Agency key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
