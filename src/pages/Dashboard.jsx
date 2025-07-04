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
    const apiKey = process.env.REACT_APP_API_KEY

    console.log('My API Key:', apiKey) // This will print your Vercel or local key  }, [])
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
  return (
    <div className='dashboard'>
      <div className='dashboard__wrapper'>
        <div className='dashboard__cards'>
          <SingleCard item={carObj} />
          {/* <SingleCard item={tripObj} /> */}

          <SingleCard item={clientObj} />
          {/* <SingleCard item={distanceObj} /> */}
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
            gap: '30px',
            padding: '10px 0px',
            alignItems: ''
          }}
        >
          {/* <NewBarChart /> */}
          <NewBarChart />
          <div
            style={{ margin: '32px 2px' }}
            className='stats analytics-widget'
          >
            <h3
              style={{
                textAlign: 'center',
                fontSize: '22px',
                paddingBottom: '10px'
              }}
            >
              <p>Bookings Vs Cancellation</p>
            </h3>
            <CarStatsPieChart data={dshList} />
          </div>
        </div>
        {/* <p style={{position:'relative', color:'red', right:'0'}}>jo</p> */}
        <div className='statics'>
          <div style={{ background: '#f9f9f9' }} className='stats'>
            {/* <h3 className='stats__title'>Car Statistics</h3> */}
            {/* <CarStatsChart /> */}
            <h3 style={{ paddingBottom: '20px' }}>Annual Bookings Stats</h3>
            <DashboardCalendar />
          </div>
        </div>

        <div className='recommend__cars-wrapper'>
          {recommendCarsData.map(item => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      {/* <ActiveUsersDashboard /> */}
    </div>
  )
}
export default Dashboard
