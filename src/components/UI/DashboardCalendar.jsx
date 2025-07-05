import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const staticData = {
  "2024": [
    { name: "Jan", bookings: 0 },
    { name: "Feb", bookings: 0 },
    { name: "Mar", bookings: 0 },
    { name: "Apr", bookings: 0 },
    { name: "May", bookings: 30202 },
    { name: "Jun", bookings: 23451 },
    { name: "Jul", bookings: 23900 },
    { name: "Aug", bookings: 25110 },
    { name: "Sep", bookings: 20752 },
    { name: "Oct", bookings: 22900 },
    { name: "Nov", bookings: 29404 },
    { name: "Dec", bookings: 32145 }
  ],
  "2025": [
    { name: "Jan", bookings: 32322 },
    { name: "Feb", bookings: 32123 },
    { name: "Mar", bookings: 15411 },
    { name: "Apr", bookings: 21500 },
    { name: "May", bookings: 24760 },
    { name: "Jun", bookings: 21800 },
    { name: "Jul", bookings: 3996 },
    { name: "Aug", bookings: 0 },
    { name: "Sep", bookings: 0 },
    { name: "Oct", bookings: 0 },
    { name: "Nov", bookings: 0 },
    { name: "Dec", bookings: 0}
  ]
};

const CompactBookingChart = () => {
  const [year, setYear] = useState(2025);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setData(staticData[year]);
      setLoading(false);
    }, 700); // simulate a short delay

    return () => clearTimeout(timeout);
  }, [year]);

  return (
    <div className="chart-container">
      <div className="header">
        <h3>Monthly Bookings</h3>
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
      </div>

      {loading ? (
        <Skeleton
          height={360}
          width="100%"
          baseColor="#27314b"
          highlightColor="#3b4869"
          borderRadius={12}
        />
      ) : (
        <ResponsiveContainer width={1070} height={360}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#27314b", border: "none", color: "#fff" }} />
            <Bar dataKey="bookings" fill="#4A90E2" radius={[8, 8, 0, 0]} barSize={28}>
              <LabelList dataKey="bookings" position="top" fill="#fff" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}

      <style jsx>{`
        .chart-container {
          background: #1a1f36;
          padding: 1.2rem;
          border-radius: 12px;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          width: 1176px;
          margin: auto;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        h3 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 500;
        }

        select {
          padding: 6px 10px;
          border-radius: 6px;
          background: #27314b;
          color: white;
          border: 1px solid #4a4a4a;
          font-size: 0.95rem;
        }

        select:focus {
          outline: none;
          border-color: #000;
        }
      `}</style>
    </div>
  );
};

export default CompactBookingChart;
