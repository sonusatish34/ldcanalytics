import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import axios from 'axios'
const ComponentName = props => {
  const citiesData = [
    { city: 'Hyderabad', users: 267 },
    { city: 'Visakhapatnam', users: 18 },
    { city: 'Secunderabad', users: 7 },
    { city: 'Karimnagar', users: 6 }
  ]

  const generateBarData = () => {
    const values = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 10 + 5)
    )
    return values
  }
  const [totalUsers, setTotalUsers] = useState(328)
  const [perMinuteData, setPerMinuteData] = useState(generateBarData())

  useEffect(() => {
    const interval = setInterval(() => {
      const data = generateBarData()
      const total = citiesData.reduce((acc, val) => acc + val.users, 0)
      setPerMinuteData(data)
      setTotalUsers(total)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const [realtimeData, setRealtimeData] = useState(null)
  const [realtimeDataCity, setRealtimeDataCity] = useState(null)

  useEffect(() => {
    const fetchRealtime = async () => {
      // try {
      //   const res = await axios.get('http://localhost:4000/analytics/realtimedozzy')
      //   setRealtimeData(res.data)
      // } catch (err) {
      //   console.error('Realtime fetch error', err)
      // }
    }
    const fetchRealtimeCities = async () => {
      try {
        const res = await axios.get('http://localhost:4000/analytics/by-city-bangalore');
        setRealtimeDataCity(res.data)
      } catch (err) {
        console.error('Realtime fetch error', err)
      }
    }

    fetchRealtime()
    fetchRealtimeCities()

    
  }, [])
  console.log('realtimeDataCity', realtimeDataCity)

  return (
    <div>
      <div className='analytics-widget'>
        <div className='top-section'>
          <h2>ACTIVE USERS IN LAST 30 MINUTES</h2>
          <ul className='space-y-1'>
            {realtimeData?.rows && (
              <>
                {/* <li>Total Rows: {realtimeData.rows.length}</li> */}
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
        </div>

        <div className='chart-container'>
          <Bar
            data={{
              labels: Array.from({ length: 30 }, (_, i) => ''),
              datasets: [
                {
                  label: '',
                  data: perMinuteData,
                  backgroundColor: '#4285f4'
                }
              ]
            }}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: { display: false },
                y: { display: false }
              }
            }}
          />
        </div>

        <div className='city-table'>
          <table>
            <thead>
              <tr style={{ paddingTop: '10px' }}>
                <th>CITY</th>
                <th>ACTIVE USERS89</th>
              </tr>
            </thead>
            <tbody>
              {console.log(realtimeDataCity,'kko')}
              {realtimeDataCity?.cities.map(item => (
                <tr key={item.city}>
                  <td>{item?.city}--</td>
                  <td>
                    <div className='bar-row'>
                      <div
                        className='bar'
                        style={{
                          width: `${(item?.users / totalUsers) * 100}%`
                        }}
                      />
                      <span>{item.activeUsers}</span>
                    </div>
                  </td>
                </tr>
                // <p>{item?.city}</p>
              ))}
            </tbody>
          </table>
          <div className='realtime-link'>View realtime ➜</div>
        </div>
      </div>
    </div>
  )
}

export default ComponentName
