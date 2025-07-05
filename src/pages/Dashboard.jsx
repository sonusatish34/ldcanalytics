import React, { useState, useEffect } from 'react'
import '../styles/dashboard.css'
import SingleCard from '../components/reuseable/SingleCard'
import ActiveUsersDashboard from '../components/UI/ActiveUsersDashboard'
import MileChart from '../charts/MileCharts'
import CarStatsChart from '../charts/CarStatsChart'
import CarStatsPieChart from '../charts/CarStatsPieChart'
import RecommendCarCard from '../components/UI/RecommendCarCard'
import DashboardCalendar from '../components/UI/DashboardCalendar'
import recommendCarsData from '../assets/dummy-data/recommendCars'
import { PieChart } from 'recharts'
import NewBarChart from '../components/UI/NewBarChart'
import NewBarChartBng from '../components/UI/NewBarChartBng'
import { FaCarAlt, FaUserCheck } from 'react-icons/fa'
import StatCards from '../components/reuseable/StatCards'
import ImagesTwo from '../components/UI/ImagesTwo'
const Dashboard = () => {
  const [dshList, setDshList] = useState()
  console.log(dshList, 'final')

  useEffect(() => {
    async function GetDashboard () {
      const myHeaders = new Headers()
      myHeaders.append('accept', 'application/json')

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      }

      const response = await fetch(
        'https://dev.longdrivecars.com/site/dashboard',
        requestOptions
      )
      const items = await response.json()
      console.log(items, 'itemssss-----')
      setDshList(items?.results)
    }
    GetDashboard()
  }, [])
  const carObj = {
    title: 'Total Cars',
    totalNumber: dshList?.total_cars,
    icon: 'ri-police-car-line'
  }
  const warObj = {
    title: 'Total Cars In Warangal',
    totalNumber: dshList?.warangal_cars,
    icon: 'ri-police-car-line'
  }
  const hydObj = {
    title: 'Total Cars In Hyderabad',
    totalNumber: dshList?.hyd_cars,
    icon: 'ri-police-car-line'
  }
  const VijObj = {
    title: 'Total Cars In Vijayawada',
    totalNumber: dshList?.vijayawada_cars,
    icon: 'ri-police-car-line'
  }
  const VizObj = {
    title: 'Total Cars In Vizag',
    totalNumber: dshList?.vizag_cars,
    icon: 'ri-police-car-line'
  }

  const tripObj = {
    title: 'Daily Trips',
    totalNumber: 1697,
    icon: 'ri-steering-2-line'
  }

  const clientObj = {
    title: 'Booked Clients',
    totalNumber: dshList?.total_bookings,
    icon: 'ri-user-line'
  }

  const distanceObj = {
    title: 'Kilometers Daily',
    totalNumber: 2167,
    icon: 'ri-timer-flash-line'
  }

  const stats = [
    {
      title: 'Total Cars',
      value: 17642,
      icon: <FaCarAlt />,
      gradient: 'card-orange'
    },
    {
      title: 'Booked Clients',
      value: 216977,
      icon: <FaUserCheck />,
      gradient: 'card-green'
    }
  ]

  return (
    <div className='dashboard'>
      <div className='dashboard__wrapper'>
        <div className='total_and_bookngs'>
          <StatCards />
        </div>
        <p style={{ padding: '20px 2px', fontSize: '30px' }}>Active Cars</p>
        <div className='dashboard__cards'>
          <SingleCard item={hydObj} />
          <SingleCard item={VijObj} />
          <SingleCard item={VizObj} />
          <SingleCard item={warObj} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'normal',
            gap: '40px',
            padding: '10px 0px',
            alignItems: ''
          }}
        >
          <NewBarChart />
          <div
            style={{ margin: '32px 2px' }}
            className='stats analytics-widget'
          >
            <h3
              style={{
                textAlign: 'center',
                fontSize: '22px',
                paddingTop: '10px'
              }}
            >
              <p>Bookings Vs Cancellation</p>
            </h3>
            <CarStatsPieChart data={dshList} />
          </div>
        </div>
        {/* <p style={{position:'relative', color:'red', right:'0'}}>jo</p> */}
        <div className='statics'>
          <div style={{ background: '' }} className='stats'>
          <div style={{ background: '' }} className='stats'>
            {/* <h3 className='stats__title'>Car Statistics</h3> */}
            {/* <CarStatsChart /> */}
            <h3 style={{ paddingBottom: '20px',fontSize:'30px' }}>Annual Bookings Stats</h3>
            <DashboardCalendar />
          </div>
        </div>
      </div>
    
      {/* <ImagesTwo /> */}
    </div>
    </div>
  )
}
;<style jsx>{`
  .stats-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
  }

  .stat-card {
    flex: 1 1 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 20px 25px;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  /* Gradients */
  .card-orange {
    background: linear-gradient(to right, #ff6a00, #ee0979);
  }

  .card-green {
    background: linear-gradient(to right, #00c9a7, #007f73);
  }

  .stat-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  .stat-value {
    font-size: 32px;
    font-weight: 700;
  }

  .stat-icon {
    font-size: 30px;
    opacity: 0.85;
  }
`}</style>

export default Dashboard
