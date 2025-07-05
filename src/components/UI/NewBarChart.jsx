import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

const ComponentName = () => {
  const baseCityUsers = [
    { city: 'Hyderabad', activeUsers: 267 },
    { city: 'Visakhapatnam', activeUsers: 18 },
    { city: 'Secunderabad', activeUsers: 7 },
    { city: 'Karimnagar', activeUsers: 6 }
  ]

  const generateBarData = () =>
    Array.from({ length: 30 }, () => Math.floor(Math.random() * 10 + 5))

  const [perMinuteData, setPerMinuteData] = useState(generateBarData())

  const [totalUsers, setTotalUsers] = useState(430)
  const [cityUsers, setCityUsers] = useState(baseCityUsers)
  const [remainingTotal, setRemainingTotal] = useState(
    430 - baseCityUsers.reduce((sum, c) => sum + c.activeUsers, 0)
  )

  // Update chart every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPerMinuteData(generateBarData())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Update total users (±5 to ±10) every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalUsers(prev => {
        const change = Math.floor(Math.random() * 11) - 5 // random between -5 and +5
        const newTotal = Math.max(400, prev + change) // keep minimum 400
        const newRemaining =
          newTotal - baseCityUsers.reduce((sum, c) => sum + c.activeUsers, 0)
        setRemainingTotal(newRemaining)
        return newTotal
      })
    }, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className='analytics-widget'>
        <div className='top-section'>
          <h2>ACTIVE USERS IN LAST 30 MINUTES</h2>
          <ul className='space-y-1'>
            <li>
              Total Active Users:{' '}
              <span style={{ fontWeight: '700', fontSize: '20px' }}>{totalUsers}</span>
            </li>
          </ul>
        </div>

        <div className='chart-container_chart'>
          <Bar
            height={300}
            width={800}
            data={{
              labels: Array.from({ length: 30 }, () => ''),
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

        <div style={{ paddingTop: '20px', paddingLeft: '30px' }} className='city-table'>
          <table>
            <thead>
              <tr style={{ color: 'black' }}>
                <th>CITY</th>
                <th>ACTIVE USERS</th>
              </tr>
            </thead>
            <tbody>
              {cityUsers.map(item => (
                <tr key={item.city}>
                  <td>{item.city}</td>
                  <td>
                    <div className='bar-row'>
                      <div
                        className='bar'
                        style={{
                          width: `${(item.activeUsers / totalUsers) * 100}%`,
                          backgroundColor: '#4285f4'
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
                        width: `${(remainingTotal / totalUsers) * 100}%`,
                        backgroundColor: '#999'
                      }}
                    />
                    <span>{remainingTotal}</span>
                  </div>
                </td>
              </tr>
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

        .bar-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bar {
          height: 12px;
          border-radius: 6px;
          transition: width 0.5s ease;
        }

        table {
          width: 100%;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        th,
        td {
          text-align: left;
          padding: 8px 12px;
        }

        .realtime-link {
          padding: 10px 0;
          font-weight: 500;
          color: #1a73e8;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default ComponentName
