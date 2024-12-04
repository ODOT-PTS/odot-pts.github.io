import React from 'react';
import Layout from '@theme/Layout';

export default function Smart() {
  return (
    <Layout title="SMART Gtfs-Ride">
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
            <tr>
              <td>2024-11-25</td>
              <td>2024-11-30</td>
              <td><a href="/gtfs-ride/smart/smart-2024-11-25-2024-11-30.zip">Download</a></td>
            </tr>
            <tr>
              <td>2024-11-01</td>
              <td>2024-11-24</td>
              <td><a href="/gtfs-ride/smart/smart-2024-11-01-2024-11-24.zip">Download</a></td>
            </tr>
          </tbody>
        </table>
        <a href="https://gtfsride.org">About GTFS-ride</a>
      </main>
    </Layout>
  );
}
