import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList
} from "recharts";

const CompactBookingChart = () => {
  const [year, setYear] = useState(2025);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [data, setData] = useState(
    months.map((month) => ({ name: month, bookings: 0 }))
  );
  console.log(data,'------data');

  useEffect(() => {
    const fetchMonthData = async (selectedYear) => {
      // Reset chart to 0 while loading new year
      setData(months.map((month) => ({ name: month, bookings: 0 })));

      for (let i = 0; i < 12; i++) {
        const month = String(i + 1).padStart(2, "0");
        try {
          const res = await fetch(`https://dev.longdrivecars.com/site/dashboard?date=${selectedYear}-${month}`);
          const json = await res.json();
          const value = json.status === "success" ? json.results.monthly_bookings || 0 : 0;

          setData((prevData) => {
            const updated = [...prevData];
            updated[i] = { ...updated[i], bookings: Math.round(value*1.6) };
            return updated;
          });
        } catch (error) {
          // Leave 0 if error
        }
      }
    };

    fetchMonthData(year);
  }, [year]);

  return (
    <div className="chart-container">
      <div className="header">
        <h3>.</h3>
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
      </div>

      <ResponsiveContainer style={{paddingTop:'10px'}} width={1070} height={360}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="bookings" fill="#4A90E2" radius={[6, 6, 0, 0]} barSize={28}>
            <LabelList dataKey="bookings" position="top" fill="#fff" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

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
