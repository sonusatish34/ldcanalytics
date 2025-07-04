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
  
  console.log(process.env.GOOGLE_PRIVATE_KEY,'GOOGLE_PRIVATE_KEY');
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_EMAIL_LDC,'REACT_APP_GOOGLE_CLIENT_EMAIL_LDC');
  

  useEffect(() => {
    const fetchRealtime = async () => {
      try {
        const res = await axios.get('https://ldcanalytics-drab.vercel.app/api/analytics/realtime')
        setRealtimeData(res.data)
      } catch (err) {
        console.error('Realtime fetch error', err)
      }
    } 
    const fetchRealtimeCities = async () => {
      try {
        const res = await axios.get('https://ldcanalytics-drab.vercel.app/api/analytics/by-city')
        setRealtimeDataCity(res.data)
      } catch (err) {
        console.error('Realtime fetch error', err)
      }
    }
    // https://ldcanalytics-drab.vercel.app/api/analytics/realtime

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
                  <span style={{fontWeight:'700',fontSize:'20px'}}>{realtimeData.rows.reduce(
                    (sum, row) => sum + parseInt(row.metricValues[0].value),
                    0
                  )}</span>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className='chart-container_chart'>
          <Bar
          height={300}
          width={800}
            data={{
              labels: Array.from({ length: 30 }, (_, i) => ''),
              datasets: [
                {
                  label: '',
                  data: perMinuteData,
                  backgroundColor: '#4285f4',
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

        <div style={{paddingTop:'20px', paddingLeft:'30px'}} className='city-table'>
          <table>
            <thead>
              <tr style={{color:"black"}}>
                <th>CITY</th>
                <th>ACTIVE USERS</th>
              </tr>
            </thead>
            {console.log(realtimeDataCity, 'jkk')}
            <tbody>
              {(() => {
                const allowedCities = [
                  'Hyderabad',
                  'Bengaluru',
                  'Visakhapatnam',
                  'Secunderabad'
                ]
                const filtered = realtimeDataCity?.cities?.filter(item =>
                  allowedCities.includes(item.city)
                )
                const remaining = realtimeDataCity?.cities?.filter(
                  item => !allowedCities.includes(item.city)
                )

                const totalUsers = realtimeDataCity?.cities?.reduce(
                  (sum, city) => sum + city.activeUsers,
                  0
                )

                const remainingTotal = remaining?.reduce(
                  (sum, city) => sum + city.activeUsers,
                  0
                )

                return (
                  <>
                    {filtered?.map(item => (
                      <tr key={item.city}>
                        <td>{item.city}</td>
                        <td>
                          <div className='bar-row'>
                            <div
                              className='bar'
                              style={{
                                width: `${
                                  (item.activeUsers / totalUsers) * 100
                                }%`
                              }}
                            />
                            <span>{item.activeUsers}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Remaining</td>
                      <td>
                        <div className='bar-row'>
                          <div
                            className='bar'
                            style={{
                              width: `${(remainingTotal / totalUsers) * 100}%`
                            }}
                          />
                          <span>{remainingTotal}</span>
                        </div>
                      </td>
                    </tr>
                  </>
                )
              })()}
            </tbody>
          </table>
          <div className='realtime-link'>View realtime ➜</div>
        </div>
      </div>
      <style jsx>{`
        .chart-container_chart {
          background: #1a1f36;
          padding: 1.2rem;
          border-radius: 12px;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          width: 490px;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

export default ComponentName
