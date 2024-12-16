import React from 'react';
import Layout from '@theme/Layout';

export default function Smart() {
  const gtfsRideData = [
    {
      startDate: '2024-11-25',
      endDate: '2024-11-30',
      link: '/gtfs-ride/smart/smart-2024-11-25-2024-11-30.zip',
    },
    {
      startDate: '2024-11-01',
      endDate: '2024-11-24',
      link: '/gtfs-ride/smart/smart-2024-11-01-2024-11-24.zip',
    },
  ];

  return (
    <Layout title="SMART GTFS-Ride">
      <main className="container" style={{padding: '2rem 0'}}>
        <h1>SMART GTFS-Ride</h1>
        <table>
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {gtfsRideData.map((item, index) => (
              <tr key={index}>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td><a href={item.link}>Download</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="https://gtfsride.org/docs/about">About GTFS-ride</a>
      </main>
    </Layout>
  );
}
