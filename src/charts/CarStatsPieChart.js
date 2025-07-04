import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d"];

const CarStatsPieChart = ({ data }) => {
  console.log(data, 'data in pie chart');

  const carPieStatsData = [
    { name: "Cancellation", value: data?.bookings_vs_cancel.cancel_count },
    { name: "Bookings", value: data?.bookings_vs_cancel.bookings_count },
  ];

  return (
    <div style={{ width: '500px' }}>
      {/* Custom Legend */}
      <div style={{ display: 'flex', justifyContent: 'center',alignContent:"center",gap:"10px", marginTop: 10 , marginBottom: 10 }}>
        {carPieStatsData.map((entry, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: 6,
                borderRadius: 2,
              }}
            />
            <span style={{ fontSize: 14 }}>{entry.name}</span>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={carPieStatsData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {carPieStatsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarStatsPieChart;
