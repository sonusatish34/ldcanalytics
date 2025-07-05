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

const CompactBookingChart = () => {
  const [year, setYear] = useState(2025);
  const [loading, setLoading] = useState(false);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [data, setData] = useState(
    months.map((month) => ({ name: month, bookings: 0 }))
  );

  useEffect(() => {
    const fetchMonthData = async (selectedYear) => {
      setLoading(true);
      const promises = months.map((_, i) => {
        const month = String(i + 1).padStart(2, "0");
        return fetch(`https://dev.longdrivecars.com/site/dashboard?date=${selectedYear}-${month}`)
          .then(res => res.json())
          .then(json => {
            const value = json.status === "success" ? json.results.monthly_bookings || 0 : 0;
            return Math.round(value * 1.6);
          })
          .catch(() => 0);
      });

      const results = await Promise.all(promises);
      const newData = months.map((month, i) => ({
        name: month,
        bookings: results[i]
      }));
      setData(newData);
      setLoading(false);
    };

    fetchMonthData(year);
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
        <Skeleton height={360} width="100%" baseColor="#27314b" highlightColor="#3b4869" borderRadius={12} />
      ) : (
        <ResponsiveContainer width={1070} height={360}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#27314b", border: "none", color: "#fff" }} />
            <Bar
              dataKey="bookings"
              fill="#4A90E2"
              radius={[8, 8, 0, 0]}
              barSize={28}
              animationDuration={800}
            >
              <LabelList
                dataKey="bookings"
                position="top"
                fill="#fff"
                fontSize={12}
              />
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
