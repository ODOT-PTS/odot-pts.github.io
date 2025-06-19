import React from 'react';
import Layout from '@theme/Layout';

export default function Smart() {
  const gtfsRideData = [
    {
      startDate: '2025-03-27',
      endDate: '2025-03-31',
      link: '/gtfs-ride/jct/jct-2025-03-27-2025-03-31.zip',
    },
    {
      startDate: '2025-03-08',
      endDate: '2025-03-26',
      link: '/gtfs-ride/jct/jct-2025-03-08-2025-03-26.zip',
    },
    {
      startDate: '2025-03-01',
      endDate: '2025-03-07',
      link: '/gtfs-ride/jct/jct-2025-03-01-2025-03-07.zip',
    },
    {
      startDate: '2025-02-13',
      endDate: '2025-02-28',
      link: '/gtfs-ride/jct/jct-2025-02-13-2025-02-28.zip',
    },
    {
      startDate: '2025-02-01',
      endDate: '2025-02-12',
      link: '/gtfs-ride/jct/jct-2025-02-01-2025-02-12.zip',
    },
    {
      startDate: '2025-01-17',
      endDate: '2025-01-31',
      link: '/gtfs-ride/jct/jct-2025-01-17-2025-01-31.zip',
    },
    {
      startDate: '2025-01-06',
      endDate: '2025-01-16',
      link: '/gtfs-ride/jct/jct-2025-01-06-2025-01-16.zip',
    },
    {
      startDate: '2025-01-01',
      endDate: '2025-01-05',
      link: '/gtfs-ride/jct/jct-2025-01-01-2025-01-05.zip',
    },
    {
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      link: '/gtfs-ride/jct/jct-2024-12-01-2024-12-31.zip',
    },
    {
      startDate: '2024-11-22',
      endDate: '2024-11-30',
      link: '/gtfs-ride/jct/jct-2024-11-22-2024-11-30.zip',
    },
    {
      startDate: '2024-11-14',
      endDate: '2024-11-21',
      link: '/gtfs-ride/jct/jct-2024-11-14-2024-11-21.zip',
    },
    {
      startDate: '2024-11-01',
      endDate: '2024-11-13',
      link: '/gtfs-ride/jct/jct-2024-11-01-2024-11-13.zip',
    },
  ];

  return (
    <Layout title="JCT GTFS-Ride">
      <main className="container" style={{padding: '2rem 0'}}>
        <h1>JCT GTFS-Ride</h1>
        <table>
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Link</th>
              <th>Visualize</th>
            </tr>
          </thead>
          <tbody>
            {gtfsRideData.map((item, index) => (
              <tr key={index}>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td><a href={item.link}>Download</a></td>
                <td><a href="https://jctridership.gtfsride.org">Visualize</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="https://gtfsride.org/docs/about">About GTFS-ride</a>
      </main>
    </Layout>
  );
}
