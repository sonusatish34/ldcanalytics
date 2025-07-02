import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState(0);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/live-users');
      setActiveUsers(res.data.activeUsers);
    } catch (err) {
      console.error("Error fetching live users:", err);
      setActiveUsers(0);
    }
  };

  useEffect(() => {
    fetchData(); // initial fetch
    const interval = setInterval(fetchData, 10000); // fetch every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-users-box">
      <h2>Active Users (Realtime)</h2>
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activeUsers}</p>
    </div>
  );
};

export default LiveUsers;
