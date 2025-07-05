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
    totalUsers - baseCityUsers.reduce((sum, c) => sum + c.activeUsers, 0)
  )

  // Update chart every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPerMinuteData(generateBarData())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Adjust totalUsers and cityUsers every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Change total by ±5
      const change = Math.floor(Math.random() * 11) - 5
      const newTotal = Math.max(400, totalUsers + change)

      // Randomly update each city's count by ±1 or ±2
      const updatedCities = cityUsers.map(city => {
        const adjustment = Math.floor(Math.random() * 5) - 2 // ±2
        return {
          ...city,
          activeUsers: Math.max(0, city.activeUsers + adjustment)
        }
      })

      // Recalculate city total
      const citySum = updatedCities.reduce((sum, c) => sum + c.activeUsers, 0)
      const newRemaining = Math.max(0, newTotal - citySum)

      // Set all states
      setTotalUsers(newTotal)
      setCityUsers(updatedCities)
      setRemainingTotal(newRemaining)
    }, 30000)

    return () => clearInterval(interval)
  }, [cityUsers, totalUsers])

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
          <div style={{fontStyle:'italic'}} className='realtime-link'>realtime</div>
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
