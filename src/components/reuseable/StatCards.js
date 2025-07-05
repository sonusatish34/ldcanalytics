import React, { useEffect, useState } from "react";
import "./StatCards.css";
import { FaCarAlt, FaUserCheck } from "react-icons/fa";

const stats = [
  {
    title: "Total Cars",
    value: 17642,
    icon: <FaCarAlt />,
    gradient: "card-orange",
  },
  {
    title: "Total Bookings",
    value: "224307",
    icon: <FaUserCheck />,
    gradient: "card-green",
    year:'2024-25'
  },
  {
    title: "Customer Base",
    value: "10L",
    icon: <FaUserCheck />,
    gradient: "card-green",
    year:''
  },
];

const StatCard = ({ title, value, icon, gradient,year }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newValue = Math.floor(progress * value);
      setDisplayValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <div className={`stat-card ${gradient}`}>
      <div className="stat-info">
        <p className="stat-title">{title}</p>
        <h2 className="stat-value">{displayValue.toLocaleString()}+</h2>
      </div>
      <div style={{display:'flex' ,flexDirection:'column',gap:"10px"}} className="stat-icon">
        {year && <span className="year_card">{year}</span>}
       <span>{icon}</span> </div>
    </div>
  );
};

const StatCards = () => {
  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatCards;
