// "use client";
// import React, { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// const AnalyticsDashboard = () => {
//   const [data, setData] = useState(null);

//   const fetchAnalytics = async () => {
//     const res = await fetch("http://localhost:4000/api/analytics");
//     const json = await res.json();
//     setData(json);
//   };

//   useEffect(() => {
//     fetchAnalytics();
//     const interval = setInterval(fetchAnalytics, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   if (!data) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto bg-white p-6 mt-10 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold">Active Users (Last 30 Minutes)</h2>
//       <div className="text-5xl font-bold text-blue-600 my-4">{data.totalUsers}</div>

//       <ResponsiveContainer width="100%" height={150}>
//         <BarChart data={data.usersPerMinute}>
//           <XAxis dataKey="minute" hide />
//           <Tooltip />
//           <Bar dataKey="users" fill="#3B82F6" />
//         </BarChart>
//       </ResponsiveContainer>

//       <h3 className="text-xl font-semibold mt-6">Top Countries</h3>
//       <table className="w-full mt-2 text-left border-t">
//         <thead>
//           <tr>
//             <th className="py-2">Country</th>
//             <th className="py-2">Active Users</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.countryData.map((c, i) => (
//             <tr key={i} className="border-t">
//               <td className="py-1">{c.country}</td>
//               <td className="py-1">{c.users}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AnalyticsDashboard;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ActiveUsersDashboard () {
  const [data, setData] = useState(null)
  const [dataBng, setDataBng] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/analytics/overview')
        setData(res.data)
      } catch (err) {
        console.error('Fetch error', err)
      }
    }

    fetchData()
  }, [])
  console.log(data, '456789')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/analytics/overview-bangalore')
        setDataBng(res.data)
      } catch (err) {
        console.error('Fetch error', err)
      }
    }

    fetchData()
  }, [])
  console.log(dataBng, '456789')

  const [realtimeData, setRealtimeData] = useState(null)

  useEffect(() => {
    const fetchRealtime = async () => {
      try {
        const res = await axios.get('https://your-vercel-domain.vercel.app/api/analytics/realtime')
        setRealtimeData(res.data)
      } catch (err) {
        console.error('Realtime fetch error', err)
      }
    }

    fetchRealtime()
  }, [])
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>

    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>Firebase GA4 Analytics</h2>
      {data ? (
        <ul>
          <li>Last 30 Days: {data.rows[0].metricValues[0].value}</li>
          <li>Last 7 Days: {data.rows[1].metricValues[0].value}</li>
          <li>Yesterday: {data.rows[2].metricValues[0].value}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <h2 className='text-lg font-semibold mt-6'>
        Active Users (Last 30 Minutes)
      </h2>
      <ul className='space-y-1'>
        {realtimeData?.rows && (
          <>
            <li>Total Rows: {realtimeData.rows.length}</li>
            <li>
              Total Active Users:{' '}
              {realtimeData.rows.reduce(
                (sum, row) => sum + parseInt(row.metricValues[0].value),
                0
              )}
            </li>
          </>
        )}
      </ul>

      <h3 className='font-medium mt-4'>Users by Country</h3>
      <ul className='text-sm pl-4 list-disc'>
        {realtimeData?.rows?.map((row, index) => (
          <li key={index}>
            {row.dimensionValues[1].value}: {row.metricValues[0].value}
          </li>
        ))}
      </ul>
    </div>

    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>Firebase GA4 Analytics for Dozzy</h2>
      {dataBng ? (
        <ul>
          <li>Last 30 Days: {dataBng.rows[0].metricValues[0].value}</li>
          <li>Last 7 Days: {dataBng.rows[1].metricValues[0].value}</li>
          <li>Yesterday: {dataBng.rows[2].metricValues[0].value}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <h2 className='text-lg font-semibold mt-6'>
        Active Users (Last 30 Minutes)
      </h2>
      <ul className='space-y-1'>
        {realtimeData?.rows && (
          <>
            <li>Total Rows: {realtimeData.rows.length}</li>
            <li>
              Total Active Users:{' '}
              {realtimeData.rows.reduce(
                (sum, row) => sum + parseInt(row.metricValues[0].value),
                0
              )}
            </li>
          </>
        )}
      </ul>

      <h3 className='font-medium mt-4'>Users by Country</h3>
      <ul className='text-sm pl-4 list-disc'>
        {realtimeData?.rows?.map((row, index) => (
          <li key={index}>
            {row.dimensionValues[1].value}: {row.metricValues[0].value}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default ActiveUsersDashboard
